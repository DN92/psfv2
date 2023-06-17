import AnswerFieldWrapper from './AnswerFieldWrapper';
import QuestionField from './QuestionField';
import { QuestionObject } from '../_data/questions';

type ComponentProps = {
  question: QuestionObject,
};

export default function QuestionSlide({ question }: ComponentProps): JSX.Element {

  return (
    <>
      <QuestionField question={question} />
      <AnswerFieldWrapper question={question} />
    </>
  );
}
