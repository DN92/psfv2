import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { cookies } from 'next/headers';
import styles from '../auth.module.css';

export default async function SignUp(): Promise<JSX.Element> {

  const handleSignUp = async (formData: FormData): Promise<void> => {
    'use server';

    console.log('handleSignUp 1:');

    const email = String(formData.get('email'));
    const pw = String(formData.get('password'));
    const confirmPw = String(formData.get('confirmPW'));

    const supabase = createServerActionClient({ cookies });


    console.log('fry');
    const { data, error } = await supabase.auth.signUp({
      email,
      password: pw,
      options: {
        // emailRedirectTo: `${window.location.origin}/auth/callback`,
        emailRedirectTo: '$http://localhost:3000/auth/callback',
      },
    });

    if (data) console.log('success', data);
    if (error) console.log('fail', error);

    console.log('toast');
  };

  return (
    <form action={handleSignUp} className={styles.auth_container}>
      <h2 className={styles.auth_container_h2}>Sign up to Planet Scottish Fold</h2>
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
      </div>
    </form>
  );
}
