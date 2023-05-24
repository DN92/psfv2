
import styles from './reviews.module.css'
import reviewPaths from './(reviews_subcomponents)/reviewsData'
import Image from 'next/image'

const Reviews = () => {

  return (
    <div className={styles.reviews_wrapper}>
      {reviewPaths.map(path => (
        // <Image width={300} height={300} src={path} alt='review image' key={path} />
        <img src={path} alt='nada'></img>
      ))}
    </div>
  )
}

export default Reviews