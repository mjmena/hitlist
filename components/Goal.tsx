import type { NextPage } from 'next';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import { Option } from '../types/Option';

const Goal: NextPage<{ goal: Option }> = ({ goal }) => {
  const [color, setColor] = useState('bg-white');

  const cycleColor = useCallback(() => {
    if (color === 'bg-white') setColor('bg-blue-300');
    else if (color === 'bg-blue-300') setColor('bg-red-300');
    else if (color === 'bg-red-300') setColor('bg-white');
  }, [color]);

  const style = `cursor-pointer select-none ${color}`;

  return (
    <div className={style} onClick={(e) => cycleColor()}>
      <Image src={goal.image} width={96} height={96} />
      {goal.name} {goal.location}
    </div>
  );
};

export default Goal;
