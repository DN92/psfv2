import Link from 'next/link'
import SocialMediaNavBar from './(footer_sub_components)/SocailMediaNavBar'

const Footer = () => {

  return (
    <>
      <div className='footer'>
          <>
            <div className='footer__cards'>
              <div className='footer__card tica-card'>
                <a href='https://tica.org/' target='_blank'>
                  <img className='footer-img-tica' src="/otherPictures/ticaLogo.webp" alt="Tica Logo" />
                </a>
                <SocialMediaNavBar />
              </div>
              <div className='footer__card kingpin-card'>
                <a href='https://catkingpin.com/' target='_blank' >
                  <img className='footer-img-kingpin' src="/otherPictures/catKingPinAffPic.webp" alt="Cat King Pin Affiliate Image" />
                </a>
              </div>
              <div className='footer__nav-wrapper'>
                <Link href='/waitingListForm' >Apply</Link>
                <Link href='/availableKittens'>Kittens</Link>
                <Link href='/contact'>Contact</Link>
              </div>
            </div>
          </>
          <p>
            &copy;2022 by Planet Scottish Fold
          </p>
      </div>
    </>
  )
}

export default Footer