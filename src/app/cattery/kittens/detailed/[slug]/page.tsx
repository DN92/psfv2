import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Image from 'next/image';
import { PostgrestError } from '@supabase/supabase-js';
import Link from 'next/link';
import styles from './kittensDetailed.module.css';

/* Chilly

Status: Available

Location: High Point, North Carolina

Price: $3000

Summer Sale: $2400


Scottish Straight Shorthair

Gender: Boy

Ears: Straight

Fur color: Chocolate ticked tabby with white

Eye color: Green

Date of Birth: 3/20/2023

Dam: Ladybug

Sire: Cupid
*/

type Params = {
  params: {
    slug: string | number
  }
};

export default async function Detailed({ params }: Params): Promise<JSX.Element> {

  async function getKitten(): Promise<Kitten | null> {
    'use server';

    const supabase = createServerComponentClient<Database>({ cookies });

    const { data, error } = await supabase
      .from('kitten')
      .select('*')
      .eq('id', params.slug);


    if (error) return null;
    if (Array.isArray(data) && data.length) {
      return data[0] as Kitten;
    }
    return null;
  }

  const kitten = await getKitten();

  if (kitten) {
    return (
      <div className={styles.page_wrapper}>
        <div className={styles.page_left}>
          <div className={styles.card}>
            card
            {/* <Image src={kitten.mainImageSrcValue} alt="kitty picture" /> */}
          </div>
          <div className={styles.carousel}>
            carousel
          </div>
        </div>
        <div className={styles.page_right}>
          <div className={styles.animal_description}>
            des
            <h3>{kitten.name}</h3>
            <p>{`Date of Birth ${kitten.dob}`}</p>
            <p>{`A ${kitten.furColor} ${kitten.gender}`}</p>
            <p>{`with ${kitten.eyeColor} eyes`}</p>
            <p>{`STATUS: ${kitten.status}`}</p>
            <p>{kitten.price}</p>
            <p />
          </div>
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
  return <>fallback</>;
}

