import Link from 'next/link';
import styles from './ourKittens.module.css';

export default function OurKittens():JSX.Element {

  return (
    <div className={ styles.header }>
      <h4
        id="our_kittens"
        className={ `${styles.ourKittensWrapper} bold` }
      >
        Our Kittens
      </h4>
      <p>
        Our kittens well-being is very important, thus choosing the right owners for our babies is another priority! If you’re ready for your perfect baby, please fill out the Questionnaire.
      </p>
      <p>What&apos;s included with our kittens?</p>
      <ul>
        <li>most loyal and affectionate pawsonality well socialized kitten raised at home in warm and loving environment with other pets and children</li>
        <li>2 vaccinations and deworming</li>
        <li>Spay/Neuter</li>
        <li>TICA slip</li>
        <li>Nails clipped</li>
        <li>Microchip with free registration</li>
        <li>1 month Trupanion insurance (NY & FL excluded)</li>
        <li>3 years health guarantee</li>
        <li>1 year FIP disease coverage</li>
        <li>litter and scratch board trained kitten</li>
        <li>lifetime breeder support weekly updates with photos and/or videos</li>
        <li>mystery gift kit full of goodies FaceTime is available before or after the reservation</li>
      </ul>
      <p>
        <Link href="/apply">Questionnaire.</Link>
      </p>
    </div>
  );
}
