'use client';

import { useState } from 'react';
import { QuestionObject } from '../_data/questions';
import AnswerField from './AnswerField';


type ComponentProps = {
  question: QuestionObject,
};

const AnswerFieldWrapper = ({ question }: ComponentProps): JSX.Element => {

  function answerValueDefaultValue(question: QuestionObject): string | number | null | Array<string> | Array<number> {
    switch (question.answerType) {
      case 'string':
        return '';
      case 'number':
        return 0;
      case 'stringArray': {
        const stringArray: Array<string> = [];
        return stringArray;
      }
      case 'numberArray': {
        const numArray: Array<number> = [];
        return numArray;
      }
      default:
        return null;
    }
  }

  const [answerValue, setAnswerValue] = useState(answerValueDefaultValue(question));

  return (
    <AnswerField
      question={question}
      currentState={answerValue}
      setterFunction={setAnswerValue}
    />
  );
};

export default AnswerFieldWrapper;
