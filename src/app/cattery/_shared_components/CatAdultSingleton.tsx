import Image from 'next/image';
import Link from 'next/link';
import styles from './CatAdults.module.css';

interface ComponentProps {
  adultCat: Mother | Stud,
  model: 'stud' | 'mother'
  wrapperClasses?: Array<string>,
}

export default function CatAdultSingleton( { adultCat, model, wrapperClasses = [] }: ComponentProps ): JSX.Element {

  const classesToAddToWrapper: string = wrapperClasses.map( ( cssClass: string ) => ( styles[cssClass] ) ?? '' ).join( ' ' );

  const {
    id,
    name,
    breed,
    ears,
    furColor,
    eyeColor,
    status,
    dob,
    description,
  } = adultCat;

  return (
    <Link
      className={`${styles.adult_cat_singleton_wrapper} ${classesToAddToWrapper} `}
      href={`/cattery/${model === 'stud' ? 'studs' : 'dams'}/detailed/${model}/${adultCat.id}`}
    >
      <div className={styles.adult_cat_singleton_image_card}>
        <Image
          fill
          src={`/images/css_images/${model}-animated-1.jpeg`}
          alt="dam main pic"
        />
      </div>
      <div className={styles.adult_cat_singleton_text}>
        <p>{`Planet Scottish Fold ${model}`}</p>
        <p>{`Hi, I am${name}`}</p>
        <p>{`I am a ${breed}`}</p>
        <p>My color is </p>
        <p>{furColor}</p>
        <p>{`and I have ${eyeColor} eyes`}</p>
      </div>

    </Link>
  );
}
