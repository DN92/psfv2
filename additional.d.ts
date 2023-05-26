import Image from 'next/image';

declare global {

  type CatteryMenuSelection = {
    href: string,
    name: string,
    cssClasses?: Array<string>,
  };

  type NavLink = {
    name: string,
    href: string,
  };

  type SocialMediaDatapoint = {
    site: string,
    href: string,
    iconSrc: Image,
  };

}
