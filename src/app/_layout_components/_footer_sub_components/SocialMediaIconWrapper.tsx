import Image from 'next/image';

export default function SocialMediaWrapper({ iconSrc, href }: SocialMediaDatapoint): JSX.Element {

  return (
    <a className="social-media-icon-wrapper" href={href} target="_blank">
      <Image
        className="social-media-icon"
        src={iconSrc}
        alt="smIcon"
      />
    </a>
  );
}

