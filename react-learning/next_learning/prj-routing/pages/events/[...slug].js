import { useRouter } from 'next/router';

export default function EventsAllCatcch() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);
  return <h1>Events all catch page...</h1>;
}
