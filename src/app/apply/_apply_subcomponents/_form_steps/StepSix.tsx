'use client';

import useLocalStorage from '@/lib/hooks/useLocalStorage';
import QuestionWrapper from '../QuestionWrapper';

export default function StepSix():JSX.Element {
  const [traits, setTraits] = useLocalStorage('traits', '');
  const [timing, setTiming] = useLocalStorage('timing', '');
  const [specificKitten, setSpecificKitten] = useLocalStorage('specificKitten', '');

  return (
    <QuestionWrapper>
      <h3>What am I looking for</h3>
      <form>
        <div>
          <p>Which of the following traits is most important to you when choosing a kitten?</p>
          <label>
            Health
            <input
              type="checkbox"
              value="Health"
              checked={traits === 'Health'}
              onChange={(e):void => {
                if (e.target.checked) {
                  setTraits('Health');
                } else {
                  setTraits('');
                }
              }}
            />
          </label>
          <label>
            Personality
            <input
              type="checkbox"
              value="Personality"
              checked={traits === 'Personality'}
              onChange={(e):void => {
                if (e.target.checked) {
                  setTraits('Personality');
                } else {
                  setTraits('');
                }
              }}
            />
          </label>
          <label>
            Appearance
            <input
              type="checkbox"
              value="Appearance"
              checked={traits === 'Appearance'}
              onChange={(e):void => {
                if (e.target.checked) {
                  setTraits('Appearance');
                } else {
                  setTraits('');
                }
              }}
            />
          </label>
          <label>
            Show Quality
            <input
              type="checkbox"
              value="Show Quality"
              checked={traits === 'Show Quality'}
              onChange={(e):void => {
                if (e.target.checked) {
                  setTraits('Show Quality');
                } else {
                  setTraits('');
                }
              }}
            />
          </label>
        </div>

        <div>
          <label>
            <input
              type="radio"
              name="timing"
              value="Immediately"
              checked={timing === 'Immediately'}
              onChange={(e):void => {
                if (e.target.checked) {
                  setTiming('Immediately');
                }
              }}
            />
            Immediately
          </label>
          <label>
            <input
              type="radio"
              name="timing"
              value="In a few weeks"
              checked={timing === 'In a few weeks'}
              onChange={(e):void => {
                if (e.target.checked) {
                  setTiming('In a few weeks');
                }
              }}
            />
            In a few weeks
          </label>
          <label>
            <input
              type="radio"
              name="timing"
              value="In a few months"
              checked={timing === 'In a few months'}
              onChange={(e):void => {
                if (e.target.checked) {
                  setTiming('In a few months');
                }
              }}
            />
            In a few months
          </label>
        </div>

        <div>
          <p>Do you have a specific kitten in mind from our available litters? If yes, please provide details:</p>
          <textarea value={specificKitten} onChange={(e):void => setSpecificKitten(e.target.value)} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </QuestionWrapper>
  );
}
