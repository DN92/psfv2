import Image from 'next/image';
import ticaIcon from '../../_layout_assets/ticaLogo.webp';

const TicaCard: React.FC = () => {

  return (
    <div className="tica-card">
      <a href="https://tica.org/" target="_blank">
        <Image src={ticaIcon} alt="tica icon" className="tica-icon" />
      </a>
    </div>
  );
};

export default TicaCard;
