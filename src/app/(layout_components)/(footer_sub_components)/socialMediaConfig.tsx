import Image from "next/image"
import fbPng from "../../(layout_assets)/socialMediaIcons/facebook.png"
import igPng from "../../(layout_assets)/socialMediaIcons/instagram.png"
import pintrestPng from "../../(layout_assets)/socialMediaIcons/pintrest.png"
import tiktokPng from "../../(layout_assets)/socialMediaIcons/tiktok.png"
import youtubePng from "../../(layout_assets)/socialMediaIcons/youtube.png"

const socialMediaInfo: Array<SocialMediaDatapoint> = [
  {
    site: 'instagram',
    href: 'https://www.instagram.com/floofylicious_cattery/',
    iconSrc: <Image src={igPng} alt='igPng' />
  },
  {
    site: 'facebook',
    href: 'https://www.facebook.com/planetscottishfold?mibextid=LQQJ4d',
    iconSrc: '/socialMediaIcons/facebook.png'
  },
  {
    site: 'tiktok',
    href: 'https://www.tiktok.com/@planetscottishfold',
    iconSrc: '/socialMediaIcons/tiktok.png'
  },
  {
    site: 'pintrest',
    href: 'https://www.pinterest.com/planetscottishfold/',
    iconSrc: '/socialMediaIcons/pintrest.png'
  },
  {
    site: 'youtube',
    href: 'https://www.youtube.com/channel/UC3O7RNKGYtocqgB8d-QTZkg',
    iconSrc: '/socialMediaIcons/youtube.png'
  },
]

export default socialMediaInfo
