import { connect } from "react-redux";
import {  useNavigate } from "react-router-dom";
import NavMenu from "./NavMenu";
import React from 'react'
import {Button, Row,Col,Container,Form} from 'react-bootstrap';
import { handleAddQuestion } from "../actions/questions";
const NewPoll= (props) =>{
    let navigate = useNavigate();

    const AddQuestion = (e) => {
        e.preventDefault();
        const op1= document.getElementById("op1txt").value;
        const op2= document.getElementById("op2txt").value;
        props.dispatch(handleAddQuestion(props.authedUser,op1,op2));
        navigate("/");
    }  
return(
<Container className=" bg-light p-5">

    <Row className="text-center mt-3">
        <Col>
        <h2 className="text-primary">Create New Poll</h2>
        <hr/>
        <h3>Would You Rather?</h3>
        </Col>
    </Row>
    <Row>
        <Col>
        <Form>
      <Form.Group className="mb-3" >
        <Form.Label className="mt-3"><h4>Option One</h4></Form.Label>
        <Form.Control id="op1txt" as="textarea" data-testid="op2input" rows={3} placeholder="Enter Option One" />
       
        <Form.Label className="mt-3"><h4>Option Two</h4></Form.Label>
        <Form.Control id="op2txt" as="textarea" data-testid="op1input" rows={3} placeholder="Enter Option Two" />
      </Form.Group>
      
      <Button variant="primary" onClick={AddQuestion} data-testid="SubmitButton">
        Submit
      </Button>
    </Form>
        </Col>
    </Row>


</Container>
);

}
const mapStateToProps = ({authedUser }) => {
    return({
        authedUser:authedUser,
    });
}
export default connect(mapStateToProps)(NewPoll);