import Link from 'next/link';
import { ReactElement } from 'react';

function FooterNavigation(): ReactElement {

  return (
    <div className="footer-nav-wrapper">
      <nav className="footer-nav footer-nav-left">
        <Link href="/home">Home</Link>
        <Link href="/availableKittens">Kittens</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <nav className="footer-nav footer-nav-right">
        <Link href="/waitingListForm">Apply</Link>
        <Link href="/login">Reviews</Link>
        <Link href="/reviews">Login</Link>
      </nav>

    </div>
  );
}

export default FooterNavigation;
