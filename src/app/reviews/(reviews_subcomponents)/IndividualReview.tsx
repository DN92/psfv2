import Image from 'next/image'
import styles from './individualReview.module.css'

type ComponentProps = {
  review: string,
}

const IndividualReview = ({review}: ComponentProps) => {

  return (
    <div className="review_wrapper">
      <div className={styles.individual_review}>
        {/* <Image src={review} alt='customer review'></Image> */}
      </div>
    </div>
  )
}

export default IndividualReview