import { kittens as kittensFromData } from '../(cattery_subcomponents)/catTestData';
import KittenSingleton from '../(cattery_subcomponents)/KittenSingleton';
import styles from './kittens.module.css';

interface ComponentProps {
  kittens: Array<KittenSchema>
}

const Kittens: React.FC<ComponentProps> = ({ kittens = kittensFromData }: ComponentProps) => {

  const availableKittens: Array<KittenSchema> = kittens.filter((kitten: KittenSchema) => (
    kitten.status === 'Available' || kitten.status === 'Reserved'
  ));

  const soldKittens: Array<KittenSchema> = kittens.filter((kitten: KittenSchema) => (
    kitten.status === 'Sold'
  ));

  return (
    <div>
      <h2 className={styles.h2}>Available Kittens</h2>
      <section className={`${styles.kitten_section}`}>
        {availableKittens.map((kitten: KittenSchema) => (
          <KittenSingleton
            key={kitten.id}
            kitten={kitten}
            wrapperClasses={['background100']}
          />
        ))}
      </section>
      <h2 className={styles.h2}>Sold Kittens</h2>
      <section className={styles.kitten_section}>
        {soldKittens.map((kitten: KittenSchema) => (
          <KittenSingleton
            key={kitten.id}
            kitten={kitten}
            wrapperClasses={['background500']}
          />
        ))}
      </section>
    </div>
  );
};

export default Kittens;
