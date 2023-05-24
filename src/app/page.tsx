'use client'

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/home')
  }, [])

  return (
    <p>You sholdn't be able to see this</p>
  )
}

export default HomePage