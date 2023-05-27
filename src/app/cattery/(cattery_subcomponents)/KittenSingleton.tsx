import Image from 'next/image';
import styles from '../kittens/kittens.module.css';

interface ComponentProps {
  kitten: KittenSchema,
}

const KittenSingleton: React.FC<ComponentProps> = ({ kitten }: ComponentProps) => {

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
    <div className={styles.kitten_singleton_wrapper}>
      <div className={`${styles.kitten_singleton_image_card} ${styles.background100}`}>
        <Image
          fill
          src="/images/css_images/kitten-animated-1.jpeg"
          alt="kitten main pic"
        />
      </div>
      <div className="singleKittenInfo">
        {kitten?.status === 'Available' ? (
          <>
            <p>{`Hi, I am ${name}`}</p>
            <p>{`I am a ${breed} ${gender}`}</p>
            <p>My color is </p>
            <p>{furColor}</p>
            <p>{`and I have ${eyeColor} eyes`}</p>
          </>
        ) : (
          <>
            <p>{name}</p>
            <p>{kitten.status}</p>
            <p>{`$${kitten.price}`}</p>
          </>
        )}
      </div>

    </div>
  );
};

export default KittenSingleton;
