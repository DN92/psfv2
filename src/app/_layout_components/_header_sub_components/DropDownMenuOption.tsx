'use client';

import Link from 'next/link';

import { Dispatch, SetStateAction, ReactNode } from 'react';

type DropDownItemProps = Partial<{
  className: string,
  type: 'link' | 'button',
  href: string,
  iconLeft: ReactNode | null,
  iconRight: ReactNode | null,
  onClick: ( ...args: [] ) => void,
  onMouseOver: ( ...args: [] ) => void,
  onMouseEnter: ( ...args: [] ) => void,
  onMouseLeave: ( ...args: [] ) => void,
  onFocus: ( ...args: [] ) => void,
  setActiveMenu: Dispatch<SetStateAction<string>>,
  goToMenu: string,
  children: ReactNode,
}>;

export default function DropDownMenuOption( {
  type = 'button',
  href = '/',
  className = '',
  onClick = ():void => {},
  onMouseOver = ():void => {},
  onMouseEnter = ():void => {},
  onMouseLeave = ():void => {},
  onFocus = ():void => {},
  iconLeft = null,
  iconRight = null,
  children,
}: DropDownItemProps ): JSX.Element {

  switch ( type ) {
    case 'link': {
      return (
        <Link
          href={href}
          className={className}
          onClick={onClick}
          onMouseOver={onMouseOver}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onFocus={onFocus}
        >
          {iconLeft}
          {children}
          {iconRight}
        </Link>
      );
    }
    default: {
      return (
        <button
          className={className}
          type="button"
          onClick={onClick}
          onMouseOver={onMouseOver}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onFocus={onFocus}
        >
          {iconLeft}
          {children}
          {iconRight}
        </button>
      );

    }
  }

}
