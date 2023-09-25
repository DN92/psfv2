import Link from 'next/link';
import styles from '../applications.module.css';

type ComponentProps = {
  id: number
  applicationData: ApplicationData,
  createdAt: string,
};

export default async function ApplicantRowWithLink( { id, applicationData, createdAt }: ComponentProps ):Promise<JSX.Element> {

  const applicant = JSON.parse( applicationData as string );
  const { firstName, lastName, eMail } = applicant;
  // const keys = Object.keys(applicant).join(' ');

  return (
    <div className={ styles.application_row_wrapper }>
      <p className={ styles.application_row_column }>{ id }</p>
      <p className={ styles.application_row_column }>{ firstName }</p>
      <p className={ styles.application_row_column }>{ lastName }</p>
      <p className={ styles.application_row_column }>{ eMail }</p>
      <p className={ styles.application_row_column }>{ createdAt }</p>
    </div>
  );
}
