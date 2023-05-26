import Image from 'next/image';

declare global {
  type SocialMediaDatapoint = {
    site: string,
    href: string,
    iconSrc: Image,
  };
}
