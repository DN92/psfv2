import CatteryMenuSelectionSingle from './CatteryMenuSelectionSingle';
import catteryMenuOptions from './catteryMenuData';

const CatteryNavigation: React.FC = () => {
  return (
    <>
      {catteryMenuOptions.map( ( option: CatteryMenuSelection ) => (
        <CatteryMenuSelectionSingle
          key={`${option.href}-${option.name}`}
          href={option.href}
          name={option.name}
          cssClasses={option.cssClasses}
        />
      ) )}
    </>
  );
};

export default CatteryNavigation;
