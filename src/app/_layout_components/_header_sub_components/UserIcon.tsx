import catImage from '../../../../public/images/css_images/kitten-animated-1.jpeg';
import styles from './userIcon.module.css';
import UserNavItem from './UserNavItem';
import DropDownUserMenu from './DropDownUserMenu';

type UserIconProps = {
  user: any,
};

export default function UserIcon({ user }: UserIconProps): JSX.Element {

  return (
    <nav className={styles.header_icon_nav}>
      <ul className={styles.header_icon_nav_ul}>
        <UserNavItem src={catImage} alt="userTestImage">
          <DropDownUserMenu user={user} />
        </UserNavItem>
      </ul>
    </nav>
  );
}
