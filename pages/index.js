import GET_LATEST_SIGNS from "../lib/apollo/queries/getLatestSigns";
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import {Sign} from '../components/Sign';
import {Loading} from '../components/Loading';

function HomePage() {
  const {loading, data} = useQuery(GET_LATEST_SIGNS, {
    fetchPolicy: 'no-cache',
  });

  if (loading) {
    return <Loading/>;
  }
   
  return (
  <div>
    <h1>Next.js SignBook</h1>
    <Link href="/new-sign">
      <button>Dodaj wpis</button>
    </Link>
    <div>
    {data.sign.map((sign) => (
    <Sign key={sign.uuid} {...sign} />
  ))}
    </div>
  </div>
  );
}

export default HomePage;