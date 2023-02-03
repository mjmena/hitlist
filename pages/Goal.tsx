import type { NextPage } from 'next';
import { useCallback, useState } from 'react';
import { Option } from './type/Option';

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
      {goal.name} {goal.location}
    </div>
  );
};

export default Goal;
