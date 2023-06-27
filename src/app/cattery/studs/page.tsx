import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import CatAdultSingleton from '../_shared_components/CatAdultSingleton';
import styles from '../_shared_components/CatAdults.module.css';

export default async function Studs(): Promise<JSX.Element> {

  async function getStuds():Promise<Array<Stud>> {
    'use server';

    const supabase = createServerComponentClient<Database>({ cookies });
    const { data, error } = await supabase.from('stud').select('*');
    if (data) return data;
    return [];
  }

  const studs: Array<Stud> = await getStuds();

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
