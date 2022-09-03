import { Row,Col,Card,Container} from 'react-bootstrap';
import { connect } from "react-redux";
import NavMenu from './NavMenu';
import DashboardItem from './DashboardItem';
import React from 'react'


const Dashboard= ( props ) =>{

return(
  <Container className=" bg-light p-5">    
       
        <Row className='mt-5'>
        <Col sm>
        <Card>
      <Card.Header><h4>New Questions</h4></Card.Header>
      <Card.Body>
        <Row>
     {props.questionInfoNotDone.map((q) => (
        <Col key={q.id} sm={4} className="mt-3">
    <DashboardItem question={q}></DashboardItem>
    </Col>))} </Row>
      
      </Card.Body>
    </Card>
        </Col>
        </Row>
        <Row className='mt-5'>
        <Col >
        <Card>
      <Card.Header><h4>Done Questions</h4></Card.Header>
      <Card.Body>
      <Row>
     {props.questionInfoDone.map((q) => (
        <Col key={q.id} sm={4} className="mt-3">
    <DashboardItem question={q}></DashboardItem>
    </Col>))} </Row>
      </Card.Body>
    </Card>
        </Col>
        </Row>
    </Container>
    )

}
const mapStateToProps = ({ authedUser, users, questions}) => 
 {
  const answeredQuestionsID= Object.keys(users[authedUser].answers) ;
  const questionInfoDone =  Object.values(questions)
  .filter(({ id }) => answeredQuestionsID.includes(id)).sort((a, b) => b.timestamp - a.timestamp);
  const questionInfoNotDone =  Object.values(questions)
  .filter(({ id }) => !answeredQuestionsID.includes(id)).sort((a, b) => b.timestamp - a.timestamp);

    return({
    currentUsersInfo: users[authedUser],
    questionInfoDone,
    questionInfoNotDone

  });
}
;

  export default connect(mapStateToProps)(Dashboard);