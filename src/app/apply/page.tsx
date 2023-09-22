'use client';

import { useState } from 'react';
import ProgressBar from './_apply_subcomponents/progressBar';
import StepZero from './_apply_subcomponents/_form_steps/StepZero';
import StepOne from './_apply_subcomponents/_form_steps/StepOne';
import StepTwo from './_apply_subcomponents/_form_steps/StepTwo';
import StepThree from './_apply_subcomponents/_form_steps/StepThree';
import StepFour from './_apply_subcomponents/_form_steps/StepFour';
import StepFive from './_apply_subcomponents/_form_steps/StepFive';
import StepSix from './_apply_subcomponents/_form_steps/StepSix';
import StepAllergies from './_apply_subcomponents/_form_steps/StepAllergies';
import StepSocialMedeia from './_apply_subcomponents/_form_steps/StepSocialMedia';

export default function Apply():JSX.Element {

  const [currentStep, setCurrentStep] = useState<number>( 0 );
  const [previousStep, setPreviousStep] = useState<number>( 0 );
  const [userStartedForm, setUserStartedForm] = useState( true );

  function updateStepState( nextState:number ):void {
    setPreviousStep( currentStep );
    setCurrentStep( nextState );
  }

  const allSteps = [
    <StepZero key="landing" />,
    <StepOne key="one" />,
    <StepTwo key="two" />,
    <StepThree key="three" />,
    <StepFour key="four" />,
    <StepFive key="five" />,
    <StepSix key="six" />,
    <StepAllergies key="allergies" />,
    <StepSocialMedeia key="sm" />,
  ];

  return (
    <div>
      <ProgressBar
        currentStep={currentStep}
        updateStepState={updateStepState}
        userStartedForm={userStartedForm}
        slots={8}
      />
      <div className="QUESTIONS_WRAPPER">
        {currentStep < allSteps.length && allSteps[currentStep]}
      </div>
      <div className="BUTTONS-WRAPPER">
        <button type="button">reset form</button>
        {currentStep !== 0 && (
          <button type="button" onClick={():void => { updateStepState( currentStep - 1 ); }}>back</button>
        )}
        <button type="button">next</button>
        {currentStep === 0 && (
          <button
            type="button"
            onClick={():void => { setUserStartedForm( true ); updateStepState( 1 ); }}
          >
            Begin
          </button>
        )}
      </div>
    </div>
  );
}
