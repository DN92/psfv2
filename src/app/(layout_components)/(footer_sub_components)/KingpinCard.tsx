import Image from "next/image";
import KingpinIcon from "../../(layout_assets)/catKingPinAffPic.webp"

const KingpinCard = () => {

  return (
    <div className="kingpin-card">
      <a href='https://catkingpin.com/' target='_blank'>
        <Image src={KingpinIcon} alt='tica icon' className="kingpin-icon"></Image>
      </a>
    </div>
  )
}

export default KingpinCard