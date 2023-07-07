'use client';

import { CSSTransition } from 'react-transition-group';
import { useState, useEffect } from 'react';
import { SiLapce } from 'react-icons/si';
import { AiOutlineUser } from 'react-icons/ai';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { getUserFE } from '@/lib/functions/getUserFE';
import DropDownItem from './DropDownItem';
import DropDownMenuOption from './DropDownMenuOption';
import styles from './userIcon.module.css';


export default function DropDownUserMenu(): JSX.Element {

  const router = useRouter();

  const [user, setUser] = useState<ExtendedUser>();
  const [activeMenu, setActiveMenu] = useState('primary');
  const [menuHeight, setMenuHeight] = useState<null | number>(null);
  const emailRoot = user?.email?.split('@')[0] ?? 'NO CURRENT SESSION';

  function calculateHeight(domEle: HTMLElement): void {
    setMenuHeight(domEle.offsetHeight + 40);
  }

  async function handleSignOut():Promise<void> {
    const supabase = createClientComponentClient<Database>();
    const { error } = await supabase.auth.signOut();
    localStorage.clear();
    router.push('/');
  }

  function navToSignIn():void {
    router.push('/auth');
  }

  useEffect(() => {
    getUserFE(setUser);
  }, []);


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
        onMouseEnter={calculateHeight}
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
            {user?.id}
          </DropDownMenuOption>
          <DropDownMenuOption className={styles.dropdown_item}>
            {/* I have verfied that session_id does in fact exist on user and its extended interface. User is comming from auth helpers. I do not know where else to get User from if i'm targeting the wrong 'type'.  */}
            {/* @ts-ignore */}
            {user?.session_id}
          </DropDownMenuOption>
          <DropDownMenuOption className={styles.dropdown_item}>
            {user?.role}
          </DropDownMenuOption>
          {
            user ?
              (
                <DropDownMenuOption className={styles.dropdown_item} onClick={handleSignOut}>
                  Sign Out
                </DropDownMenuOption>
              )
              :
              (
                <DropDownMenuOption className={styles.dropdown_item} onClick={navToSignIn}>
                  Sign In
                </DropDownMenuOption>
              )
          }
        </div>

      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'secondary'}
        unmountOnExit
        timeout={200}
        classNames="menu-secondary"
        onMouseEnter={calculateHeight}
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
