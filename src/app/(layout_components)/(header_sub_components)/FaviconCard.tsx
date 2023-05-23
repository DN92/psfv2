import Image from 'next/image'
import favicon from './favicon.ico'

const FaviconCard = () => {
  return (
    <div className="header-favicon-card">
      <Image className="header-favicon" src={favicon} alt='site logo'></Image>
    </div>
  )
}

export default FaviconCard