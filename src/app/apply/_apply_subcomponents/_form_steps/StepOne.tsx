'use client';

import useLocalStorage from '@/lib/hooks/useLocalStorage';
import QuestionWrapper from '../QuestionWrapper';

export default function StepOne():JSX.Element {

  const [fullName, setFullName] = useLocalStorage( 'fullName', '' );
  const [email, setEmail] = useLocalStorage( 'email', '' );
  const [phoneNumber, setPhoneNumber] = useLocalStorage( 'phoneNumber', '' );
  const [residence, setResidence] = useLocalStorage( 'residence', '' );
  const [age, setAge] = useLocalStorage( 'age', '' );

  return (
    <QuestionWrapper>
      <h3>Contact Information</h3>
      <form>
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={ fullName }
            onChange={ ( e ):void => setFullName( e.target.value ) }
          />
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            value={ email }
            onChange={ ( e ):void => setEmail( e.target.value ) }
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={ phoneNumber }
            onChange={ ( e ):void => setPhoneNumber( e.target.value ) }
          />
        </div>
        <div>
          <label htmlFor="residence">City, State of Residence:</label>
          <input
            type="text"
            id="residence"
            value={ residence }
            onChange={ ( e ):void => setResidence( e.target.value ) }
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            id="age"
            value={ age }
            onChange={ ( e ):void => setAge( e.target.value ) }
          />
        </div>
      </form>
    </QuestionWrapper>
  );
}
