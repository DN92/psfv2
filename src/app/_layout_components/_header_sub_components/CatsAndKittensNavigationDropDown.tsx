'use client';

import { GiCat } from 'react-icons/gi';
import { FaCat } from 'react-icons/fa';
import { BiRightArrow, BiDownArrow } from 'react-icons/bi';
import { useState } from 'react';
import DropDownMenuOption from './DropDownMenuOption';

export default function CatsAndKittensNavigationDropDown():JSX.Element {

  const [open, setOpen] = useState(false);

  function openMenu():void {
    setOpen(true);
  }

  function closeMenu():void {
    setOpen(false);
  }

  const iconScaler = { scale: 2.0 };

  return (
    <li
      className="header-nav-link header-navlink-with-dropdown"
      onMouseLeave={closeMenu}
      onMouseEnter={openMenu}
      onMouseOver={openMenu}
      onFocus={openMenu}
    >
      <button
        type="button"
        style={{
          border: 'none',
          padding: '0',
          backgroundColor: 'inherit',
          color: 'inherit',
          font: 'inherit',
          cursor: 'inherit' }}
      >
        CATS AND KITTENS
        {' '}
        <span className={`header-navlink-icon ${open ? 'open-menu' : 'close-menu'}`}>
          {
            open ?

              <BiDownArrow style={{ scale: 1.1 }} />
              :
              <BiRightArrow style={{ scale: 1.1 }} />
          }
        </span>
      </button>
      <div className="header-navlink-dropdown" style={{ display: open ? 'initial' : 'none' }}>
        <DropDownMenuOption
          className="header-navlink-dropdown-item"
          type="link"
          href="/cattery/kittens"
          iconLeft={<GiCat style={iconScaler} />}
          onClick={closeMenu}
        >
          <p>Kittens</p>
        </DropDownMenuOption>
        <DropDownMenuOption
          className="header-navlink-dropdown-item"
          type="link"
          href="/cattery/adults/dams"
          iconLeft={<FaCat style={iconScaler} />}
          onClick={closeMenu}
        >
          <p>Moms</p>
        </DropDownMenuOption>
        <DropDownMenuOption
          className="header-navlink-dropdown-item"
          type="link"
          href="/cattery/adults/sires"
          iconLeft={<FaCat style={iconScaler} />}
          onClick={closeMenu}
        >
          <p>Dads</p>
        </DropDownMenuOption>
      </div>
    </li>

  );
}
