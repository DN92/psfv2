import Image from 'next/image';
import fbPng from '../../(layout_assets)/socialMediaIcons/facebook.png';
import igPng from '../../(layout_assets)/socialMediaIcons/instagram.png';
import pintrestPng from '../../(layout_assets)/socialMediaIcons/pintrest.png';
import tiktokPng from '../../(layout_assets)/socialMediaIcons/tiktok.png';
import youtubePng from '../../(layout_assets)/socialMediaIcons/youtube.png';

const socialMediaInfo: Array<SocialMediaDatapoint> = [

  {
    site: 'instagram',
    href: 'https://www.instagram.com/floofylicious_cattery/',
    iconSrc: <Image className="social-media-icon" src={igPng} alt="ig Png" />,
  },
  {
    site: 'facebook',
    href: 'https://www.facebook.com/planetscottishfold?mibextid=LQQJ4d',
    iconSrc: <Image className="social-media-icon" src={fbPng} alt="fb Png" />,
  },
  {
    site: 'tiktok',
    href: 'https://www.tiktok.com/@planetscottishfold',
    iconSrc: <Image className="social-media-icon" src={tiktokPng} alt="tiktok Png" />,
  },
  {
    site: 'pintrest',
    href: 'https://www.pinterest.com/planetscottishfold/',
    iconSrc: <Image className="social-media-icon" src={pintrestPng} alt="pintrest Png" />,
  },
  {
    site: 'youtube',
    href: 'https://www.youtube.com/channel/UC3O7RNKGYtocqgB8d-QTZkg',
    iconSrc: <Image className="social-media-icon" src={youtubePng} alt="youtube Png" />,
  },
];

export default socialMediaInfo;
