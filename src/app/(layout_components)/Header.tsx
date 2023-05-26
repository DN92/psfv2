import ApplicationTittleH1 from './(header_sub_components)/ApplicationTitleH1';
import HeaderNavigation from './(header_sub_components)/HeaderNavigation';
import FaviconCard from './(header_sub_components)/FaviconCard';

const Header: React.FC = () => {

  return (
    <div className="header-wrapper">
      <div className="header">
        <FaviconCard />
        <div className="header-right">
          <ApplicationTittleH1 />
          <HeaderNavigation />
          <div />
        </div>
      </div>
    </div>
  );
};

export default Header;
