import React from 'react'
import Styled from 'styled-components'
import EditToDoBar from './EditToDoBar'
import CalendarArea from './CalendarArea'
import AttachFileArea from './AttachFileArea'
import CommentArea from './CommentArea'
import ButtonArea from './ButtonArea'

const CardWrapper = Styled.section`
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr;
grid-template-rows:50px 20px 20px 20px 20px 20px 80px 50px;
grid-row-gap:30px;
align-items:center;
background-color:#F2F2F2;
margin:30px 15% 0px 15%;
width:70%;
box-shadow: 0 4px 4px 0 #C8C8C8;
border-radius: 5px;

`



const EditingTodoCard = (props) => (
  
  <CardWrapper> 
  
    <EditToDoBar />
    <CalendarArea />
    <AttachFileArea />
    <CommentArea />
    <ButtonArea />
  </CardWrapper>

)

export default EditingTodoCard