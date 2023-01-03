import { useRouter } from 'next/router';

export default function AllEvents() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);
  return <h1>Events list page...</h1>;
}
