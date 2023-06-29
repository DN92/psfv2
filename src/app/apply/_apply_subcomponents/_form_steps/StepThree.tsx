'use client';

import useLocalStorage from '@/lib/hooks/useLocalStorage';
import QuestionWrapper from '../QuestionWrapper';

export default function StepThree():JSX.Element {
  const [occupation, setOccupation] = useLocalStorage('occupation', '');
  const [lifestyle, setLifestyle] = useLocalStorage('lifestyle', '');
  const [timeDedication, setTimeDedication] = useLocalStorage('timeDedication', '');
  const [veterinaryCare, setVeterinaryCare] = useLocalStorage('veterinaryCare', 'false');
  const [breedingPlan, setBreedingPlan] = useLocalStorage('breedingPlan', 'false');

  return (
    <QuestionWrapper>
      <h3>LifeStyle</h3>
      <form>
        <div>
          <label htmlFor="occupation">What is your occupation or profession?</label>
          <input
            type="text"
            id="occupation"
            value={occupation}
            onChange={(e):void => setOccupation(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lifestyle">Describe your lifestyle and work schedule.</label>
          <textarea
            id="lifestyle"
            value={lifestyle}
            onChange={(e):void => setLifestyle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="timeDedication">How much time can you dedicate to a kitten?</label>
          <input
            type="text"
            id="timeDedication"
            value={timeDedication}
            onChange={(e):void => setTimeDedication(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="veterinaryCare">
            Are you committed to providing proper veterinary care, including vaccinations and regular check-ups?
          </label>
          <input
            type="checkbox"
            id="veterinaryCare"
            checked={veterinaryCare === 'true'}
            onChange={(e):void => setVeterinaryCare(e.target.checked.toString())}
          />
          <label htmlFor="veterinaryCare">Yes</label>
        </div>
        <div>
          <label htmlFor="breedingPlan">Are you planning on breeding this kitten?</label>
          <input
            type="radio"
            id="breedingPlanYes"
            name="breedingPlan"
            value="yes"
            checked={breedingPlan === 'true'}
            onChange={():void => setBreedingPlan('true')}
          />
          <label htmlFor="breedingPlanYes">Yes</label>
          <input
            type="radio"
            id="breedingPlanNo"
            name="breedingPlan"
            value="no"
            checked={breedingPlan === 'false'}
            onChange={():void => setBreedingPlan('false')}
          />
          <label htmlFor="breedingPlanNo">No</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </QuestionWrapper>
  );
}
