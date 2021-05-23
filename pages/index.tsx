import Head from 'next/head';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get('/api/statistics');
      setData(response.data);
    })();
  }, [])
  return (
    <div className="flex flex-col justify-center items-center">
      <Head>
        <title>Social Codealo</title>
        <meta name="description" content="Mira todas las cosas sociales que tenemos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {data.map((x) => <div>Youtube: {x.youtube}</div>)}
      </div>
    </div>
  )
}
