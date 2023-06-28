'use client';

import { useState } from 'react';
import ProgressBar from './_apply_subcomponents/progressBar';
import StepOne from './_apply_subcomponents/StepOne';

export default function Apply():JSX.Element {

  const [currentStep, setCurrentStep] = useState<number>(0);
  const [previousStep, setPreviousStep] = useState<number>(0);
  const [userStartedForm, setUserStartedForm] = useState(true);

  function updateStepState(nextState:number):void {
    setPreviousStep(currentStep);
    setCurrentStep(nextState);
  }


  return (
    <div>
      ph appy
      <ProgressBar
        currentStep={currentStep}
        updateStepState={updateStepState}
        userStartedForm={userStartedForm}
        slots={10}
      />
      <div className="QUESTIONS_WRAPPER">
        {currentStep === 1 && <StepOne />}
      </div>
      <div className="BUTTONS-WRAPPER">
        <button type="button">reset form</button>
        {currentStep !== 0 && (
          <button type="button" onClick={():void => { updateStepState(currentStep - 1); }}>back</button>
        )}
        <button type="button">next</button>
        {currentStep === 0 && (
          <button
            type="button"
            onClick={():void => { setUserStartedForm(true); updateStepState(1); }}
          >
            Begin
          </button>
        )}
      </div>
    </div>
  );
}
