import Link from 'next/link';
import headerLinks from './headerNavigationLinkConfig';

const HeaderNavigation: React.FC = () => {

  return (
    <div className="header-navigation">
      {headerLinks.map((link: NavLink) => (
        <Link key={link.href} className="header-nav-link" href={link.href}>{link.name}</Link>
      ))}
    </div>
  );
};

export default HeaderNavigation;