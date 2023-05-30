import { sires } from '../../_cattery_subcomponents/catTestData';
import CatAdultSingleton from '../_adults_subcomponents/CatAdultSingleton';
import styles from '../(adults_subcomponents)/catAdults.module.css';

interface ComponentProps {
  cats: Array<AdultCatSchema>
}

const Sires: React.FC<ComponentProps> = ({ cats = sires }: ComponentProps) => {

  return (
    <div>
      <h2 className={styles.h2}>Our Sires</h2>
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

export default Sires;
