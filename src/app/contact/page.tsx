import Image from 'next/image';
import styles from './contact.module.css';
import contactPicture from './contactUs.webp';
import ContactUsForm from './_contact_subcomponents/ContactUsForm';

export default function Contact(): JSX.Element {

  return (
    <>
      <h2>CONTACT US</h2>
      <div className={ styles.contact_wrapper }>
        <div className={ styles.contact_left }>
          <div className={ styles.contact_left_text_container }>
            <p>Use this form to send a direct message, </p>
            <p> ask a question,</p>
            <p> or report a bug.</p>
          </div>
          <div className={ styles.contact_left_image_card }>
            <Image
              src={ contactPicture }
              alt="contact picture"
            />
          </div>
        </div>
        <ContactUsForm />
      </div>
    </>
  );
}

