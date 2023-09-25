import CatteryNavigation from './_cattery_subcomponents/CatteryNavigation';
import styles from './Cattery.module.css';

const Cattery: React.FC = () => {
  return (
    <div className={ styles.cattery_navigation_wrapper }>
      <CatteryNavigation />
    </div>
  );
};

export default Cattery;
