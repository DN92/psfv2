import fbPng from '../../_layout_assets/socialMediaIcons/facebook.png';
import igPng from '../../_layout_assets/socialMediaIcons/instagram.png';
import pintrestPng from '../../_layout_assets/socialMediaIcons/pintrest.png';
import tiktokPng from '../../_layout_assets/socialMediaIcons/tiktok.png';
import youtubePng from '../../_layout_assets/socialMediaIcons/youtube.png';

const socialMediaInfo: Array<SocialMediaDatapoint> = [

  {
    site: 'instagram',
    href: 'https://www.instagram.com/floofylicious_cattery/',
    iconSrc: igPng,
  },
  {
    site: 'facebook',
    href: 'https://www.facebook.com/planetscottishfold?mibextid=LQQJ4d',
    iconSrc: fbPng,
  },
  {
    site: 'tiktok',
    href: 'https://www.tiktok.com/@planetscottishfold',
    iconSrc: tiktokPng,
  },
  {
    site: 'pintrest',
    href: 'https://www.pinterest.com/planetscottishfold/',
    iconSrc: pintrestPng,
  },
  {
    site: 'youtube',
    href: 'https://www.youtube.com/channel/UC3O7RNKGYtocqgB8d-QTZkg',
    iconSrc: youtubePng,
  },
];

export default socialMediaInfo;
