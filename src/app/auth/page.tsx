'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useState, ChangeEvent } from 'react';

import type { Database } from '@/lib/database.types';

export default function Login(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const supabase = createClientComponentClient<Database>({
    supabaseUrl: process.env.URL ?? '',
    supabaseKey: process.env.REST_KEY ?? '',
  });

  const handleSignUp: () => Promise<void> = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    router.refresh();
  };

  const handleSignIn: () => Promise<void> = async () => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
    router.refresh();
  };

  const handleSignOut: () => Promise<void> = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <>
      <input name="email" onChange={(e: ChangeEvent<HTMLInputElement>): void => setEmail(e.target.value)} value={email} />
      <input
        type="password"
        name="password"
        onChange={(e: ChangeEvent<HTMLInputElement>): void => setPassword(e.target.value)}
        value={password}
      />
      <button type="button" onClick={handleSignUp}>Sign up</button>
      <button type="button" onClick={handleSignIn}>Sign in</button>
      <button type="button" onClick={handleSignOut}>Sign out</button>
    </>
  );
}
