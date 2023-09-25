'use client';

import { useRef, useLayoutEffect } from 'react';
import styles from './progressBar.module.css';

type ComponentProps = {
  currentStep: number,
  updateStepState: ( nextState: number ) => void,
  userStartedForm: boolean,
  slots?: number,
};

export default function ProgressBar( { currentStep, updateStepState, userStartedForm, slots = 3 }: ComponentProps ): JSX.Element {

  const elementRefs = useRef( [] );

  function addToRefs( ele: Element ): void {
    if ( ele && !elementRefs.current.includes( ele ) ) {
      elementRefs.current.push( ele );
    }
  }

  useLayoutEffect( () => {
    if ( currentStep > slots || !userStartedForm ) return;
    elementRefs.current.forEach( ( _, idx ) => {
      if ( idx === currentStep ) {
        elementRefs.current[idx].classList.add( styles.progress_step_selected );
      } else {
        elementRefs.current[idx].classList.remove( styles.progress_step_selected );
      }
    } );
  }, [slots, currentStep, userStartedForm] );

  const progressBarDividers: Array<React.JSX.Element> = [];

  progressBarDividers.push( <div
    key="gutter1"
    className={ `${styles.progress_step_gutter} ${styles.progress_step_gutter_start}` }
  /> );
  progressBarDividers.push( <div
    key="break-initial"
    className={ styles.progress_break }
  /> );

  for ( let i = 0; i < slots + 1; i++ ) {
    progressBarDividers.push(
      <button
        key={ `step${i}` }
        ref={ addToRefs }
        type="button"
        id={ `progress-button-${i}}` }
        className={ `${styles.progress_step} ${i !== slots ? styles.progress_step_last_child : ''}` }
        onClick={ ():void => updateStepState( i ) }
      >
        <span className={ styles.progress_step_innertext }>{ i === 0 ? 'begin' : i }</span>
      </button>,
    );
    progressBarDividers.push(
      <div
        key={ `break${i}` }
        className={ styles.progress_break }
      />,
    );
  }

  progressBarDividers.push( <div
    key="gutter2"
    className={ `${styles.progress_step_gutter} ${styles.progress_step_gutter_end}` }
  /> );

  return (
    <nav>
      <li className={ styles.progress_bar }>
        {
          progressBarDividers
        }
      </li>
    </nav>
  );
}
