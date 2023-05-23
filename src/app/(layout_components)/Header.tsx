import ApplicationTittleH1 from "./(header_sub_components)/ApplicationTitleH1"
import Header_Navigation from "./(header_sub_components)/Header_Navigation"
import FaviconCard from "./(header_sub_components)/FaviconCard"

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header">
        <FaviconCard />
        <div className="header-right">
          <ApplicationTittleH1 />
          <Header_Navigation />
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Header