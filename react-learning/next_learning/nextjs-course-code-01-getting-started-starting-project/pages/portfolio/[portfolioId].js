import { useRouter } from 'next/router';
import { Fragment } from 'react';

export default function () {
  const router = useRouter();

  console.log(router.query);
  console.log(router.pathname);

  return (
    <Fragment>
      <h1>Portfolio Project page.</h1>
    </Fragment>
  );
}
