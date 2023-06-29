'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import IframeWrapper from './_subComponents/IframeWrapper';
import HomeBanner from './_subComponents/HomeBanner';
import ownerWith3Kittens from './_assets/ownerWith3Kittens.jpg';
import ticaReg from './_assets/ticaReg.jpg';
import styles from './home.module.css';
import PageScrollNavigation from './_subComponents/PageScrollNavigation';
import HomeSiteNav from './_subComponents/HomeSiteNav';
import WelcomeTo from './_subComponents/WelcomeTo';
import MyPassion from './_subComponents/MyPassion';
import TheBreed from './_subComponents/TheBreed';

export default function Home(): JSX.Element {

  const pageNavRefs = useRef([]);

  function addToPageNav(ele: Element):void {
    if (!pageNavRefs.current.includes(ele)) {
      pageNavRefs.current.push(ele);
    }
  }

  const message = [
    'Furry Summer Sale! Get 20% off any of our kittens till the end of June!', ' All kittens come with a health guarantee, video chats available on request!',
    <Link key="linkToApply" style={{ color: 'var(--clr-500)' }} href="/apply">If interested, please apply here</Link>,
  ];

  return (
    <main>
      <HomeBanner message={message} whenClosedText="Show Announcements" />
      {/* <IframeWrapper /> */}
      <div className={`${styles.image_container} ${styles.image_container_one}`}>
        <Image fill src={ownerWith3Kittens} alt="ownerWith3Kittens" />
      </div>
      <PageScrollNavigation refArray={pageNavRefs.current} />
      <HomeSiteNav />
      <div className={`${styles.image_container} ${styles.image_container_two}`}>
        <Image fill src={ticaReg} alt="ticaReg" />
      </div>
      <WelcomeTo />
      <MyPassion />
      <TheBreed />
      {/* TODO : SIZE UP THOSE IMAGES TO SCREEN */}
    </main>
  );
}
