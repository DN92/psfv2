'use client';

import useLocalStorage from '@/lib/hooks/useLocalStorage';
import QuestionWrapper from '../QuestionWrapper';

export default function StepSocialMedeia():JSX.Element {
  const [heardAbout, setHeardAbout] = useLocalStorage('heardAbout', '');
  const [reason, setReason] = useLocalStorage('reason', '');
  const [instagram, setInstagram] = useLocalStorage('instagram', '');
  const [facebook, setFacebook] = useLocalStorage('facebook', '');

  return (
    <QuestionWrapper>
      <h3>Socail Media</h3>
      <form>
        <div>
          <label htmlFor="heard-about">How did you hear about Planet Scottish Fold?</label>
          <select
            id="heard-about"
            value={heardAbout}
            onChange={(e):void => setHeardAbout(e.target.value)}
            required
          >
            {/* Options */}
          </select>
        </div>

        <div>
          <label htmlFor="reason">Why do you want a kitten from Planet Scottish Fold?</label>
          <textarea
            id="reason"
            value={reason}
            onChange={(e):void => setReason(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="instagram">Instagram:</label>
          <input
            type="text"
            id="instagram"
            value={instagram}
            onChange={(e):void => setInstagram(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="facebook">Facebook:</label>
          <input
            type="text"
            id="facebook"
            value={facebook}
            onChange={(e):void => setFacebook(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </QuestionWrapper>
  );
}
