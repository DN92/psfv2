import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';
import { cookies } from 'next/headers';
import styles from './auth.module.css';

export default async function Login(): Promise<JSX.Element> {

  const handleSignIn = async (formData: FormData): Promise<void> => {
    'use server';

    const email = String(formData.get('email'));
    const pw = String(formData.get('pw'));
    const rememberUser = String(formData.get('rememberUser'));

    const supabase = createServerActionClient({ cookies });
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: pw,
    });
    // const { user, session } = data;
    const { data: { session } } = await supabase.auth.getSession();
  };

  const handleSignOut = async (): Promise<void> => {
    // const { error } = await supabase.auth.signOut();
  };

  return (
    <>
      <form className={styles.auth_container} action={handleSignIn}>
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
            <span className={styles.auth_section_partition_span2}>Forgot Password?</span>
          </div>
          <div className={styles.auth_input_wrapper}>
            <input
              id="input_password"
              className={styles.auth_input}
              type="text"
              name="pw"
            />
          </div>
        </div>
        <div className={styles.auth_checkbox_wrapper}>
          <input
            id="input_rememberUser"
            className={styles.auth_checkbox}
            type="checkbox"
            name="rememberUser"
          />
          <label htmlFor="input_rememberUser">Remember Me</label>
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
