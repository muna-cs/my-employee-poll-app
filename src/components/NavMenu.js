import {Navbar,Nav,Container,Image, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser';
import { connect } from "react-redux";
import React from 'react'
const NavMenu =(props) =>{
const logout= (e)=>
{
  e.preventDefault();
  props.dispatch(setAuthedUser(null));
}

return(

    <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="/"><h4>Employee Poll</h4></Navbar.Brand>
      <Nav className="me-auto">
       <Link className='nav-link me-4 ' to="/">Home</Link>
        <Link className='nav-link me-4' to="/new">New Poll</Link>
        <Link className='nav-link me-4' to="/leaderboard">Leadboard</Link>
      </Nav>
      <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='text-light'>
            Signed in as:  <Image src={props.user.avatarURL} width='50' alt="Logo" />
             <b> {props.user.id}</b>
             <Button variant='danger' onClick={logout} >Logout</Button>
          </Navbar.Text>
        </Navbar.Collapse>
    </Container>
  </Navbar>
)

}
const mapStateToProps = ({ authedUser,users }) => ({
  IsAuthed: authedUser !== null,
  user: users[authedUser]
});

export default  connect(mapStateToProps)(NavMenu);