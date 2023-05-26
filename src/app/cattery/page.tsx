import CatteryNavigation from './(cattery_subcomponents)/CatteryNavigation';
import styles from './cattery.module.css';

const Cattery: React.FC = () => {
  return (
    <div className={styles.cattery_navigation_wrapper}>
      <CatteryNavigation />
    </div>
  );
};

export default Cattery;
