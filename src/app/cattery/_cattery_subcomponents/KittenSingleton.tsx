import Image from 'next/image';
import Link from 'next/link';
import styles from '../kittens/kittens.module.css';
import ReservedSpan from './ReservedSpan';

type ComponentProps = {
  kitten: Kitten,
  wrapperClasses?: Array<string>,
  asAdmin: boolean,
};

const KittenSingleton: React.FC<ComponentProps> = ({ kitten, wrapperClasses = [], asAdmin }: ComponentProps) => {

  const classesToAddToWrapper: string = wrapperClasses.map((cssClass: string) => (styles[cssClass]) ?? '').join(' ');

  const {
    uuid,
    name,
    gender,
    breed,
    ears,
    price,
    furColor,
    eyeColor,
    status,
    dob,
    description,
  } = kitten;

  return (
    <Link
      className={`${styles.kitten_singleton_wrapper} ${classesToAddToWrapper}`}
      href={asAdmin ?
        `/admin/kittenUpdate/${kitten.uuid}`
        :
        `/cattery/kittens/detailed/kitten/${kitten.uuid}`}
    >
      <div className={`${styles.kitten_singleton_image_card}`}>
        <Image
          fill
          src="/images/css_images/kitten-animated-1.jpeg"
          alt="kitten main pic"
        />
        {kitten.status === 'Reserved' && <ReservedSpan />}
      </div>
      <div className={styles.kitten_singleton_text}>
        {(kitten.status === 'Available' || kitten.status === 'Reserved') ? (
          <>
            <p>{`Hi, I am ${name}`}</p>
            <p>{`I am a ${breed} ${gender}`}</p>
            <p>My color is </p>
            <p>{furColor}</p>
            <p>{`and I have ${eyeColor} eyes`}</p>
            <p>{`$${kitten.price}`}</p>
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

    </Link>
  );
};

export default KittenSingleton;
