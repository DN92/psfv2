'use client';

import { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import styles from './homeBanner.module.css';

type ComponenetProps = {
  message: Array<string | JSX.Element>,
  whenClosedText: string,
};
export default function HomeBanner( { message, whenClosedText }: ComponenetProps ):JSX.Element {

  const [show, setShow] = useState( !!message );

  return (
    <div>
      { show && (
        <div className={ styles.bannerContainerOpen }>
          <div className={ styles.closeButtonContainer }>
            <button
              aria-label="close"
              type="button"
              onClick={ ():void => setShow( false ) }
            >
              <IoCloseSharp />
            </button>
          </div>
          <div className={ styles.bannerMessage }>
            { message.map( ( msg, idx ) => (
              <p key={ `${msg}${idx}` }>{ msg }</p>
            ) ) }
          </div>
        </div>
      ) }
      { !show && (
        <div className={ styles.bannerContainerClosed }>
          <button
            className={ 'btn-reset' }
            type="button"
            onClick={ ():void => setShow( true ) }
          >
            { whenClosedText }
          </button>

        </div>
      ) }
    </div>
  );
}
