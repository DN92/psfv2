'use client';

import { Dispatch, SetStateAction, ChangeEvent } from 'react';
import { QuestionObject } from '../_data/questions';
import styles from './applySubcomponents.module.css';

type TextChangeEvents = ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>;

type ComponentProps = {
  question: QuestionObject,
  currentState: string | number | Array<string> | Array<number> | null,
  setterFunction:Dispatch<SetStateAction<string | number | string[] | number[] | null>>
};

const AnswerField = ({
  question,
  currentState,
  setterFunction,
}: ComponentProps): JSX.Element => {

  const classNamesForAnswerFieldFromProps = question.options?.classNames?.answerField?.join(' ') ?? '';

  function inputChangeHandler(e: TextChangeEvents): void {
    setterFunction(e.target.value);
  }

  function multipleOptionChangeHandler(e:ChangeEvent<HTMLInputElement>, choice: string): void {

    if (!Array.isArray(currentState)) return;
    const isSelected = currentState.includes(choice);
    if (isSelected) {
      setterFunction((prev) => [...prev].filter((element) => element !== choice));
    } else {
      setterFunction((prev) => ([...prev, choice]));
    }
  }

  return ((): JSX.Element => {
    switch (question.type) {
      case 'text': {
        return (
          <div className={`${classNamesForAnswerFieldFromProps} ${styles.text_wrapper}`}>
            <input
              type="text"
              className={styles.text_input}
              value={currentState as string | number}
              onChange={inputChangeHandler}
              required={question.required}
            />
          </div>
        );
      }
      case 'textarea': {
        return (
          <div className={`${classNamesForAnswerFieldFromProps} ${styles.text_wrapper}`}>
            <textarea
              className={styles.textarea_input}
              value={currentState as string | number}
              onChange={(e):void => inputChangeHandler(e)}
              required={question.required}
            />

          </div>
        );
      }
      case 'radio': {
        const choices = question.options?.selectValues?.map((choice, idx) => {
          return (
            <div key={`${choice}${idx}`} className={`${classNamesForAnswerFieldFromProps} ${styles.radio_wrapper}`}>
              <input
                id={`${idx}${choice}`}
                className={styles.radio_input}
                type="radio"
                name="choice"
                value={choice}
                checked={currentState === choice}
                onChange={(e): void => inputChangeHandler(e)}
                required={question.required}
              />
              <label className={styles.radio_label} htmlFor={`${idx}${choice}`}>{choice}</label>
            </div>
          );
        }) ?? <span>bug0001</span>;
        return (
          <div className={classNamesForAnswerFieldFromProps}>
            {choices}
          </div>
        );
      }
      case 'checkbox': {
        const choices = question.options?.checkBoxValues?.map((choice, idx: number) => {
          return (
            <div key={`${choice}${idx}`} className={`${classNamesForAnswerFieldFromProps} ${styles.checkbox_wrapper}`}>
              <input
                id={`${idx}${choice}`}
                className={styles.checkbox_input}
                type="checkbox"
                name="choice"
                value={idx}
                checked={
                  Array.isArray(currentState) && currentState.includes(choice)
                }
                onChange={(e):void => multipleOptionChangeHandler(e, choice)}
              />
              <label className={styles.checkbox_label} htmlFor={`${choice}${idx}`}>{choice}</label>
            </div>
          );
        }) ?? <span>bug0002</span>;
        return (
          <div className={classNamesForAnswerFieldFromProps}>
            {choices}
          </div>
        );
      }
      default:
        return <div>something went wrong</div>;
    }
  })();
};

export default AnswerField;
