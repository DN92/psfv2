import useLocalStorage from '@/lib/hooks/useLocalStorage';
import QuestionWrapper from '../QuestionWrapper';

export default function StepAllergies():JSX.Element {

  const [allergicToCats, setAllergicToCats] = useLocalStorage( 'allergicToCats', '' );
  const [otherAllergies, setOtherAllergies] = useLocalStorage( 'otherAllergies', '' );
  const [allergyDetails, setAllergyDetails] = useLocalStorage( 'allergyDetails', '' );

  return (
    <QuestionWrapper>
      <h3>Allergies</h3>
      <form>
        <div>
          <label>
            Are you or any members of your household allergic to cats?
            <label>
              <input
                type="radio"
                name="allergicToCats"
                value="yes"
                checked={ allergicToCats === 'yes' }
                onChange={ ():void => setAllergicToCats( 'yes' ) }
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="allergicToCats"
                value="no"
                checked={ !allergicToCats }
                onChange={ ():void => setAllergicToCats( 'no' ) }
              />
              No
            </label>
          </label>
        </div>

        <div>
          <label>
            Do you have any known allergies to other animals or environmental allergens?
            <label>
              <input
                type="radio"
                name="otherAllergies"
                value="yes"
                checked={ otherAllergies === 'yes' }
                onChange={ ():void => setOtherAllergies( 'yes' ) }
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="otherAllergies"
                value="no"
                checked={ otherAllergies === 'no' }
                onChange={ ():void => setOtherAllergies( 'yes' ) }
              />
              No
            </label>
          </label>
        </div>

        { otherAllergies && (
          <div>
            <label htmlFor="allergyDetails">Please provide a few details regarding the allergies:</label>
            <textarea
              id="allergyDetails"
              value={ allergyDetails }
              onChange={ ( e ):void => setAllergyDetails( e.target.value ) }
            />
          </div>
        ) }

        <button type="submit">Submit</button>
      </form>
    </QuestionWrapper>
  );
}
