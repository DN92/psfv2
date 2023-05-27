import { kittens } from '../(cattery_subcomponents)/catTestData';
import KittenSingleton from '../(cattery_subcomponents)/KittenSingleton';
import styles from './kittens.module.css';

const Kittens: React.FC = () => {

  const availableKittens: Array<KittenSchema> = kittens.filter((kitten: KittenSchema) => (
    kitten.status === 'Available'
  ));

  const reservedKittens: Array<KittenSchema> = kittens.filter((kitten: KittenSchema) => (
    kitten.status === 'Reserved'
  ));

  const soldKittens: Array<KittenSchema> = kittens.filter((kitten: KittenSchema) => (
    kitten.status === 'Sold'
  ));

  return (
    <div>
      <h2>Available Kittens</h2>
      <section className={styles.kitten_section}>
        {availableKittens.map((kitten: KittenSchema) => (
          <KittenSingleton key={kitten.id} kitten={kitten} />
        ))}
      </section>
      <h2>Reserved Kittens</h2>
      <section className={styles.kitten_section}>
        {reservedKittens.map((kitten: KittenSchema) => (
          <KittenSingleton key={kitten.id} kitten={kitten} />
        ))}
      </section>
      <h2>Sold Kittens</h2>
      <section className={styles.kitten_section}>
        {soldKittens.map((kitten: KittenSchema) => (
          <KittenSingleton key={kitten.id} kitten={kitten} />
        ))}
      </section>
    </div>
  );
};

export default Kittens;
