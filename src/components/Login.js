import {Button, Image, Row,Col,Alert} from 'react-bootstrap';
import { connect } from "react-redux";
import logo from '../asset/login.jpg'
import { setAuthedUser } from '../actions/authedUser';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
const Login= ( props ) =>{
 const [msgError, setMsg]= useState(false);
  let navigate = useNavigate();
  
  const handelUserLogin=(e)=> {
  e.preventDefault();
  const { dispatch } = props;
  const username= document.getElementById("UserName").value;
  const pass= document.getElementById("Password").value;
  const currentuser= props.usersInfo.filter(user=> user.id===username && user.password===pass);
  if(currentuser.length>0)
  {
  dispatch(setAuthedUser( currentuser[0].id));
  }
  else
  setMsg(true);
}

return(

    <div className='text-center m-5'>
      <h1 >LOGIN </h1>
      <Row>
      <Col sm></Col>
      <Col sm>
      <Image src={logo} alt="Logo" />
     </Col>
     <Col sm></Col>
     </Row>
     <Row>
      {msgError?
      <Alert data-testid="ErrorAlert" variant="danger">User is not Exist! Try Again</Alert>:""}
     </Row>
     <Row className="mt-3">
      <Col sm></Col>
      <Col sm>
      <label className="h4">UserName</label>
      <input
                            type="text"
                            name="UserName"
                            id="UserName"
                            className="form-control" data-testid="UserName"
                            ></input>
      </Col>
      <Col sm></Col>
     </Row>
     <Row className="mt-3">
      <Col sm></Col>
      <Col sm>
      <label className="h4">Password</label>
      <input
                            type="text"
                            name="Password"
                            id="Password"
                            className="form-control" data-testid="Password"
                            ></input>
      </Col>
      <Col sm></Col>
     </Row>
     <Row className=' mt-3'>
      <Col sm></Col>
      <Col sm><Button variant="primary" size="lg" data-testid="LoginButton"  onClick={handelUserLogin}>Login</Button></Col>
      <Col sm></Col>
      </Row>
      </div>

)

}
const mapStateToProps = ({ users }) => ({
  usersInfo: Object.values(users)
});
export default connect(mapStateToProps)(Login);