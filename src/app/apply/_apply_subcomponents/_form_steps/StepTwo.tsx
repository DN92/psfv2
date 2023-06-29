'use client';

import useLocalStorage from '@/lib/hooks/useLocalStorage';
import QuestionWrapper from '../QuestionWrapper';

export default function StepTwo():JSX.Element {

  const [gender, setGender] = useLocalStorage('gender', 'No Preference');
  const [coatColors, setCoatColors] = useLocalStorage('coatColors', '');
  const [earType, setEarType] = useLocalStorage('earType', 'No Preference');

  return (
    <QuestionWrapper>
      <h3>Kitten Preferences</h3>
      <form>
        <div>
          <label htmlFor="gender">Preferred Gender:</label>
          <select
            id="gender"
            value={gender}
            onChange={(e):void => setGender(e.target.value)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="No Preference">No Preference</option>
          </select>
        </div>
        <div>
          <label htmlFor="coatColors">Preferred Coat Color(s):</label>
          <textarea
            id="coatColors"
            value={coatColors}
            onChange={(e):void => setCoatColors(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="earType">Preferred Ear Type:</label>
          <select
            id="earType"
            value={earType}
            onChange={(e):void => setEarType(e.target.value)}
          >
            <option value="Folded">Folded</option>
            <option value="Straight">Straight</option>
            <option value="No Preference">No Preference</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </QuestionWrapper>
  );
}
