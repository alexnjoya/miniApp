// Header.tsx
import React from 'react';
import Hamster from '../icons/Hamster';

interface HeaderProps {
  levelNames: string[];
  levelIndex: number;
}

const Header: React.FC<HeaderProps> = ({ levelNames, levelIndex }) => {
  return (
    <div className="flex flex-col items-center space-x-2 mb-10px pt-4" >
      <div className="p-1 rounded-lg bg-[#1d2025]">
        <Hamster size={24} className="text-[#d4d4d4]" />
      </div>
      <div>
        <p className="text-sm">Dragon (DRO)</p>
      </div>
      <div className="flex items-center justify-between space-x-4 mt-1">
        <div className="w-full">
          <div className="flex justify-between">
            <p className="text-sm">{levelNames[levelIndex]}</p>
            <p className="text-sm">{levelIndex + 1} <span className="text-[#95908a]">/ {levelNames.length}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
