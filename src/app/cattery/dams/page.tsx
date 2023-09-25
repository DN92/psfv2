import supabase from '@/lib/supabaseConfig';
import CatAdultSingleton from '../_shared_components/CatAdultSingleton';
import styles from '../_shared_components/CatAdults.module.css';

export const revalidate = 60 * 60;

export default async function Dams(): Promise<JSX.Element> {

  const { data: dams, error } = await supabase.from( 'mother' ).select( '*' );

  if ( !dams ) {
    console.log( 'error fetching kittens:: kitten.pagae.tsx:: ', error );
    return <div>bad data:: fallback</div>;
  }

  return (
    <div>
      <h2 className={ styles.h2 }>Our Dams</h2>
      <section className={ styles.adult_cat_section }>
        { dams.map( ( cat: Mother ) => (
          <CatAdultSingleton
            key={ cat.id }
            adultCat={ cat }
            model="mother"
            wrapperClasses={ ['background100'] }
          />
        ) ) }
      </section>
    </div>
  );
}
