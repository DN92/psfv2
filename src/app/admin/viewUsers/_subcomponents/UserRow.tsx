import Link from 'next/link';
import styles from '../viewUsers.module.css';

type ComponentProps = {
  user: UserQ
};

export default async function UserRow({ user }: ComponentProps): Promise<JSX.Element> {

  const { id, full_name, email, approved, created_at } = user;
  return (
    <div className={styles.user_row_wrapper}>
      <Link href={`/admin/viewUsers/${id}/userDetails`}>VIEW</Link>
      <p className={styles.user_row_column}>{full_name}</p>
      <p className={styles.user_row_column}>{email}</p>
      <p className={styles.user_row_column}>{approved.toString()}</p>
      <p className={styles.user_row_column}>{created_at}</p>
    </div>
  );
}
