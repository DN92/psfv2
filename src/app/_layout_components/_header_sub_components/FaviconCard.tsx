import Image from 'next/image';
import favicon from './favicon.ico';

const FaviconCard: React.FC = () => {
  return (
    <div className="header-favicon-card">
      <Image
        className="header-favicon"
        src={ favicon }
        alt="site logo"
      />
    </div>
  );
};

export default FaviconCard;
