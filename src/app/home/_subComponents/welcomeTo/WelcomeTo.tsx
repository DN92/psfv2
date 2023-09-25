import styles from './welcomeTo.module.css';

export default function WelcomeTo():JSX.Element {
  return (
    <div className={ styles.welcomeToWrapper }>
      <h4
        id="welcome_to"
        className={ `${styles.header} bold` }
      >
        Welcome to Planet Scottish Fold
      </h4>
      <p>
        Welcome to Planet Scottish Fold, your destination for adorable and friendly Scottish Fold and British Shorthair kittens. We take pride in breeding healthy and affectionate kittens that will bring joy and love to your home. With our carefully selected parents and dedicated care, we ensure that our kittens inherit the best qualities of the breed. Explore our website to meet our furry companions and discover your new best furrend. Reserve your kitten today and experience the pure delight of owning a Scottish Fold. MEOW
      </p>
    </div>
  );
}
