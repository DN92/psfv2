import Image from 'next/image';
import cert1 from '../_assets/internationalCatAssociationCert.jpg';
import cert2 from '../_assets/catBreedSenseiCert.jpg';
import gSnap from '../_assets/googleReviewSnap.jpg';
import styles from '../home.module.css';

export default function MyPassion():JSX.Element {

  return (
    <div>
      <h2 id="my_passion">My Passion</h2>
      <p>
        Hello, I&apos;m Nataliya, the proud owner of Planet Scottish Fold Cattery. Let me share how my love for nature and animals guided me on this wonderful journey of breeding. Since I was a child, I&apos;ve been captivated by the beauty of the natural world. Cats, in particular, hold a special place in my heart, even from a young age. Growing up, pets were always a cherished part of my family. We had a variety of companions, from our beloved childhood cat to parrots, turtles, fish, hamsters, and dogs. To me, life without a pet would feel incomplete.
      </p>
      <div className={ `${styles.image_container} ${styles.image_container_three}` }>
        <Image
          fill
          src={ cert1 }
          alt="cat association cert"
        />
      </div>
      <p>
        In 2016, my cattery journey began with Athena, a purebred Scottish Straight cat gifted to me by my sister. Athena captured my heart with her incredible loyalty and affectionate nature. She became the foundation of my breeding program, producing adorable kittens and eventually retiring in 2021. Her legacy continues through Ladybug, one of her kittens, who carries her mother&apos;s loving personality. Throughout the years, my dedication has been focused on understanding and improving this remarkable breed. My utmost priority is breeding healthy kittens that embody the best qualities of the breed: friendly, affectionate, loyal, and non-aggressive. Based on my personal experiences as a child, where I encountered attacks by a cat and three dogs, I am deeply committed to breeding kittens with exceptional friendliness and zero aggression.
      </p>
      <div className={ `${styles.image_container} ${styles.image_container_four}` }>
        <Image
          fill
          src={ cert2 }
          alt="cat sensei cert"
        />
      </div>
      <p>
        Choosing the right parents plays a crucial role in ensuring our kittens grow up to be well-behaved and friendly. By carefully selecting parents with non-aggressive and friendly personalities, I establish a strong foundation for creating kittens who naturally inherit these desirable traits. Breeding cats must exhibit no signs of aggression, as it is through their lineage that our kittens inherit their gentle and friendly nature. At Planet Scottish Fold Cattery, honesty is our foundation. We value the power of natural products and trust our clients to be responsible cat owners. Our focus is on nurturing the perfect personalities of our kittens, with health being our primary concern.
      </p>
      <div className={ `${styles.image_container} ${styles.image_container_five}` }>
        <Image
          fill
          src={ gSnap }
          alt="google review snapshot"
        />
      </div>
      <p>
        As a proud TICA registered breeder, I have completed a breeding course, expanding my knowledge and expertise in the field. I take pride in upholding TICA&apos;s code of ethics, which ensures the highest standards of care and professionalism in our cattery.
      </p>
      <p>
        Client satisfaction is paramount to us. We treasure the positive feedback we receive from our clients and maintain long-term connections, providing lifetime breeder support. Your happiness and the well-being of our kittens are always our top priorities. I genuinely care about the well-being of our clients and their furry companions. As a knowledgeable and approachable breeder, I take pride in offering guidance and support whenever needed. Building lasting relationships with our clients brings us immense joy, as we witness the growth and happiness of the kittens we have raised.
      </p>
      <p>
        Thank you for visiting Planet Scottish Fold Cattery and taking the time to read our story! We invite you to explore our website and discover the joy that our cats and kittens bring. Feel free to reach out to us through any social media platform or schedule a FaceTime call to find your perfect soulmate. We look forward to embarking on this exciting journey with you!
      </p>
    </div>
  );
}
