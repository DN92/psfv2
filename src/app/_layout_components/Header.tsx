import ApplicationTittleH1 from './_header_sub_components/ApplicationTitleH1';
import HeaderNavigation from './_header_sub_components/HeaderNavigation';
import FaviconCard from './_header_sub_components/FaviconCard';

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
