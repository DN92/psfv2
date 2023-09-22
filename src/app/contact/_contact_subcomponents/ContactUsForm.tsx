'use client';

import { useState, ChangeEvent, FormEvent, FormEventHandler, ChangeEventHandler } from 'react';
import styles from '../contact.module.css';

export default function ContactUsForm(): JSX.Element {
  const [name, setName] = useState( '' );
  const [phone, setPhone] = useState( '' );
  const [email, setEmail] = useState( '' );
  const [message, setMessage] = useState( '' );
  const [formError, setFormError] = useState( '' );

  const handleNameChange: ChangeEventHandler<HTMLInputElement> = ( event: ChangeEvent<HTMLInputElement> ) => {
    setName( event.target.value );
  };

  const handlePhoneChange: ChangeEventHandler<HTMLInputElement> = ( event: ChangeEvent<HTMLInputElement> ) => {
    setPhone( event.target.value );
  };

  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = ( event: ChangeEvent<HTMLInputElement> ) => {
    setEmail( event.target.value );
  };

  const handleMessageChange: React.ChangeEventHandler<HTMLTextAreaElement> = ( event: ChangeEvent<HTMLTextAreaElement> ) => {
    setMessage( event.target.value );
  };

  const resetForm: () => void = () => {
    setName( '' );
    setPhone( '' );
    setEmail( '' );
    setMessage( '' );
    setFormError( '' );
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = ( event: FormEvent<HTMLFormElement> ):void => {
    event.preventDefault();

    if ( !name || !phone || !email || !message ) {
      setFormError( 'Please fill in all fields.' );
      return;
    }

    // Perform your submit logic here
    // You can access the form values: name, phone, email, and message

    // Reset form fields

    resetForm();
  };

  return (
    <div className={styles.contact_right}>
      <form className={styles.contact_form} onSubmit={handleSubmit}>
        <div className={styles.contact_form_group}>
          <label htmlFor="name">
            Full Name:
          </label>
          <input id="name" type="text" value={name} onChange={handleNameChange} />
        </div>

        <div className={styles.contact_form_group}>
          <label htmlFor="phone-number">
            Phone Number:
          </label>
          <input id="phone-number" type="text" value={phone} onChange={handlePhoneChange} />
        </div>

        <div className={styles.contact_form_group}>
          <label htmlFor="email">
            Email:
          </label>
          <input id="email" type="email" value={email} onChange={handleEmailChange} />
        </div>

        <div className={styles.contact_form_group}>
          <label htmlFor="message">
            Message:
          </label>
          <textarea id="message" value={message} onChange={handleMessageChange} />
        </div>

        {formError && <div className={styles.error}>{formError}</div>}
        <div className={styles.form_button_container}>
          <div className={styles.form_button_container}>
            <button className={styles.form_button} type="button">Reset</button>
          </div>
          <div className={styles.form_button_container}>
            <button className={styles.form_button} type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}
