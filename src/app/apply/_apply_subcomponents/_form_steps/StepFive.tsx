'use client';

import useLocalStorage from '@/lib/hooks/useLocalStorage';
import QuestionWrapper from '../QuestionWrapper';

export default function StepFive():JSX.Element {
  const [ownedCats, setOwnedCats] = useLocalStorage('ownedCats', '');
  const [rehomeDetails, setRehomeDetails] = useLocalStorage('rehomeDetails', '');
  const [declawOption, setDeclawOption] = useLocalStorage('declawOption', '');
  const [careDetails, setCareDetails] = useLocalStorage('careDetails', '');

  return (

    <QuestionWrapper>
      <h3>Past Pets and Future Expectations</h3>
      <form>
        <div>
          <label htmlFor="ownedCats">Have you owned cats before? If yes, please provide details about your past and current pets</label>
          <textarea
            id="ownedCats"
            value={ownedCats}
            onChange={(e):void => setOwnedCats(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="rehomeDetails">Have you ever had to rehome or give up an animal to a shelter, a friend, or a breeder? If yes, please provide details on the circumstances surrounding the decision.</label>
          <textarea
            id="rehomeDetails"
            value={rehomeDetails}
            onChange={(e):void => setRehomeDetails(e.target.value)}
          />
        </div>

        <div>
          <label>Would you ever consider declawing a cat? Please select one option</label>
          <div>
            <input
              type="radio"
              id="declawOptionYes"
              value="Yes, I would consider declawing a cat."
              checked={declawOption === 'Yes, I would consider declawing a cat.'}
              onChange={(e):void => setDeclawOption(e.target.value)}
            />
            <label htmlFor="declawOptionYes">Yes</label>
          </div>
          <div>
            <input
              type="radio"
              id="declawOptionNo"
              value="No, I would not consider declawing a cat."
              checked={declawOption === 'No, I would not consider declawing a cat.'}
              onChange={(e):void => setDeclawOption(e.target.value)}
            />
            <label htmlFor="declawOptionNo">No</label>
          </div>
          <div>
            <input
              type="radio"
              id="declawOptionUnsure"
              value="I’m not sure, I would like more information about it."
              checked={declawOption === 'I’m not sure, I would like more information about it.'}
              onChange={(e):void => setDeclawOption(e.target.value)}
            />
            <label htmlFor="declawOptionUnsure">I am not sure</label>
          </div>
        </div>

        <div>
          <label htmlFor="careDetails">Do you have trustworthy individuals who can care for the kitten when you are away or traveling? Please provide details.</label>
          <textarea
            id="careDetails"
            value={careDetails}
            onChange={(e):void => setCareDetails(e.target.value)}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </QuestionWrapper>
  );
}
