import Link from 'next/link';
import styles from '../cattery.module.css';

interface ComponentProps {
  href: string,
  name: string,
}

const CatteryMenuSelectionSingle: React.FC<ComponentProps> = ({ href, name }: ComponentProps) => {
  return (
    <div className={styles.catter_menu_singleton_wrapper}>
      <Link href={href}>{name}</Link>
    </div>
  );
};

export default CatteryMenuSelectionSingle;
