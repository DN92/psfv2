import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';
import styles from '../auth.module.css';

export const dynamic = 'force-dynamic';

export default async function SignUp(): Promise<JSX.Element> {

  async function handleSignUp(formData: FormData): Promise<void> {
    'use server';


    const email = String(formData.get('email'));
    const pw = String(formData.get('password'));
    const confirmPw = String(formData.get('confirmPW'));

    function validatedInputs():boolean {
      if (email.length < 10) return false;
      if (pw.length < 7) return false;
      if (confirmPw.length < 7) return false;
      if (pw !== confirmPw) return false;
      if (/[<>*]/.test(pw)) return false;
      if (/[<>*]/.test(email)) return false;
      return true;
    }

    if (!validatedInputs()) {
      console.log('bad inputs');
      return;
    }

    const supabase = createServerActionClient({ cookies });

    const { data, error } = await supabase.auth.signUp({
      email,
      password: pw,
      options: {
        // emailRedirectTo: `${window.location.origin}/auth/callback`,
        emailRedirectTo: '$http://localhost:3000/auth/callback',
      },
    });

    if (data) console.log('A user has signed up :: ', email, ' + ', data);
    if (error) console.log('Error occured during sign up:: ', error);
  }

  return (
    <form action={handleSignUp} className={styles.auth_container}>
      <h2 className={styles.auth_container_h2}>Sign Up</h2>
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
            name="email"
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
        </div>
        <div className={styles.auth_input_wrapper}>
          <input
            id="input_password"
            className={styles.auth_input}
            type="password"
            name="password"
          />
        </div>
      </div>
      <div className={styles.auth_container_section}>
        <div className={styles.auth_section_partition}>
          <label
            className={styles.auth_section_partition_span1}
            htmlFor="input_confirm_password"
          >
            Confirm Password
          </label>
        </div>
        <div className={styles.auth_input_wrapper}>
          <input
            id="input_confirm_password"
            className={styles.auth_input}
            type="text"
            name="confirmPW"
          />
        </div>
      </div>

      <div className={styles.auth_sign_in_button_wrapper}>
        <button
          type="submit"
          className={styles.auth_sign_in_button}
        >
          Sign Up
        </button>
        <p>
          Already have an account?
          <Link href="/auth">Sign In</Link>
        </p>
      </div>
    </form>
  );
}
