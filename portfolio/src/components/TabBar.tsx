import React from 'react';
import '../index.css';

interface TabBarProps {
    tabs: string[];
    activeTab: number;
    setActiveTab: (index: number) => void;
}

const TabBar: React.FC<TabBarProps> = ({ tabs, activeTab, setActiveTab }) => {
return (
    <div className="flex space-x-2">
    {tabs.map((tab, index) => (
        <button
        key={index}
        className={`px-4 py-2 rounded-t-lg ${index === activeTab ? 'bg-white' : 'bg-gray-300'}`}
        onClick={() => setActiveTab(index)}
        >
        {tab}
        </button>
    ))}
    </div>
);
};

export default TabBar;
