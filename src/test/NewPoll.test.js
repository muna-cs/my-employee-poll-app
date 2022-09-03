import * as React from 'react';
import { render ,fireEvent} from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import authedUser from '../reducers/authedUser';
import users from '../reducers/users';
import questions from '../reducers/questions';
import logger from '../middleware/logger';
import thunk from 'redux-thunk';
import NewPoll from '../components/NewPoll';

export const store = configureStore({
  reducer: {
    authedUser,
    users,
    questions
  },
  middleware: [thunk, logger]
});

describe('Testing NewPoll', () => {
    
   
        it('it will verify if fields are exist', () => {
            var component =  render(
                <Provider store={store}>
            <Router>
            <NewPoll/>
               </Router>
               </Provider>
                );
             expect(component.getByTestId('SubmitButton')).toBeInTheDocument();
            expect(component.getByTestId('op1input')).toBeInTheDocument();
            expect(component.getByTestId('op2input')).toBeInTheDocument();
    
             });

    });
