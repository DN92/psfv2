'use client';

import { useCallback, useRef, useEffect, MouseEventHandler } from 'react';
import { useRouter } from 'next/navigation';
import styles from './modal.module.css';

export default function Modal({ children }: { children: React.ReactNode }): React.ReactNode {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper],
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDismiss();
    },
    [onDismiss],
  );

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className={styles.modal_container}
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className={styles.modal}
      >
        {children}
      </div>
    </div>
  );
}