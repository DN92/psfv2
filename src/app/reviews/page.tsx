
import styles from './reviews.module.css';
import reviewPaths from './(reviews_subcomponents)/reviewsData';
import IndividualReview from './(reviews_subcomponents)/IndividualReview';

const firstThird: Array<string> = reviewPaths.slice(0, reviewPaths.length / 3) ?? [];
const secondThird: Array<string> = reviewPaths.slice(reviewPaths.length / 3, (reviewPaths.length) * (2 / 3)) ?? [];
const thirdThird: Array<string> = reviewPaths.slice((reviewPaths.length) * (2 / 3)) ?? [];

const Reviews: React.FC = () => {

  return (
    <div className={styles.reviews_wrapper}>
      <div className={styles.reviews_column}>
        {firstThird.map((path: string) => (
          <IndividualReview review={path} key={path} />
        ))}
      </div>
      <div className={styles.reviews_column}>
        {secondThird.map((path: string) => (
          <IndividualReview review={path} key={path} />
        ))}
      </div>
      <div className={styles.reviews_column}>
        {thirdThird.map((path: string) => (
          <IndividualReview review={path} key={path} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
