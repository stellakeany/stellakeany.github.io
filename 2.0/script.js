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
  elmnt.style.backgroundColor = '#EBF7DE';

  if (pageName === "Skills") {
    setTimeout(animateProgress, 100);
    resetTimeline();
  } else if(pageName === "Education"){
    setTimeout(animateTimeline, 100);
    resetProgress();
  } else{
    resetTimeline();
    resetProgress();
  }

  resetType();
}

function loadDefault(){
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
}

function animateTimeline(){
  var line = document.getElementById("timeline");
  line.style.height = '90%'

  const descriptors = document.getElementsByClassName("education-descriptor");
  staggeredFade(descriptors, 0);
}

function staggeredFade(list, index){
  if(index === list.length){
    return;
  }
  fadeIn(list[index]);
  setInterval(staggeredFade(list, index+1), 1000);
}

function fadeIn(element){
  var opacity = 0;
  var intervalID = setInterval(function() {
    if (opacity < 1) {
      opacity += 0.1;
      element.style.opacity = opacity
    } else {
      clearInterval(intervalID);
    }
 }, 75);
}

function resetTimeline(){
  var line = document.getElementById("timeline");
  line.style.height = '10%'

  const descriptors = document.getElementsByClassName("education-descriptor");
  for (let x = 0; x < descriptors.length; x++) {
    descriptors[x].style.opacity = 0;
  }
  
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

var typeText = '';
var typeCounter = 0;
var title;

function typeWriter(tabID){

  if(tabID === "Home"){
    typeText = "Hello World ..."
  } else {
    typeText = tabID;
  }

  var tab = document.getElementById(tabID);
  title = tab.getElementsByClassName("title")[0];

  typing();
}

function typing(){
  if(typeCounter < typeText.length){
    title.innerHTML += typeText.charAt(typeCounter);
    typeCounter++;
    setTimeout(typing, 100);
  } else typeCounter = 0;
}

function resetType(){
  var typeText = '';
  var typeCounter = 0;
  var allTitles = document.getElementsByClassName("title");
  for (let i = 0; i < allTitles.length; i++) {
    allTitles[i].innerHTML = "";
  }
}