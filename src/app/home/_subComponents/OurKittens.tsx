import Link from 'next/link';

export default function OurKittens():JSX.Element {

  return (
    <div>
      <h3 id="our_kittens">Our Kittens</h3>
      <p>
        Our kittens well-being is very important, thus choosing the right owners for our babies is another priority! If you’re ready for your perfect baby, please fill out the Questionnaire.
      </p>
      <p>
        <Link href="/apply">Questionnaire.</Link>
      </p>
    </div>
  );
}
