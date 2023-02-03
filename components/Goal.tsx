import type { NextPage } from 'next';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import { Option } from '../types/Option';

const Goal: NextPage<{ goal: Option }> = ({ goal }) => {
  const [color, setColor] = useState('bg-black');

  const cycleColor = useCallback(() => {
    if (color === 'bg-black') setColor('bg-blue-500');
    else if (color === 'bg-blue-500') setColor('bg-red-500');
    else if (color === 'bg-red-500') setColor('bg-black');
  }, [color]);

  const style = `cursor-pointer select-none hover:brightness-150 ${color}`;

  return (
    <div className="w-28">
      <div className={style} onClick={(e) => cycleColor()}>
        <div className="text-white text-center ">{goal.name}</div>
        <Image
          className="mx-2"
          src={goal.image}
          width={96}
          height={96}
          alt={goal.name}
        />
      </div>
      <div className="text-white text-center text-xs">
        <div>{goal.world}</div>
        <div>{goal.room}</div>
      </div>
    </div>
  );
};

export default Goal;
