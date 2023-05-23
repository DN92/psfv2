import ApplicationTittleH1 from "./(header_sub_components)/ApplicationTitleH1"
import Header_Navigation from "./(header_sub_components)/Header_Navigation"

const Header = () => {
  return (
    <div className="header">
      <ApplicationTittleH1 />
      <Header_Navigation />
      <div></div>

    </div>
  )
}

export default Header