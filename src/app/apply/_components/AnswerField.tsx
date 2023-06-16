import { ChangeEventHandler, Dispatch, SetStateAction } from 'react';
import { QuestionObject } from '../_data/questions';

type ComponentProps = {
  question: QuestionObject,
  value: string | number,
  setterFunction: Dispatch<SetStateAction<string | number | null>>
};

const question1: QuestionObject = {
  question: 'Your email',
  answerType: 'string',
  type: 'input',
  subType: 'text',
  required: true,
  options: {

  },
  validation: {
    email: true,
  },
  beforeHooks: [
    'trim',
    'lowercase',
  ],
  afterHooks: [
    'unique',
  ],
};

const AnswerField = ({
  question = question1,
  value,
  setterFunction,
}: ComponentProps): JSX.Element => {

  question.options = question.options ?? {};

  question.options.classNames = question.options?.classNames ?? [];

  return ((): JSX.Element => {
    switch (question.type) {
      case 'input':
        return (
          <input
            type={question.subType}
            className={question.options.classNames.join(' ')}
            value={value}
            onChange={(e): void => { setterFunction(e.target.value); }}
          />
        );
      default:
        return <div>something went wrong</div>;
    }
  })();
};

export default AnswerField;
