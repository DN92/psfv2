'use client';

import { useState, useEffect, ChangeEventHandler } from 'react';
import { QuestionObject } from '../_data/questions';
import AnswerField from './AnswerField';


type ComponentProps = {
  question: QuestionObject,
};

const AnswerFieldWrapper = ({ question }: ComponentProps): JSX.Element => {

  function answerValueDefaultValue(question: QuestionObject): string | number | null {
    switch (question.answerType) {
      case 'string':
        return '';
      case 'number':
        return 0;
      default:
        return null;
    }
  }

  const [answerValue, setAnswerValue] = useState<string | number | null>(answerValueDefaultValue(question));

  return (
    <AnswerField
      question={question}
      value={answerValue ?? ''}
      setterFunction={setAnswerValue}
    />
  );
};

export default AnswerFieldWrapper;
