import supabase from '@/lib/supabaseConfig/serviceConnection';
import CatAdultSingleton from '../_adults_subcomponents/CatAdultSingleton';
import styles from '../_adults_subcomponents/catAdults.module.css';

const Dams: () => Promise<JSX.Element> = async () => {

  const { data, error } = await supabase.from('mother').select();
  const dams: Array<AdultCatSchema> = data as Array<AdultCatSchema>;

  return (
    <div>
      <h2 className={styles.h2}>Our Sires</h2>
      <section className={styles.adult_cat_section}>
        {dams.map((cat: AdultCatSchema) => (
          <CatAdultSingleton
            key={cat.id}
            adultCat={cat}
            model="mother"
            wrapperClasses={['background100']}
          />
        ))}
      </section>
    </div>
  );
};

export default Dams;
