'use client';

import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';
import { SiLapce } from 'react-icons/si';
import { AiOutlineUser } from 'react-icons/ai';
import DropDownItem from './DropDownItem';
import DropDownMenuOption from './DropDownMenuOption';
import styles from './userIcon.module.css';

type ComponentProps = {
  user: any,
};

export default function DropDownUserMenu({ user }: ComponentProps): JSX.Element {

  const [activeMenu, setActiveMenu] = useState('primary');
  const [menuHeight, setMenuHeight] = useState<null | number>(null);

  const calculateHeight = (domEle: HTMLElement): void => {
    setMenuHeight(domEle.offsetHeight + 40);
  };
  const emailRoot = user?.email?.split('@')[0] ?? 'NO CURRENT SESSION';

  // CSSTransitions seem to be incompatible with css-modules
  // css for CSSTransitions are their children are located: @/globalCSS/cssTranisitons
  return (
    <div
      className={styles.dropdown_menu}
      style={{ height: menuHeight ? menuHeight : '' }}
    >
      <CSSTransition
        in={activeMenu === 'primary'}
        unmountOnExit
        timeout={200}
        classNames="menu-primary"
        onEnter={calculateHeight}
      >
        <div className="menu">

          <DropDownMenuOption
            className={styles.dropdown_item}
            iconLeft={<AiOutlineUser style={{ scale: 2.2 }} />}
            iconRight={<SiLapce style={{ scale: 1.7 }} />}
            onClick={():void => setActiveMenu('secondary')}
          >
            <p>{emailRoot}</p>
          </DropDownMenuOption>
          <DropDownMenuOption className={styles.dropdown_item}>
            {user.id}
          </DropDownMenuOption>
          <DropDownMenuOption className={styles.dropdown_item}>
            {user.session_id}
          </DropDownMenuOption>
          <DropDownMenuOption className={styles.dropdown_item}>
            {user.role}
          </DropDownMenuOption>
        </div>

      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'secondary'}
        unmountOnExit
        timeout={200}
        classNames="menu-secondary"
        onEnter={calculateHeight}
      >
        <div className="menu">
          <DropDownItem setActiveMenu={setActiveMenu} goToMenu="primary">
            Cartoons
          </DropDownItem>
          <DropDownItem setActiveMenu={setActiveMenu} goToMenu="primary">
            Cartoons
          </DropDownItem>
          <DropDownItem setActiveMenu={setActiveMenu} goToMenu="primary">
            Cartoons
          </DropDownItem>
          <DropDownItem setActiveMenu={setActiveMenu} goToMenu="primary">
            Cartoons
          </DropDownItem>
        </div>

      </CSSTransition>
    </div>
  );
}
