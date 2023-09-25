import Link from 'next/link';
import Image from 'next/image';
import HomeBanner from './_subComponents/home_banner/HomeBanner';
import ownerWith3Kittens from './_assets/ownerWith3Kittens.jpg';
import ticaReg from './_assets/ticaReg.jpg';
import styles from './home.module.css';
import PageScrollNavigation from './_subComponents/PageScrollNavigation';
import HomeSiteNav from './_subComponents/HomeSiteNav';
import WelcomeTo from './_subComponents/WelcomeTo';
import MyPassion from './_subComponents/MyPassion';
import TheBreed from './_subComponents/TheBreed';
import OurKittens from './_subComponents/OurKittens';
import Recieve from './_subComponents/Receive';

export default function Home(): JSX.Element {

  const message = [
    'Furry Summer Sale! Get 20% off any of our kittens till the end of June!', ' All kittens come with a health guarantee, video chats available on request!',
    <Link
      key="linkToApply"
      style={ { color: 'var(--clr-500)' } }
      href="/apply"
    >
      If interested, please apply here
    </Link>,
  ];

  return (
    <main>
      <HomeBanner
        message={ message }
        whenClosedText="Show Announcements"
      />
      { /* <IframeWrapper /> */ }
      <div className={ `${styles.image_container} ${styles.image_container_one}` }>
        <Image
          fill
          src={ ownerWith3Kittens }
          alt="ownerWith3Kittens"
        />
      </div>
      <PageScrollNavigation />
      <HomeSiteNav />
      <div className={ `${styles.image_container} ${styles.image_container_two}` }>
        <Image
          fill
          src={ ticaReg }
          alt="ticaReg"
        />
      </div>
      <WelcomeTo />
      <MyPassion />
      <TheBreed />
      <OurKittens />
      <Recieve />

    </main>
  );
}
