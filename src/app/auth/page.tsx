import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';
import { cookies } from 'next/headers';
import styles from './auth.module.css';
import PasswordInputWithEyeBall from './_auth_subcomponents/PasswordInputWithEyeBall';

// TODO (OPTIONAL)
// add parameter for sign in / sign up and combine routes

export const dynamic = 'force-dynamic';

export default async function Login(): Promise<JSX.Element> {

  const handleSignIn = async (formData: FormData): Promise<void> => {
    'use server';

    const email = String(formData.get('email'));
    const pw = String(formData.get('pw'));

    const supabase = createServerActionClient({ cookies });
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: pw,
    });
  };

  return (
    <>
      <form className={styles.auth_container} action={handleSignIn}>
        <h2 className={styles.auth_container_h2}>Sign in</h2>
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
          <div className={`${styles.auth_section_partition}`}>
            <label
              className={styles.auth_section_partition_span1}
              htmlFor="input_password"
            >
              Password
            </label>
            <Link className={styles.auth_section_partition_span2} href="/auth/password_reset_request">Forgot Password?</Link>
          </div>
          <PasswordInputWithEyeBall />
        </div>
        <div className={styles.auth_sign_in_button_wrapper}>
          <button
            type="submit"
            className={styles.auth_sign_in_button}
          >
            Sign In
          </button>
        </div>
      </form>
      <div className={styles.auth_sign_up_wrapper}>
        <span>
          Dont have an account?
          {' '}
          <Link href="auth/signUp">Sign Up</Link>
        </span>
      </div>
    </>
  );
}
