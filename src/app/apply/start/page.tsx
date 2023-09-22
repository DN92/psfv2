'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ApplyStart(): JSX.Element {

  const router = useRouter();

  useEffect( () => {
    router.push( '/apply' );
  }, [router] );

  return (
    <div>
      ph start
    </div>
  );
}
