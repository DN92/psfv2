import supabase from '@/lib/supabaseConfig';
import KittenSingleton from '../_cattery_subcomponents/KittenSingleton';
import styles from './kittens.module.css';

export const revalidate = 60 * 60;

export default async function Kittens(): Promise<JSX.Element> {
  const { data: kittens, error } = await supabase.from( 'kitten' ).select( '*' );

  if ( !kittens ) {
    console.log( 'error fetching kittens:: kitten.pagae.tsx:: ', error );
    return <div>bad data:: fallback</div>;
  }

  const availableKittens: Array<Kitten> = kittens.filter( ( kitten: Kitten ) => (
    kitten.status === 'Available' || kitten.status === 'Reserved'
  ) );

  const soldKittens: Array<Kitten> = kittens.filter( ( kitten: Kitten ) => (
    kitten.status === 'Sold'
  ) )
    .sort( ( a: Kitten, b: Kitten ) => ( ( b.price ?? 0 ) - ( a.price ?? 0 ) ) )
    .slice( 0, 15 );

  return (
    <div>
      <h2 className={styles.h2}>Available Kittens</h2>
      <section className={`${styles.kitten_section}`}>
        {availableKittens.map( ( kitten: Kitten ) => (
          <KittenSingleton
            key={kitten.uuid}
            kitten={kitten}
            wrapperClasses={['background100']}
          />
        ) )}
      </section>
      <h2 className={styles.h2}>Sold Kittens</h2>
      <section className={styles.kitten_section}>
        {soldKittens.map( ( kitten: Kitten ) => (
          <KittenSingleton
            key={kitten.id}
            kitten={kitten}
            wrapperClasses={['background500']}
          />
        ) )}
      </section>
    </div>
  );
}
