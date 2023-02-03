import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { Option, options } from './type/Option';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Hitlist from './Hitlist';

const Home: NextPage = () => {
  const hitlist = useQueryHitlist();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Hit List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hitlist hitlist={hitlist} />
    </div>
  );
};

export default Home;

const useQueryHitlist = () => {
  let [hitlist, setHitlist] = useState<Option[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    if (
      typeof router.query.seed == 'string' &&
      isValidSeed(router.query.seed)
    ) {
      const goals = decodeSeed(router.query.seed);
      setHitlist(goals.map((key) => options[key]));
    } else {
      const selectedOptions = options
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
        .slice(0, 8);
      setHitlist(selectedOptions);
      let query = selectedOptions
        .reduce((query, option) => (query += option.key + '+'), '')
        .slice(0, -1);
      router.push({
        pathname: '/',
        query: { seed: query },
      });
    }
  }, [router.isReady, router.query]);

  return hitlist;
};

function isValidSeed(seed: String) {
  const goals = decodeSeed(seed);
  if (goals.length !== 8) return false;
  return goals.every((goal) => 0 <= goal && goal < 17);
}

function decodeSeed(seed: String) {
  return seed.split('+').map(Number);
}
