export default function QuestionWrapper( { children }:{ children: React.ReactNode } ):JSX.Element {

  return (
    <div className="">
      question wrapper
      {children}
    </div>
  );
}
