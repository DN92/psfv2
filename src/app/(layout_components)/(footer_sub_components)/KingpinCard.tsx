import Image from 'next/image';
import { ReactElement } from 'react';
import KingpinIcon from '../../(layout_assets)/catKingPinAffPic.webp';

const KingpinCard: React.FC = (): ReactElement => {

  return (
    <div className="kingpin-card">
      <a href="https://catkingpin.com/" target="_blank">
        <Image src={KingpinIcon} alt="tica icon" className="kingpin-icon" />
      </a>
    </div>
  );
};

export default KingpinCard;
