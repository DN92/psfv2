import Link from 'next/link';
import styles from '../cattery.module.css';

interface ComponentProps {
  href: string,
  name: string,
  cssClasses?: Array<string>,
}

const CatteryMenuSelectionSingle: React.FC<ComponentProps> = ({ href, name, cssClasses = [] }: ComponentProps) => {
  const secondChildCssClasses: string = cssClasses.map((cssClass: string) => {
    return styles[cssClass];
  }).join(' ');

  return (
    <div className={`${styles.cattery_menu_singleton_wrapper}`}>
      <Link className={styles.cattery_menu_link} href={href}>{name}</Link>
      <div className={`${secondChildCssClasses} ${styles.cattery_menu_right}`} />
    </div>
  );
};

export default CatteryMenuSelectionSingle;
