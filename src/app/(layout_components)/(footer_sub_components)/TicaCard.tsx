import Image from "next/image";
import ticaIcon from "../../(layout_assets)/ticaLogo.webp"

const TicaCard = () => {

  return (
    <div className="tica-card">
      <a href='https://tica.org/' target='_blank'>
        <Image src={ticaIcon} alt='tica icon' className="tica-icon"></Image>
      </a>
    </div>
  )
}

export default TicaCard