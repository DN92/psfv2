import Link from 'next/link';
import CatsAndKittensNavigationDropDown from './CatsAndKittensNavigationDropDown';

const HeaderNavigation: React.FC = () => {

  return (
    <nav className="header-navigation">
      <Link
        className="header-nav-link"
        href="/home"
      >
        HOME
      </Link>
      <Link
        className="header-nav-link"
        href="/apply"
      >
        APPLY
      </Link>
      <CatsAndKittensNavigationDropDown />
      <Link
        className="header-nav-link"
        href="/contact"
      >
        CONTACT US
      </Link>
      <Link
        className="header-nav-link"
        href="/reviews"
      >
        REVIEWS
      </Link>
      <Link
        className="header-nav-link"
        href="/auth"
      >
        LOGIN
      </Link>

    </nav>
  );
};

export default HeaderNavigation;
