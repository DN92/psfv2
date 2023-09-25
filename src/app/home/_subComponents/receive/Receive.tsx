import Link from 'next/link';
import styles from './recieve.module.css';

export default function Recieve():JSX.Element {

  return (
    <div className={ styles.recieveWrapper }>
      <h4
        id="recieve"
        className={ `${styles.header} bold` }
      >
        How will you recieve your kitten?
      </h4>
      <p>
        You have many options on how to get your new family member. If you&apos;re close, picking up from our cattery is the best option.
      </p>
      <p>
        Delivery. Depending on distance and location, we offer the lowest possible rates on car and plane deliveries.
      </p>
      <p>
        You can fly over to one of our local airports and we will come to meet you with your kitten. Please be aware that the airline will charge a pet air fare of up to $125 as of this writing.
      </p>
      <p><Link href="/apply">Apply for your kitten here</Link></p>
      <p>
        After your application is reviewed, you&apos;ll be notified. After that, you will be able to reserve any currently available kitten or reserve a spot for future litters.
      </p>
    </div>
  );
}
