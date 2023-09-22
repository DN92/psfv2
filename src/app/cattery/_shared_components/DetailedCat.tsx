import supabase from '@/lib/supabaseConfig';
import Link from 'next/link';
import styles from './CatDetailed.module.css';

type Params = {
  params: {
    type: 'kitten' | 'mother' | 'stud',
    id: string
  }
};

export default async function Detailedkitten( { params: { type, id } }: Params ): Promise<JSX.Element> {

  const { data: cat, error } = await supabase
    .from( `${type}` )
    .select( '*' )
    .eq( 'id', id )
    .limit( 1 )
    .single();

  if ( !cat ) return <div>fetch fail</div>;

  const kitten: Kitten | null = cat.type === 'kitten' ? cat as Kitten : null;
  const adultCat: Mother | Stud | null = ( cat.type === 'mother' || cat.type === 'stud' ) ? cat : null;

  let descriptionSection: JSX.Element;

  if ( kitten ) {
    descriptionSection = (
      <section className={styles.animal_description}>
        des
        <h3>{kitten.name}</h3>
        <p>{`Date of Birth ${kitten.dob}`}</p>
        <p>{`A ${kitten.furColor} ${kitten.gender}`}</p>
        <p>{`with ${kitten.eyeColor} eyes`}</p>
        <p>{`STATUS: ${kitten.status}`}</p>
        <p>{`$${kitten.price}`}</p>
        <h4>Parents</h4>
        <p>{`Dam: ${kitten.mother}`}</p>
        <p>{`Sire: ${kitten.father}`}</p>
        <p />
      </section>
    );
  }
  if ( adultCat ) {
    descriptionSection = (
      <section>
        <h3>{adultCat.name}</h3>
        {adultCat.dob && <p>{`Date of Birth ${adultCat.dob}`}</p>}
        <p>{`A ${adultCat.furColor}`}</p>
        <p>{`${adultCat.ears} Ears`}</p>
        <p>{`${adultCat.furColor} Fur`}</p>
        <p>{`Description: ${adultCat.description}`}</p>
      </section>
    );
  }


  return (
    <div className={styles.page_wrapper}>
      <div className={styles.page_left}>
        <div className={styles.card}>
          card
          {/* <Image src={kitten.mainImageSrcValue} alt="kitty picture" /> */}
        </div>
        { kitten?.type === 'kitten' && (
          <div className={styles.carousel}>
            carousel
          </div>
        )}
      </div>
      <div className={styles.page_right}>
        {descriptionSection}
        <nav>
          <ul className={styles.page_navigation}>
            <li className={styles.navigation_button_wrapper}><button type="button" className="button_style1"><Link href="/kittentery/kittens">BACK</Link></button></li>
            <li className={styles.navigation_button_wrapper}><button type="button" className="button_style1"><Link href="/apply">APPLY</Link></button></li>
            <li className={styles.navigation_button_wrapper}><button type="button" className="button_style1"><Link href="/contact">CONTACT US</Link></button></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
