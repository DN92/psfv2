import Link from 'next/link';
import Image from 'next/image';
import HomeBanner from './_subComponents/_home_banner/HomeBanner';
import ownerWith3Kittens from './_assets/ownerWith3Kittens.jpg';
import ticaReg from './_assets/ticaReg.jpg';
import PageScrollNavigation from './_subComponents/_page_scroll_navigation/PageScrollNavigation';
import HomeSiteNav from './_subComponents/_homeSiteNav/HomeSiteNav';
import WelcomeTo from './_subComponents/welcomeTo/WelcomeTo';
import MyPassion from './_subComponents/myPassion/MyPassion';
import TheBreed from './_subComponents/theBreed/TheBreed';
import OurKittens from './_subComponents/ourKittens/OurKittens';
import Recieve from './_subComponents/receive/Receive';
import cert1 from './_assets/catBreedSenseiCert.jpg';
import styles from './home.module.css';

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
      <HomeSiteNav />
      { /* <IframeWrapper /> */ }
      <div className={ `${styles.image_container} ${styles.image_container_one}` }>
        <Image
          fill
          src={ ownerWith3Kittens }
          alt="ownerWith3Kittens"
        />
      </div>
      <PageScrollNavigation />
      <div className={ `${styles.image_container} ${styles.image_container_two}` }>
        <Image
          fill
          src={ ticaReg }
          alt="ticaReg"
        />
      </div>
      <WelcomeTo />
      <div className={ `${styles.image_container} ${styles.image_container_three}` }>
        <Image
          fill
          src={ cert1 }
          alt="cat association cert"
        />
      </div>
      <MyPassion />
      <TheBreed />
      <OurKittens />
      <Recieve />

    </main>
  );
}
