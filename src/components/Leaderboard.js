import { Container, Table ,Row,Image} from "react-bootstrap";
import { connect } from "react-redux";
import React from 'react'
const Leaderboard= (props) =>{

return(
        

    <Container className=" bg-light p-5">

        <Row className="text-center mt-3">
       <h2 className="text-primary">Leaderboard</h2>
       <hr/>
        </Row>
        <Row>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th> Name</th>
          <th>Answered Questions</th>
          <th>Created Questions</th>
        </tr>
      </thead>
      <tbody>
        
          {props.UsersInfo.map((usr)=>
          <tr key={usr.id}>
            <td ><Image src={usr.avatarURL} width='50' alt="Logo" /> <span className="text-dark h5">{usr.name}</span></td>
            <td>{Object.keys(usr.answers).length}</td>
            <td>{usr.questions.length}</td>
            </tr>
            )}
       
        </tbody>
        </Table></Row>
    </Container>
);

}
const mapStateToProps = ({authedUser, users, questions }) => ({
    authedUser:users[authedUser],
    UsersInfo: Object.values(users),
    questionsInfo: Object.values(questions)

})
export default connect(mapStateToProps)(Leaderboard);