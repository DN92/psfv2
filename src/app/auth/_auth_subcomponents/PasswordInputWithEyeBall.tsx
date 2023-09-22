'use client';

import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { useState } from 'react';
import styles from '../auth.module.css';

export default function PasswordInputWithEyeBall():JSX.Element {

  const [showPassword, setShowPassword] = useState( false );


  return (
    <div className={`${styles.auth_password_wrapper} ${styles.auth_input_wrapper}`}>
      <input
        id="input_password"
        className={styles.auth_input}
        type={showPassword ? 'text' : 'password'}
        name="pw"
        maxLength={30}

      />
      {
        showPassword ?
          <BsEyeFill className={styles.auth_password_toggle} onClick={():void => setShowPassword( ( prev ) => !prev )} />
          :
          <BsEyeSlashFill className={styles.auth_password_toggle} onClick={():void => setShowPassword( ( prev ) => !prev )} />
      }
    </div>
  );
}
