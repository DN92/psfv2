import ApplicationTittleH1 from './_header_sub_components/ApplicationTitleH1';
import HeaderNavigation from './_header_sub_components/HeaderNavigation';
import FaviconCard from './_header_sub_components/FaviconCard';
import UserIcon from './_header_sub_components/UserIcon';

export default async function Header(): Promise<JSX.Element> {

  return (
    <div className="header-wrapper">
      <div className="header">
        <FaviconCard />
        <div className="header-right">
          <div className="header-right-top">
            <ApplicationTittleH1 />
            <UserIcon />
          </div>
          <HeaderNavigation />
          <div />
        </div>
      </div>
    </div>
  );
}
