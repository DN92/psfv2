import Link from 'next/link'
import SocialMediaNavBar from './(footer_sub_components)/SocailMediaNavBar'
import KingpinCard from './(footer_sub_components)/KingpinCard'
import TicaCard from './(footer_sub_components)/TicaCard'
import FooterNavigation from './(footer_sub_components)/FooterNavigation'

const Footer = () => {

  return (
    <div className='footer'>
      <div className="footer-section1">
        <div className='footer-left'>
          <div className='footer-left-top'>
            <TicaCard />
            <KingpinCard />
          </div >
            <SocialMediaNavBar />
        </div>
        <div className='footer-right'>
          <FooterNavigation />
        </div>
      </div>
      <p>
        &copy;2022 by Planet Scottish Fold
      </p>
        
    </div>

  )
}

export default Footer