import styles from './reviews.module.css';

interface ReviewsLayoutProps {
  children: React.ReactNode
}

export default function ReviewsLayout({ children }: ReviewsLayoutProps): React.ReactNode {
  return (
    <div className={styles.reviews_layout_wrapper}>
      {children}
    </div>
  );
}
