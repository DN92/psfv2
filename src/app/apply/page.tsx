import testQuestions from './_data/questions';
import QuestionSlide from './_components/QuestionSlide';

export default function Apply(): JSX.Element {

  return (
    <>
      {/* {testQuestions.map((question, idx) => {
        return (
          <div key={`${idx}${question.question}`}>
            <QuestionSlide question={question} />
          </div>
        );
      })} */}
      <QuestionSlide question={testQuestions[0]} />
    </>
  );
}
