import React, { useState } from 'react';
import TabBar from './TabBar';

const Window: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const tabs: string[] = ['Tab 1', 'Tab 2', 'Tab 3'];

  return (
    <div className="relative max-w-4xl mx-auto mt-10 before:content-[''] before:absolute before:top-2 before:left-2 before:w-full before:h-full before:bg-teal-400 before:rounded-lg before:z-0">
      <div className="relative border border-gray-400 rounded-lg bg-white z-10">
        <div className="flex items-center justify-between bg-gray-200 p-2 rounded-t-lg">
          <TabBar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="flex space-x-2">
            <button className="w-8 h-8 bg-red-500 rounded-full text-white flex items-center justify-center hover:bg-red-700">
              X
            </button>
          </div>
        </div>
        <div className="p-4">
          {activeTab === 0 && <div>Content for Tab 1</div>}
          {activeTab === 1 && <div>Content for Tab 2</div>}
          {activeTab === 2 && <div>Content for Tab 3</div>}
        </div>
      </div>
    </div>
  );
};

export default Window;
