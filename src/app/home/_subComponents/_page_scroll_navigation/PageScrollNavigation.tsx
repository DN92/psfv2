import ScrollButton from '../ScrollButton';
import styles from './pageScrollNavigation.module.css';

export default function PageScrollNavigation():JSX.Element {

  return (
    <nav className={ styles.scrollNavWrapper }>
      <ul className={ styles.scrollNav }>
        <li><ScrollButton elementId="my_passion"><h4>Who am I?</h4></ScrollButton></li>
        <li><ScrollButton elementId="the_breed"><h4>What is A Scottish Fold?</h4></ScrollButton></li>
        <li><ScrollButton elementId="our_kittens"><h4>Our Kittens</h4></ScrollButton></li>
        <li><ScrollButton elementId="recieve"><h4>Delivery</h4></ScrollButton></li>
      </ul>
    </nav>
  );
}
