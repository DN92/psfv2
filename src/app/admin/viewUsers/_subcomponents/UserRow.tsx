import styles from '../viewUsers.module.css';

type ComponentProps = {
  user: UserQ
};

export default async function UserRow({ user }: ComponentProps): Promise<JSX.Element> {

  const { full_name, email, approved, created_at } = user;
  return (
    <div className={styles.user_row_wrapper}>
      <p className={styles.user_row_column}>{full_name}</p>
      <p className={styles.user_row_column}>{email}</p>
      <p className={styles.user_row_column}>{approved}</p>
      <p className={styles.user_row_column}>{created_at}</p>
    </div>
  );
}
