'use client';

// debrox

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from './auth.module.css';

export default function Login(): JSX.Element {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [rememberUser, setRememberUser] = useState(true);

  const handleSignUp = async (): Promise<void> => {
    await supabase.auth.signUp({
      email,
      password: pw,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  const handleSignIn = async (): Promise<void> => {
    await supabase.auth.signInWithPassword({
      email: email,
      password: pw,
    });
    router.refresh();
  };

  const handleSignOut = async (): Promise<void> => {
    await supabase.auth.signOut();
    router.refresh();
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    event.preventDefault();
    await handleSignIn();
  };

  useEffect(() => { console.log(email); console.log(pw); }, [email, pw]);


  return (
    <>
      <form className={styles.auth_container}>
        <h2 className={styles.auth_container_h2}>Sign in to Planet Scottish Fold</h2>
        <div className={styles.auth_container_section}>
          <div className={styles.auth_section_partition}>
            <label
              className={styles.auth_section_partition_span1}
              htmlFor="input_email"
            >
              Email Address
            </label>
          </div>
          <div className={styles.auth_input_wrapper}>
            <input
              id="input_email"
              className={styles.auth_input}
              type="text"
              value={email}
              onChange={(event): void => setEmail(event.target.value)}
            />
          </div>
        </div>
        <div className={styles.auth_container_section}>
          <div className={styles.auth_section_partition}>
            <label
              className={styles.auth_section_partition_span1}
              htmlFor="input_password"
            >
              Password
            </label>
            <span className={styles.auth_section_partition_span2}>Forgot Password?</span>
          </div>
          <div className={styles.auth_input_wrapper}>
            <input
              id="input_password"
              className={styles.auth_input}
              type="text"
              value={pw}
              onChange={(event): void => setPw(event.target.value)}
            />
          </div>
        </div>
        <div className={styles.auth_checkbox_wrapper}>
          <input
            id="input_rememberUser"
            className={styles.auth_checkbox}
            type="checkbox"
            checked={rememberUser}
            onChange={(): void => { setRememberUser((prev) => !prev); }}
          />
          <label htmlFor="input_rememberUser">Remember Me</label>
        </div>
        <div className={styles.auth_sign_in_button_wrapper}>
          <button
            type="submit"
            className={styles.auth_sign_in_button}
            onClick={handleSubmit}
          >
            Sign In
          </button>
        </div>
      </form>
      <div className={styles.auth_sign_up_wrapper}>
        <span>Dont have an account? Sign Up</span>
      </div>
    </>
  );
}
