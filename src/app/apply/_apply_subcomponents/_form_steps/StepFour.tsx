'use client';

import useLocalStorage from '@/lib/hooks/useLocalStorage';
import QuestionWrapper from '../QuestionWrapper';

export default function StepFour():JSX.Element {

  const [peopleCount, setPeopleCount] = useLocalStorage('peopleCount', '');
  const [homeOwnership, setHomeOwnership] = useLocalStorage('homeOwnership', '');
  const [allowPets, setAllowPets] = useLocalStorage('allowPets', '');
  const [petRestrictions, setPetRestrictions] = useLocalStorage('petRestrictions', '');
  const [smoking, setSmoking] = useLocalStorage('smoking', '');
  const [otherPets, setOtherPets] = useLocalStorage('otherPets', '');

  return (
    <QuestionWrapper>
      <h3>Household</h3>
      <form>
        <label>
          How many people currently live in your household?
          <input
            type="number"
            value={peopleCount}
            onChange={(e):void => setPeopleCount(e.target.value)}
            required
          />
        </label>

        <label>
          Do you own or rent your home?
          <select
            value={homeOwnership}
            onChange={(e):void => setHomeOwnership(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="own">Own</option>
            <option value="rent">Rent</option>
          </select>
        </label>

        <label>
          Does your landlord allow pets?
          <div>
            <label>
              <input
                type="checkbox"
                value="yes"
                checked={allowPets === 'yes'}
                onChange={(e):void => setAllowPets(e.target.checked ? 'yes' : '')}
              />
              Yes
            </label>
            <label>
              <input
                type="checkbox"
                value="no"
                checked={allowPets === 'no'}
                onChange={(e):void => setAllowPets(e.target.checked ? 'no' : '')}
              />
              No
            </label>
          </div>
        </label>

        <label>
          Do you have any restrictions on pet ownership in your residence?
          <input
            type="checkbox"
            checked={petRestrictions === 'yes'}
            onChange={(e):void => setPetRestrictions(e.target.checked ? 'yes' : '')}
          />
          Yes
        </label>

        <label>
          Do you or anyone in your household smoke?
          <div>
            <label>
              <input
                type="checkbox"
                value="yes"
                checked={smoking === 'yes'}
                onChange={(e):void => setSmoking(e.target.checked ? 'yes' : '')}
              />
              Yes
            </label>
            <label>
              <input
                type="checkbox"
                value="no"
                checked={smoking === 'no'}
                onChange={(e):void => setSmoking(e.target.checked ? 'no' : '')}
              />
              No
            </label>
          </div>
        </label>

        <label>
          Do you currently have any other pets? If yes, please provide details.
          <textarea
            value={otherPets}
            onChange={(e):void => setOtherPets(e.target.value)}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </QuestionWrapper>
  );
}
