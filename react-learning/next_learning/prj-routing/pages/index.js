import { useRouter } from 'next/router';

export default function FeaturedEvents() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return <h1>Featured events page...</h1>;
}
