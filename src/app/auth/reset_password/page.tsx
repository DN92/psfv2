import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';
import styles from '../auth.module.css';
import PasswordInputWithEyeBall from '../_auth_subcomponents/PasswordInputWithEyeBall';

export const dynamic = 'force-dynamic';

export default async function ResetPassword(): Promise<JSX.Element> {

  async function handlePasswordReset( formData: FormData ): Promise<void> {
    'use server';

    const pw = String( formData.get( 'pw' ) );
    const confirmPw = String( formData.get( 'confirmPW' ) );

    function validatedInputs():boolean {
      if ( pw.length < 7 ||
      confirmPw.length < 7 ||
      pw !== confirmPw ||
      /[<>*]/.test( pw ) ) {
        return false;
      }
      return true;
    }

    if ( !validatedInputs() ) {
      console.log( 'pw::', pw );
      console.log( 'confirmed:: ', confirmPw );
      console.log( 'bad inputs' );
      return;
    }

    const supabase = createServerActionClient<Database>( { cookies } );

    const { data, error } = await supabase.auth.updateUser( {
      password: pw,
    } );

  }

  return (
    <form action={handlePasswordReset} className={styles.auth_container}>
      <h2 className={styles.auth_container_h2}>Reset Password</h2>
      <div className={styles.auth_container_section}>
        <div className={styles.auth_section_partition}>
          <label
            className={styles.auth_section_partition_span1}
            htmlFor="input_password"
          >
            New Password
          </label>
        </div>
        <PasswordInputWithEyeBall />
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
            type="password"
            name="confirmPW"
          />
        </div>
      </div>
      <div className={styles.auth_sign_in_button_wrapper}>
        <button
          type="submit"
          className={styles.auth_sign_in_button}
        >
          Submit
        </button>
      </div>
      <div className={styles.auth_sign_in_button_wrapper}>
        <Link href="/">Home Page</Link>
      </div>
    </form>
  );
}
