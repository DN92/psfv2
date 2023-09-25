'use client';

import useLocalStorage from '@/lib/hooks/useLocalStorage';
import QuestionWrapper from '../QuestionWrapper';

export default function StepTwo():JSX.Element {

  const [gender, setGender] = useLocalStorage( 'gender', 'No Preference' );
  const [coatColors, setCoatColors] = useLocalStorage( 'coatColors', '' );
  const [earType, setEarType] = useLocalStorage( 'earType', 'No Preference' );

  return (
    <QuestionWrapper>
      <h3>Kitten Preferences</h3>
      <form>
        <div>
          <label>
            Preferred Gender:
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={ gender === 'Male' }
                onChange={ ( e ): void => setGender( e.target.value ) }
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={ gender === 'Female' }
                onChange={ ( e ): void => setGender( e.target.value ) }
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="No Preference"
                checked={ gender === 'No Preference' }
                onChange={ ( e ): void => setGender( e.target.value ) }
              />
              No Preference
            </label>
          </label>
        </div>
        <div>
          <label htmlFor="coatColors">Preferred Coat Color(s):</label>
          <textarea
            id="coatColors"
            value={ coatColors }
            onChange={ ( e ): void => setCoatColors( e.target.value ) }
          />
        </div>
        <div>
          <label>
            Preferred Ear Type:
            <label>
              <input
                type="radio"
                name="earType"
                value="Folded"
                checked={ earType === 'Folded' }
                onChange={ ( e ): void => setEarType( e.target.value ) }
              />
              Folded
            </label>
            <label>
              <input
                type="radio"
                name="earType"
                value="Straight"
                checked={ earType === 'Straight' }
                onChange={ ( e ): void => setEarType( e.target.value ) }
              />
              Straight
            </label>
            <label>
              <input
                type="radio"
                name="earType"
                value="No Preference"
                checked={ earType === 'No Preference' }
                onChange={ ( e ): void => setEarType( e.target.value ) }
              />
              No Preference
            </label>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </QuestionWrapper>
  );
}
