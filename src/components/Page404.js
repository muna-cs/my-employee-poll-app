import { Image,Container} from 'react-bootstrap';
import ERROR404 from '../asset/ERROR404.jpg'
import { connect } from "react-redux";
import React from 'react'
const Page404= () =>{
   
    return(

        <Container className="text-center bg-light p-5">
        <Image src={ERROR404} width="500"  alt="Logo" />

        </Container>

    );
}
// const mapStateToProps = ({authedUser,users }) => {
//     return({
//         authedUser:users[authedUser],
//     });
//}
export default (Page404);