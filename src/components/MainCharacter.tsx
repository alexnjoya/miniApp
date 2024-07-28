// MainCharacter.tsx
import React from 'react';
import { mainCharacter } from '../images';

interface MainCharacterProps {
  handleCardClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  points: number;
}

const MainCharacter: React.FC<MainCharacterProps> = ({ handleCardClick, points }) => {
  return (
    <div className="px-4 mt-4 flex justify-center">
      <div className="w-80 h-80 p-4 rounded-full circle-outer" onClick={handleCardClick}>
        <div className="w-full h-full rounded-full circle-inner">
          <img src={mainCharacter} alt="Main Character" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default MainCharacter;
