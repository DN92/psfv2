import supabase from '@/lib/supabaseConfig';
import CatAdultSingleton from '../_shared_components/CatAdultSingleton';
import styles from '../_shared_components/CatAdults.module.css';

export const revalidate = 60 * 60;

export default async function Studs(): Promise<JSX.Element> {
  const { data: studs, error } = await supabase.from('stud').select('*');

  if (!studs) {
    console.log('error fetching studs:: studs.pagae.tsx:: ', error);
    return <div>bad data:: fallback</div>;
  }

  return (
    <div>
      <h2 className={styles.h2}>Our Sires</h2>
      <section className={styles.adult_cat_section}>
        {studs.map((cat: Stud) => (
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
}
