import {
   _getUsers,
   _getQuestions,
   _saveQuestion,
   _saveQuestionAnswer
  } from './_DATA'
  
  export function getInitialData () {
    return Promise.all([
      _getUsers(),
      _getQuestions(),
    ]).then(([users, questions]) => ({
      users,
      questions,
    }))
  }

    
  export function getInitialUserData () {
    return Promise.all([
      _getUsers(),
    ]).then(([users]) => ({
      users,
    }))
  }

  export function saveNewQuestionAnswer (info) {
    return _saveQuestionAnswer(info)
  }
  
  export function saveNewQuestion (info) {
    return _saveQuestion(info)
  }