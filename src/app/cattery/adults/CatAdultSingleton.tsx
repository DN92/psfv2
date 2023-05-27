import Image from 'next/image';
import styles from '../catAdults.module.css';

interface ComponentProps {
  adultCat: AdultCatSchema,
  wrapperClasses?: Array<string>,
}

const CatAdultSingleton: React.FC<ComponentProps> = ({ adultCat, wrapperClasses = [] }: ComponentProps) => {

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
  } = adultCat;

  return (
    <div className={`${classesToAddToWrapper} ${styles.adult_cat_singleton_wrapper}`}>
      <div className={styles.adult_cat_singletone_image_card}>
        <Image
          fill
          src="/images/css_images/dam-animated-1.jpeg"
          alt="dam main pic"
        />
      </div>
      <div>
        <p>{`Planet Scottish Fold ${model}`}</p>
        <p>{`Hi, I am${name}`}</p>
        <p>{`I am a ${breed}`}</p>
        <p>My color is </p>
        <p>{furColor}</p>
        <p>{`and I have ${eyeColor} eyes`}</p>
      </div>

    </div>
  );
};

export default CatAdultSingleton;
