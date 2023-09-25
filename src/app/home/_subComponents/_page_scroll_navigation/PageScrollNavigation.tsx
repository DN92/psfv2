import ScrollButton from '../ScrollButton';
import styles from './pageScrollNavigation.module.css';

export default function PageScrollNavigation():JSX.Element {

  return (
    <nav className={ styles.scrollNavWrapper }>
      <ul className={ styles.scrollNav }>
        <li><ScrollButton elementId="my_passion"><h5>Who am I?</h5></ScrollButton></li>
        <li><ScrollButton elementId="the_breed"><h5>What is A Scottish Fold?</h5></ScrollButton></li>
        <li><ScrollButton elementId="our_kittens"><h5>Our Kittens</h5></ScrollButton></li>
        <li><ScrollButton elementId="recieve"><h5>Delivery</h5></ScrollButton></li>
      </ul>
    </nav>
  );
}
