import SocialMediaIconWrapper from './SocialMediaIconWrapper'
import socialMediaInfo from './socialMediaConfig'

const SocialMediaNavBar = () => {

  return (
    <nav className='social-media-navbar'>
      {socialMediaInfo.map(platform  => (
        <SocialMediaIconWrapper key={platform.site} iconSrc={platform.iconSrc} href={platform.href} site={platform.site} />
      ))}
    </nav>
  )
}

export default SocialMediaNavBar
