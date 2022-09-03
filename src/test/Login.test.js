import Login from '../components/Login' 
import * as React from 'react';
import { render ,fireEvent} from '@testing-library/react';
import { MemoryRouter as Router,BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import authedUser from '../reducers/authedUser';
import users from '../reducers/users';
import questions from '../reducers/questions';
import logger from '../middleware/logger';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    authedUser,
    users,
    questions
  },
  middleware: [thunk, logger]
});
 



describe('Login', () => {
    var component =  render(
        <Provider store={store}>
    <Router>
       <Login/></Router>
       </Provider>
        );
   
        it('will create create snapshot', () => {
       
            expect(component).toMatchSnapshot();
        });
    });


    it('will display an error when expected fields not exist', () => {
        var component =  render(
            <Provider store={store}>
        <Router>
           <Login/></Router>
           </Provider>
            );
        var usernameInput = component.getByTestId('UserName')
        var passwordInput = component.getByTestId('Password')
        expect(usernameInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();

        var LoginButton = component.getByText('Login')
        expect(LoginButton).toBeInTheDocument();
        

         });

         it('will display an alert if username or password is wrong', () => {
            var component =  render(
                <Provider store={store}>
            <Router>
               <Login/></Router>
               </Provider>
                );
    
              
            var LoginButton = component.getByTestId('LoginButton');
            fireEvent.click(LoginButton);
            expect(component.getByTestId('ErrorAlert')).toBeInTheDocument();
        });