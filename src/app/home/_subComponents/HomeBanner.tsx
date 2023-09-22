'use client';

import { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';

type ComponenetProps = {
  message: Array<string | JSX.Element>,
  whenClosedText: string,
};
export default function HomeBanner( { message, whenClosedText }: ComponenetProps ):JSX.Element {

  const [show, setShow] = useState( true );


  return (
    <div>
      {show && (
        <div className="box_container">
          <div className="box_buttons">
            <button aria-label="close" type="button" onClick={():void => setShow( false )}><IoCloseSharp /></button>
          </div>
          <div className="messagebox-message">
            {message.map( ( msg, idx ) => (
              // @ts-ignore
              <p key={`${msg}${idx}`} style={{ margin: '.5rem 0 .5rem 0' }}>{msg}</p>
            ) )}
          </div>
        </div>
      )}
      {!show && (
        <button className="box_closed" type="button" onClick={():void => setShow( true )}>
          {whenClosedText}
        </button>
      )}
    </div>
  );
}
