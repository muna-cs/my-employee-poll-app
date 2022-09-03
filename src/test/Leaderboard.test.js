import * as React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
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
var component =  render(
    <Provider store={store}>
<Router>
<Leaderboard/>
   </Router>
   </Provider>
    );
describe('Testing Leaderboard', () => {
   
    it('it will create create snapshot', () => {
        var component =  render(
            <Provider store={store}>
        <Router>
        <Leaderboard/>
           </Router>
           </Provider>
            );
            expect(component).toMatchSnapshot();
        });

        it('it will verify if expected user list is exist', () => {
            var component =  render(
                <Provider store={store}>
            <Router>
            <Leaderboard/>
               </Router>
               </Provider>
                );
            var UserList = component.getByTestId('UserList')
            expect(UserList).toBeInTheDocument();
           
            
    
             });

    });
