import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Option } from '../types/Option';
import Goal from './Goal';

const Hitlist: NextPage<{ hitlist: Option[] }> = ({ hitlist }) => {
  const seed = useRouter().asPath;

  return (
    <main className="bg-black w-screen h-screen">
      <div className="flex flex-row flex-wrap justify-left">
        {hitlist.map((goal, index) => (
          <div className="min-w-fit">
            <Goal key={seed + String(index)} goal={goal} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Hitlist;
