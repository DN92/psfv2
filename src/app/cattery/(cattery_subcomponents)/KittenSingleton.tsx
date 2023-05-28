import Image from 'next/image';
import styles from '../kittens/kittens.module.css';
import ReservedSpan from './ReservedSpan';

interface ComponentProps {
  kitten: KittenSchema,
  wrapperClasses?: Array<string>,
}

const KittenSingleton: React.FC<ComponentProps> = ({ kitten, wrapperClasses = [] }: ComponentProps) => {

  const classesToAddToWrapper: string = wrapperClasses.map((cssClass: string) => (styles[cssClass]) ?? '').join(' ');

  const {
    id,
    model,
    name,
    gender,
    breed,
    ears,
    furColor,
    eyeColor,
    status,
    dob,
    description,
  } = kitten;

  return (
    <div className={`${styles.kitten_singleton_wrapper} ${classesToAddToWrapper}`}>
      <div className={`${styles.kitten_singleton_image_card}`}>
        <Image
          fill
          src="/images/css_images/kitten-animated-1.jpeg"
          alt="kitten main pic"
        />
        {kitten.status === 'Reserved' && model === 'kitten' && <ReservedSpan />}
      </div>
      <div className={styles.kitten_singleton_text}>
        {(kitten.status === 'Available' || kitten.status === 'Reserved') ? (
          <>
            <p>{`Hi, I am ${name}`}</p>
            <p>{`I am a ${breed} ${gender}`}</p>
            <p>My color is </p>
            <p>{furColor}</p>
            <p>{`and I have ${eyeColor} eyes`}</p>
          </>
        ) : (
          <>
            <p>{`Hi, I am ${name}`}</p>
            <p>I was recently sold to</p>
            <p>a lucky family for</p>
            <p>{`$${kitten.price}`}</p>
          </>
        )}
      </div>

    </div>
  );
};

export default KittenSingleton;
