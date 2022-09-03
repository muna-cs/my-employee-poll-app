import { Row,Col,Card,Container,Tab,Nav} from 'react-bootstrap';
import { connect } from "react-redux";
import DashboardItem from './DashboardItem';
import React from 'react'


const Dashboard= ( props ) =>{

return(
  <Container className=" bg-light p-5">    
       <Tab.Container defaultActiveKey="new"  justify>
      <Row>
          <Nav variant="pills" >
            <Nav.Item>
              <Nav.Link eventKey="new">
                New Questions</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="done">Done Questions</Nav.Link>
            </Nav.Item>
          </Nav>
          </Row>
          <Row>
          <Tab.Content>
            <Tab.Pane eventKey="new">
            <Row className='mt-5'>
        <Col sm>
        <Card>
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
            </Tab.Pane>
            <Tab.Pane eventKey="done">
            <Row className='mt-5'>
        <Col >
        <Card>
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
            </Tab.Pane>
          </Tab.Content>
      </Row>
    </Tab.Container>
       
        
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