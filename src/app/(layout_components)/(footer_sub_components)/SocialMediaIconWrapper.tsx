const SocialMediaIconWrapper = ({iconSrc, href, site}: SocialMediaDatapoint) => {

  return (
    <div className='social-media-icon-wrapper'>
      <a href={href} target='_blank'>
        {iconSrc}
      </a>
    </div>
  )
}

export default SocialMediaIconWrapper
