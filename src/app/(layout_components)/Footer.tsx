import SocialMediaNavBar from './(footer_sub_components)/SocailMediaNavBar';
import KingpinCard from './(footer_sub_components)/KingpinCard';
import TicaCard from './(footer_sub_components)/TicaCard';
import FooterNavigation from './(footer_sub_components)/FooterNavigation';

const Footer: React.FC = () => {

  return (
    <div className="footer">
      <section className="footer-section1">
        <div className="footer-left">
          <div className="footer-left-top">
            <TicaCard />
            <KingpinCard />
          </div>
          <SocialMediaNavBar />
        </div>
        <div className="footer-right">
          <FooterNavigation />
        </div>
      </section>
      <section className="footer-section2">
        <span>
          &copy;2022 by Planet Scottish Fold
        </span>
      </section>


    </div>

  );
};

export default Footer;
