'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';

const HomePage: React.FC = () => {
  const router: AppRouterInstance = useRouter();

  useEffect(() => {
    router.push('/home');
  }, [router]);

  return (
    <p>You should not be able to see this</p>
  );
};

export default HomePage;
