'use client';

import Link from 'next/link';

export default function HomeSiteNav():JSX.Element {

  return (

    <nav>
      <ul>
        <li><Link href="/cattery/kittens">Our Kittens</Link></li>
        <li><Link href="/cattery/dams">Our Queens</Link></li>
        <li><Link href="/cattery/studs">Our Sires</Link></li>
        <li><Link href="/apply">Adoption</Link></li>
      </ul>
    </nav>
  );
}
