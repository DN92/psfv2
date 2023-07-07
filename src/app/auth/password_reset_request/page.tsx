import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import styles from '../auth.module.css';

export const dynamic = 'force-dynamic';

export default async function PasswordResetRequest():Promise<JSX.Element> {

  async function handlePasswordReset(formData: FormData):Promise<void> {
    'use server';

    const email = String(formData.get('email'));

    function validatedInputs():boolean {
      if (email.length < 10) return false;
      if (/[<>*]/.test(email)) return false;
      return true;
    }

    if (!validatedInputs()) {
      console.log('bad inputs');
      return;
    }

    const supabase = createServerActionClient<Database>({ cookies });
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'http://localhost:3000/auth/callback?redir=auth/reset_password',
    });
  }

  return (
    <form action={handlePasswordReset} className={styles.auth_container}>
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
      <p>
        You will be sent a link to the provided email address if your account exists. Make sure to check your spam folder. The link will redirect you to a password reset page.
      </p>
      <div className={styles.auth_sign_in_button_wrapper}>
        <button
          type="submit"
          className={styles.auth_sign_in_button}
        >
          Reset
        </button>
      </div>
    </form>
  );
}
