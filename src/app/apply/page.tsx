'use client';

import { useState } from 'react';
import ProgressBar from './_apply_subcomponents/progressBar';
import StepZero from './_apply_subcomponents/_form_steps/StepZero';
import StepOne from './_apply_subcomponents/_form_steps/StepOne';
import StepTwo from './_apply_subcomponents/_form_steps/StepTwo';
import StepThree from './_apply_subcomponents/_form_steps/StepThree';
import StepFour from './_apply_subcomponents/_form_steps/StepFour';
import StepFive from './_apply_subcomponents/_form_steps/StepFive';

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
      <ProgressBar
        currentStep={currentStep}
        updateStepState={updateStepState}
        userStartedForm={userStartedForm}
        slots={10}
      />
      <div className="QUESTIONS_WRAPPER">

        {currentStep === 0 && <StepZero />}
        {currentStep === 1 && <StepOne />}
        {currentStep === 2 && <StepTwo />}
        {currentStep === 3 && <StepThree />}
        {currentStep === 4 && <StepFour />}
        {currentStep === 5 && <StepFive />}
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
