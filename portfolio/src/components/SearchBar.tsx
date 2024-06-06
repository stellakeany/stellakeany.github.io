import React from 'react';
import '../index.css';
import SearchIcon from '../assets/search.svg';


const SearchBar: React.FC = () => {
return (
    <div className='w-full border-b-2 p-2 flex items-center justify-between border-black bg-white'>
        <div className='flex space-x-2'>
            <button className="w-8 h-8 border-2 mr-2 border-black bg-gray rounded-lg flex items-center justify-center hover:bg-gray-light">
                <img src={SearchIcon} alt="Search" className="w-5 h-5" />
            </button>
        </div>
        <div className='flex space-x-2 w-full border-2 h-8 mr-2 border-black bg-white-light rounded-lg text-gray-dark px-2'>
            https://stellakeany.github.io/
        </div>
    </div>
);
};

export default SearchBar;