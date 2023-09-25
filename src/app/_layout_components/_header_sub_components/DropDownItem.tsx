'use client';

import Image, { StaticImageData } from 'next/image';
import { ReactNode, SetStateAction, Dispatch } from 'react';
import styles from './userIcon.module.css';

type DropDownItemProps = {
  iconLeft?: StaticImageData,
  iconRight?: StaticImageData,
  setActiveMenu?: Dispatch<SetStateAction<string>>,
  goToMenu?: string,
  children: ReactNode,
};

export default function DropDownItem( {
  iconLeft,
  iconRight,
  setActiveMenu,
  goToMenu,
  children,
}: DropDownItemProps ): JSX.Element {

  return (
    <button
      className={ styles.dropdown_item }
      type="button"
      onClick={ ():void => {
        if ( !goToMenu || !setActiveMenu ) return;
        setActiveMenu( goToMenu );
      } }
      onMouseOver={ ():void => {} }
      onFocus={ ():void => {} }
    >
      { iconLeft && (
        <Image
          className={ styles.dropdown_icon_left }
          fill
          src={ iconLeft }
          alt="ic left"
        />
      ) }
      { children }
      { iconRight && (
        <Image
          className={ styles.dropdown_icon_right }
          fill
          src={ iconRight }
          alt="ic right"
        />
      ) }
    </button>
  );
}
