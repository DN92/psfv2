'use client';

import { GiCat } from 'react-icons/gi';
import { FaCat } from 'react-icons/fa';
import { useState } from 'react';
import DropDownMenuOption from './DropDownMenuOption';

export default function CatsAndKittensNavigationDropDown():JSX.Element {

  const [open, setOpen] = useState(false);

  function closeMenu():void {
    console.log('toast');
    setOpen(false);
  }

  return (
    <li className="header-nav-link header-navlink-with-dropdown">
      <button
        type="button"
        onClick={():void => { setOpen((prev) => !prev); }}
        style={{
          border: 'none',
          padding: '0',
          backgroundColor: 'inherit',
          color: 'inherit',
          font: 'inherit',
          cursor: 'inherit' }}
      >
        CATS AND KITTENS

      </button>
      {open && (
        <div className="header-navlink-dropdown">
          <DropDownMenuOption
            className="header-navlink-dropdown-item"
            type="link"
            href="/cattery/kittens"
            iconLeft={<GiCat />}
            onClick={closeMenu}
          >
            <p>Kittens</p>
          </DropDownMenuOption>
          <DropDownMenuOption
            className="header-navlink-dropdown-item"
            type="link"
            href="/cattery/adults/dams"
            iconLeft={<FaCat />}
            onClick={closeMenu}
          >
            <p>Moms</p>
          </DropDownMenuOption>
          <DropDownMenuOption
            className="header-navlink-dropdown-item"
            type="link"
            href="/cattery/adults/sires"
            iconLeft={<FaCat />}
            onClick={closeMenu}
          >
            <p>Dads</p>
          </DropDownMenuOption>
        </div>
      )}
    </li>

  );
}
