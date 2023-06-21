'use client';

import { useState, ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './userIcon.module.css';

type ComponentProps = {
  src: StaticImageData,
  alt: string,
  children: ReactNode,
};

export default function UserNavItem({ src, alt, children }: ComponentProps): JSX.Element {

  const [open, setOpen] = useState(false);

  return (
    <li
      className={styles.header_icon_nav_li}
    >
      <button
        className={styles.portrait_card}
        type="button"
        onClick={(): void => setOpen((prev) => !prev)}
      >
        <Image fill src={src} alt={alt} />
      </button>
      {open && children}
    </li>
  );
}
