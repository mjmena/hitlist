import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Option } from '../types/Option';
import Goal from './Goal';

const Hitlist: NextPage<{ hitlist: Option[] }> = ({ hitlist }) => {
  const seed = useRouter().asPath;

  return (
    <main className="flex flex-1 flex-col justify-center px-20">
      <Link
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        href="/"
      >
        New Seed
      </Link>
      <br />
      <br />
      {hitlist.map((goal, index) => (
        <Goal key={seed + String(index)} goal={goal} />
      ))}
    </main>
  );
};

export default Hitlist;
