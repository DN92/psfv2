import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import CatAdultSingleton from '../_shared_components/CatAdultSingleton';
import styles from '../_shared_components/CatAdults.module.css';

export default async function Dams(): Promise<JSX.Element> {

  async function getDams():Promise<Array<Stud>> {
    'use server';

    const supabase = createServerComponentClient<Database>({ cookies });
    const { data, error } = await supabase.from('mother').select('*');
    if (data) return data;
    return [];
  }

  const dams: Array<Mother> = await getDams();

  return (
    <div>
      <h2 className={styles.h2}>Our Dams</h2>
      <section className={styles.adult_cat_section}>
        {dams.map((cat: Mother) => (
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
}
