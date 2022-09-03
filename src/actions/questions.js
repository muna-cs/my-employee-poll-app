import {saveNewQuestion, saveNewQuestionAnswer }from '../utils/api'
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { saveAnswer , saveQuestion } from './users';
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_ANSWER = "ADD_ANSWER";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function addAnswer(authedUser,qid,answer) {
  return {
    type: ADD_ANSWER,
    authedUser, qid, answer
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question, 
  };
}

export function handleAddAnswer(authedUser,qid,answer) {
  return (dispatch) => {
    dispatch(addAnswer(authedUser, qid, answer));
    dispatch(saveAnswer(authedUser, qid, answer));
    return saveNewQuestionAnswer({authedUser:authedUser, qid, answer})
    .catch((e) => {
      console.warn("Error in Add Answer: ", e);
      dispatch(addAnswer(authedUser, qid, answer));
      dispatch(saveAnswer(authedUser, qid, answer));
    });
       
      
};
}


export function handleAddQuestion(authedUser,optionOneText,optionTwoText) {
  return (dispatch) => {
    dispatch(showLoading());
    return saveNewQuestion({ optionOneText, optionTwoText,author:authedUser})
       .then((q) => {
       dispatch(addQuestion(q));
       dispatch(saveQuestion(q));
        }).then(() => dispatch(hideLoading()));
};
}