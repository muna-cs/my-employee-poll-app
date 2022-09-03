import {Container} from 'react-bootstrap';
import Login from './Login'
import Dashboard from './Dashboard';
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading-bar";
import { Route, Routes } from "react-router-dom";
import { useEffect, Fragment } from "react";
import Poll from './Poll';
import NewPoll from './NewPoll';
import Leaderboard from './Leaderboard';
import React from 'react'
import NavMenu from "./NavMenu";
import Page404 from './Page404';
const App = (props) => 
{
  useEffect(() => {
    props.dispatch(handleInitialData())
  }, []);

  return (
    <Fragment>
    <LoadingBar />
    {props.IsAuthed?
    <NavMenu user={props.authedUser} ></NavMenu>:""
}
  <Container className="h-100" fluid>
    <Routes>
      <Route exact path="/" element={props.IsAuthed? <Dashboard />:<Login/>} />
       <Route path="/question/:id" element={props.IsAuthed?<Poll />:<Login/>} />
        <Route path="/new" element={props.IsAuthed?<NewPoll />:<Login/>} /> 
         <Route path="/leaderboard" element={props.IsAuthed?<Leaderboard />:<Login/>} /> 
         <Route path='/404'  element={props.IsAuthed?<Page404 />:<Login/>} />
     </Routes>
    </Container>
    </Fragment>
  );
}
const mapStateToProps = ({ authedUser,users }) => ({
    authedUser:users[authedUser],
  IsAuthed: authedUser !== null,
  loading: authedUser === null,
});
export default connect(mapStateToProps)(App);