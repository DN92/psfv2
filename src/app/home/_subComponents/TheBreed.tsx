import Link from 'next/link';
import Image from 'next/image';
import breedChars from '../_assets/breedCharacteristics.jpg';
import huggers from '../_assets/cuteHuggingKittens.jpg';
import styles from '../home.module.css';

export default function TheBreed():JSX.Element {

  return (
    <div>
      <h3 id="the_breed">The Breed</h3>
      <p>
        Scottish folds are known to be suuupperr affectionate and get along with other pets and small children. This breed does not fit the standard cat stereotype! They don&apos;vet want to be left alone in their lair, instead, they&apos;vell want to sit on your lap, lie under your arm or on your pillow as close to your face If you get them a sibling you&apos;vell enjoy watching them jump around and groom each other, but they wont forget about you! You&apos;vell simply get double affection and love.
      </p>
      <div className={`${styles.image_container} ${styles.image_container_six}`}>
        <Image fill src={breedChars} alt="breed characteristics" />
      </div>
      <p>
        So if you’re looking for a mellow and loyal best furrend then this breed is for you!
      </p>
      <p>
        <Link href="/cattery/kittens">View Scottish Fold Kittens for Sale</Link>
      </p>
      <div className={`${styles.image_container} ${styles.image_container_seven}`}>
        <Image fill src={huggers} alt="hugging kittens" />
      </div>
    </div>
  );
}
