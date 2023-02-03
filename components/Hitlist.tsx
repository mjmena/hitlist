import type { NextPage } from 'next';
import Link from 'next/link';
import { Option } from '../types/Option';
import Goal from './Goal';

const Hitlist: NextPage<{ hitlist: Option[] }> = ({ hitlist }) => {
  return (
    <main className="flex flex-1 flex-col justify-center px-20">
      <Link href="/">New Seed</Link>
      {hitlist.map((goal) => (
        <Goal key={goal.key} goal={goal} />
      ))}
    </main>
  );
};

export default Hitlist;
