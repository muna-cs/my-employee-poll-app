import { useLocation, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import {Button, Image, Row,Col,Container,Badge,Form} from 'react-bootstrap';
import { handleAddAnswer } from "../actions/questions";
import { useState } from "react";
import Page404 from "./Page404";
import React from 'react'
const withRouter = (Component) => {
    const ComponentWithRouterProp = (props) => {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return <Component {...props} router={{ location, navigate, params }} />;
    };
  
    return ComponentWithRouterProp;
  };
  
const Poll= (props) =>{
const [answer,setAnswer]= useState(props.SelectedAnswer?props.SelectedAnswer:'');
const handleChange = (e) => {
  setAnswer(e.target.value);
};

    const AnswerQuestion = (e) => {
      e.preventDefault();
      answer?
      props.dispatch(
        handleAddAnswer(props.authedUser, props.qid, answer)
      ):alert("Select Answer!");
    };

    const calculatePercentage=(op, total)=>{
      return(Math.round((op/total)*100));
    }
    return(
        <Container className="text-center bg-light p-5">
          {props.questionsInfo?
          <Container>
       
       
        <Row className="mt-3" >
        <Col>
        <Image src={props.usersInfo.avatarURL} width='200' alt="Logo" />
        <h3 className="text-primary">{props.usersInfo.name} Ask:</h3> 
        </Col>
        </Row>
        <Row >
        <Col>
        <h1>Whould You Rather?</h1>
        </Col>
        </Row>
        <Container  className="p-5 bg-white text-dark" >

        <Row className="mt-4">
            
            <Col sm={8}>
                <Form.Check  id="op1" className="h4"
                type="radio" onChange={handleChange}
                value="optionOne"
                label={props.questionsInfo.optionOne.text}
                defaultChecked ={props.SelectedAnswer==="optionOne" || '' }
                disabled={props.IsAnswer} 
              /></Col>
              <Col>
               {props.IsAnswer?
               <Button variant="outline-secondary" > Results:  
              <Badge data-testid="result1" bg={props.Op1AnswerCount >= props.Op2AnswerCount?"success":"danger"}>
                {props.Op1AnswerCount} votes - {calculatePercentage(props.Op1AnswerCount,(props.Op1AnswerCount+props.Op2AnswerCount))}%
              </Badge></Button>:""}
              </Col>
              </Row>
              <Row className="mt-4">
               <Col sm={8}>
            <Form.Check id="op2" className="h4"
                type="radio" onChange={handleChange}
                label={props.questionsInfo.optionTwo.text}
                value="optionTwo"
                defaultChecked ={props.SelectedAnswer==="optionTwo" || ''}
                disabled={props.IsAnswer} 
              /></Col>
              <Col>
               {props.IsAnswer?
                <Button variant="outline-secondary" > Results:
              <Badge data-testid="result2" bg={props.Op2AnswerCount >= props.Op1AnswerCount?"success":"danger"}>
                {props.Op2AnswerCount} votes - {calculatePercentage(props.Op2AnswerCount,(props.Op1AnswerCount+props.Op2AnswerCount))}%
              </Badge></Button>
              :""}
            </Col>
            </Row>
            <Row>
            <div className="d-grid gap-2 mt-5">
            <Button variant="warning"  disabled={props.IsAnswer} data-testid="ClickButton"
            onClick={AnswerQuestion} size="lg" >Click</Button></div>
             </Row>
        </Container>
        </Container>
  :<Page404/>}
        </Container>
    )
  }
  const mapStateToProps = ({authedUser, users, questions },props) => {
    const { id } = props.router.params;
   
    const IsAnswer=  questions[id]?users[authedUser].answers[id]?true:false:"";
    const SelectedAnswer= questions[id]?users[authedUser].answers[id]:"";
    const Op1AnswerCount= questions[id]?questions[id].optionOne.votes.length:"";
    const Op2AnswerCount= questions[id]?questions[id].optionTwo.votes.length:"";
    return({
      authedUser:authedUser,
      currentUser: users[authedUser],
      qid: id,
    questionsInfo: questions[id],
    usersInfo:questions[id]?users[questions[id].author]:null,
    IsAnswer,SelectedAnswer,Op1AnswerCount,Op2AnswerCount
  })
   
  };
  export default withRouter(connect(mapStateToProps)(Poll));