import Image from 'next/image';
import styles from '../reviews.module.css';

type ComponentProps = {
  review: string,
};

const IndividualReview: React.FC<ComponentProps> = ( { review }: ComponentProps ) => {

  return (
    <div className={ styles.review__singleton_wrapper }>
      <Image
        fill
        src={ review }
        alt="customer review"
        className={ styles.review_singleton }
      />
    </div>
  );
};

export default IndividualReview;
