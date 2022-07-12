function openPage(pageName, elmnt) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = '#F3F4CD';

  if (pageName === "Skills") {
    setTimeout(animateProgress, 100);
  } else{
    resetProgress();
  }
}

function loadDefault(){
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
}

function animateProgress(){
  const bars = document.getElementsByClassName("inner-progress-bar");
  var x;
  
  for (x = 0; x < bars.length; x++) {
    var percentage = bars[x].id;
    bars[x].style.width = percentage;
  }

}

function resetProgress(){
  const bars = document.getElementsByClassName("inner-progress-bar");
  var x;
  
  for (x = 0; x < bars.length; x++) {
    bars[x].style.width = '10%';
  }
}

/*
function typeWriter(tabID) {
  var speed = 1;
  var typeText;

  switch(tabID){
    case "Home":
      typeText = "Hello World..."
      break;
    case "Projects":
      typeText = "Projects"
      break;
    case "Education":
      typeText = "Education"
      break;
    case "Skills":
      typeText = "Skills"
      break;
  }

  var tab = document.getElementById(tabID);
  var title = tab.getElementsByTagName("h2");

  type(0, typeText, title[0], speed);
}

function type(counter, text, element, speed){

  if(counter < text.length){
    element.innerHTML += text.charAt(counter);
    counter++;
    setTimeout(type(counter, text, element, speed), speed);
  }
}*/