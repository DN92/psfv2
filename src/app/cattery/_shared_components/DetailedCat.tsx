import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';
import styles from './CatDetailed.module.css';

type Params = {
  params: {
    type: 'kitten' | 'dam' | 'sire',
    id: string | number
  }
};

type Cat = Kitten | Mother | Stud | null;

export default async function DetailedCat({ params: { type, id } }: Params): Promise<JSX.Element> {


  async function getCat(): Promise<Cat> {
    'use server';

    const supabase = createServerComponentClient<Database>({ cookies });
    const { data, error } = await supabase
      .from(`${type}`)
      .select('*')
      .eq('id', id);
    if (Array.isArray(data) && data.length) {
      return data[0] as Cat;
    }
    return null;
  }

  const cat = await getCat();

  function getTypedCat(cat: Cat): Cat {
    if (!cat) return null;
    switch (cat.type) {
      case 'kitten': return cat as Kitten;
      case 'mother': return cat as Mother;
      case 'stud': return cat as Stud;
      default: return null;
    }
  }

  const typedCat = getTypedCat(cat);

  const descriptionSection = (():JSX.Element => {
    if (!typedCat) return <div>error fallback</div>;
    switch (typedCat.type) {
      case 'kitten': {
        return (
          <section className={styles.animal_description}>
            des
            <h3>{typedCat.name}</h3>
            <p>{`Date of Birth ${typedCat.dob}`}</p>
            <p>{`A ${typedCat.furColor} ${typedCat.gender}`}</p>
            <p>{`with ${typedCat.eyeColor} eyes`}</p>
            <p>{`STATUS: ${typedCat.status}`}</p>
            <p>{`$${typedCat.price}`}</p>
            <h4>Parents</h4>
            <p>{`Dam: ${typedCat.mother}`}</p>
            <p>{`Sire: ${typedCat.father}`}</p>
            <p />
          </section>
        );
      }
      case 'mother':
      case 'stud': {
        return (
          <section>
            <h3>{typedCat.name}</h3>
            {typedCat.dob && <p>{`Date of Birth ${typedCat.dob}`}</p>}
            <p>{`A ${typedCat.furColor}`}</p>
            <p>{`${typedCat.ears} Ears`}</p>
            <p>{`${typedCat.furColor} Fur`}</p>
            <p>{`Description: ${typedCat.description}`}</p>
          </section>
        );
      }
      default: return <div>error fallback</div>;
    }
  })();

  return (
    <div className={styles.page_wrapper}>
      <div className={styles.page_left}>
        <div className={styles.card}>
          card
          {/* <Image src={kitten.mainImageSrcValue} alt="kitty picture" /> */}
        </div>
        { typedCat?.type === 'kitten' && (
          <div className={styles.carousel}>
            carousel
          </div>
        )}
      </div>
      <div className={styles.page_right}>
        {descriptionSection}
        <nav>
          <ul className={styles.page_navigation}>
            <li className={styles.navigation_button_wrapper}><button type="button" className="button_style1"><Link href="/cattery/kittens">BACK</Link></button></li>
            <li className={styles.navigation_button_wrapper}><button type="button" className="button_style1"><Link href="/apply">APPLY</Link></button></li>
            <li className={styles.navigation_button_wrapper}><button type="button" className="button_style1"><Link href="/contact">CONTACT US</Link></button></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
