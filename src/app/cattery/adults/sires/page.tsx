import supabase from '@/lib/supabaseConfig/serviceConnection';
import CatAdultSingleton from '../_adults_subcomponents/CatAdultSingleton';
import styles from '../_adults_subcomponents/catAdults.module.css';

const Sires: () => Promise<JSX.Element> = async () => {

  const { data, error } = await supabase.from('stud').select();
  const sires: Array<AdultCatSchema> = data as Array<AdultCatSchema>;

  return (
    <div>
      <h2 className={styles.h2}>Our Sires</h2>
      <section className={styles.adult_cat_section}>
        {sires.map((cat: AdultCatSchema) => (
          <CatAdultSingleton
            key={cat.id}
            adultCat={cat}
            model="stud"
            wrapperClasses={['background100']}
          />
        ))}
      </section>
    </div>
  );
};

export default Sires;
