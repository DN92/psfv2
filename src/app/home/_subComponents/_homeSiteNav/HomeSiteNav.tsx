import Link from 'next/link';
import styles from './homeSiteNav.module.css';

export default function HomeSiteNav():JSX.Element {

  return (

    <nav>
      <ul className={ styles.nav }>
        <li className={ styles.navLink }><Link href="/cattery/kittens">Our Kittens</Link></li>
        <li className={ styles.navLink }><Link href="/cattery/dams">Our Queens</Link></li>
        <li className={ styles.navLink }><Link href="/cattery/studs">Our Sires</Link></li>
        <li className={ styles.navLink }><Link href="/apply">Adoptions</Link></li>
      </ul>
    </nav>
  );
}
