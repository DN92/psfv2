import { QuestionObject } from '../_data/questions';
import styles from './applySubcomponents.module.css';

type ComponentProps = {
  question: QuestionObject
};

const QuestionField = ({ question }: ComponentProps): JSX.Element => {

  const classNamesForQuestionFieldFromProps = question.options?.classNames?.questionField?.join('') ?? '';

  return (
    <div className={`${classNamesForQuestionFieldFromProps} ${styles.question_wrapper}`}>
      <span>
        {question.question}
      </span>
    </div>
  );
};

export default QuestionField;
