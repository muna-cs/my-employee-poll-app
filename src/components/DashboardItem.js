import {Button,Card} from 'react-bootstrap';
import { connect } from "react-redux";
import { formatDate } from '../utils/_DATA';
import { useNavigate } from "react-router-dom";
import React from 'react'
const DashboardItem= ( {question} ) =>{
    const navigate = useNavigate();
    const toQuestion = (e, id) => {
        e.preventDefault();
    
        navigate(`/questions/${id}`);
      };

return(
    <Card body className='text-center'>
        <h5>{question.author}</h5>
        <span>{formatDate(question.timestamp)}</span>
        <hr/>
        <Button variant="outline-warning" onClick={(e) => toQuestion(e, question.id)}>Show</Button>
    </Card>
)
}


export default connect()(DashboardItem);