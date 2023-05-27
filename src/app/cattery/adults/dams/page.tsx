import { dams } from '../../(cattery_subcomponents)/catTestData';
import CatAdultSingleton from '../(adults_subcomponents)/CatAdultSingleton';
import styles from './catAdults.module.css';

interface ComponentProps {
  cats: Array<AdultCatSchema>
  wrapperClasses?: Array<string>,
}

const Dams: React.FC<ComponentProps> = ({ cats = dams, wrapperClasses = [] }: ComponentProps) => {

  console.log(dams);

  return (
    <div>
      <h2 className={styles.h2}>Our Dams</h2>
      <section className={styles.adult_cat_section}>
        {cats.map((cat: AdultCatSchema) => (
          <CatAdultSingleton
            key={cat.id}
            adultCat={cat}
            wrapperClasses={['background100']}
          />
        ))}
      </section>
    </div>
  );
};

export default Dams;
