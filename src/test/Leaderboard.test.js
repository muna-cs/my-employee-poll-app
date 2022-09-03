import Login from '../components/Login' 
import * as React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router,BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import reducer from "../reducers";
import middleware from "../middleware";
import { configureStore } from '@reduxjs/toolkit';
import authedUser from '../reducers/authedUser';
import users from '../reducers/users';
import questions from '../reducers/questions';
import logger from '../middleware/logger';
import thunk from 'redux-thunk';
import Leaderboard from '../components/Leaderboard';

export const store = configureStore({
  reducer: {
    authedUser,
    users,
    questions
  },
  middleware: [thunk, logger]
});

describe('Testing snapshot', () => {
    
    it('will create create snapshot', () => {
        const component =  render(
            <Provider store={store}>
        <Router>
           <Leaderboard/>
           </Router>
           </Provider>
            );
            expect(component).toMatchSnapshot();
        });
    });