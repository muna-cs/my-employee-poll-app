import { RECEIVE_QUESTIONS, ADD_ANSWER, ADD_QUESTION } from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
      case ADD_ANSWER:
        return {
          ...state,
          [action.qid]: {
            ...state[action.qid],
            [action.answer]: {
              ...state[action.qid][action.answer],
              votes: [action.authedUser].concat(
                state[action.qid][action.answer].votes
              ),
            },
          },
        };
        case ADD_QUESTION:
          return {
            ...state,
            [action.question.id]: action.question,
          };


    default:
      return state;
  }
}