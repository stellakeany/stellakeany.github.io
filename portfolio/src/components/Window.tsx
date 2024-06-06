import React, { useState } from 'react';
import TabBar from './TabBar';
import SearchBar from './SearchBar';
import GlobeIcon from '../assets/globe.svg';
import ExitIcon from '../assets/exit.svg';

const Window: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const tabs: string[] = ['Tab 1', 'Tab 2', 'Tab 3'];

  return (
    <div className="relative max-w-4xl mx-auto mt-10 before:content-[''] before:absolute before:top-3 before:left-3 before:w-full before:h-full before:bg-blue-dark before:rounded-lg before:z-0">
      <div className="relative border-2 border-black rounded-lg bg-white z-10">
        <div className="flex items-center justify-between bg-gray-light px-2 pt-2 rounded-t-lg border-b-2 border-black">
          <div className="flex space-x-2">
            <img src={GlobeIcon} alt="Globe" className="w-8 h-8 mb-2" />
            <TabBar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          <div className="flex space-x-2">
            <button className="w-8 h-8 mb-2 border-2 border-black bg-red rounded-lg text-white flex items-center justify-center hover:bg-red-light">
              <img src={ExitIcon} alt="Exit" className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div>
          <SearchBar/>
          {activeTab === 0 && <div>Content for Tab 1</div>}
          {activeTab === 1 && <div>Content for Tab 2</div>}
          {activeTab === 2 && <div>Content for Tab 3</div>}
        </div>
      </div>
    </div>
  );
};

export default Window;
