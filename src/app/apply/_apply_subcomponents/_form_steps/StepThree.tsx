'use client';

import useLocalStorage from '@/lib/hooks/useLocalStorage';
import { ChangeEvent } from 'react';
import QuestionWrapper from '../QuestionWrapper';

export default function StepSix(): JSX.Element {
  const [traits, setTraits] = useLocalStorage('traits', '');
  const [timing, setTiming] = useLocalStorage('timing', '');
  const [specificKitten, setSpecificKitten] = useLocalStorage('specificKitten', '');

  const handleTraitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setTraits(value);
  };

  const handleTimingChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTiming(event.target.value);
  };

  const handleSpecificKittenChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setSpecificKitten(event.target.value);
  };

  return (
    <QuestionWrapper>
      <h3>What am I looking for</h3>
      <form>
        <div>
          <p>Which of the following traits is most important to you when choosing a kitten?</p>
          <label>
            Health
            <input
              type="radio"
              value="Health"
              checked={traits === 'Health'}
              onChange={handleTraitChange}
            />
          </label>
          <label>
            Personality
            <input
              type="radio"
              value="Personality"
              checked={traits === 'Personality'}
              onChange={handleTraitChange}
            />
          </label>
          <label>
            Appearance
            <input
              type="radio"
              value="Appearance"
              checked={traits === 'Appearance'}
              onChange={handleTraitChange}
            />
          </label>
          <label>
            Show Quality
            <input
              type="radio"
              value="Show Quality"
              checked={traits === 'Show Quality'}
              onChange={handleTraitChange}
            />
          </label>
        </div>
        <div>
          <p>How soon are you looking to bring a new kitten into your home?</p>
          <label>
            <input
              type="radio"
              name="timing"
              value="Immediately"
              checked={timing === 'Immediately'}
              onChange={handleTimingChange}
            />
            Immediately
          </label>
          <label>
            <input
              type="radio"
              name="timing"
              value="In a few weeks"
              checked={timing === 'In a few weeks'}
              onChange={handleTimingChange}
            />
            In a few weeks
          </label>
          <label>
            <input
              type="radio"
              name="timing"
              value="In a few months"
              checked={timing === 'In a few months'}
              onChange={handleTimingChange}
            />
            In a few months
          </label>
        </div>

        <div>
          <p>Do you have a specific kitten in mind from our available litters? If yes, please provide details:</p>
          <textarea value={specificKitten} onChange={handleSpecificKittenChange} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </QuestionWrapper>
  );
}
