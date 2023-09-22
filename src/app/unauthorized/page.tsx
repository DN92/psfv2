'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { handleSignOut } from '@/lib/functions/handleSignOutClient';

export default function Unauthorized():React.ReactNode {

  const router = useRouter();

  useEffect( () => {
    handleSignOut();
    const timeout = setTimeout( () => {
      router.push( '/auth' );
    }, 10000 );

    return () => clearInterval( timeout );
  }, [router] );

  return (
    <div>
      <p>
        You do not have the permissions to view this page and have been logged out. You will be redirected to the login page in 10 seconds.
      </p>
    </div>
  );
}
