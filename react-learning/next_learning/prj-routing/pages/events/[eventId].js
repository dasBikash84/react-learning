import { useRouter } from 'next/router';

export default function EventDetails() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);
  return <h1>Events details page...</h1>;
}
