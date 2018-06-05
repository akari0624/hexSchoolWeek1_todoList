import React from 'react'
import Styled from 'styled-components'
import InputTextBar from './InputTextBar'
import CalendarInput from './CalendarInput'

const CardWrapper = Styled.section`
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr;
grid-template-rows:50px 50px 50px 50px 50px 50px 50px 50px;
grid-row-gap:20px;
background-color:#F2F2F2;
margin:30px 15% 30px 15%;
width:70%;
height:400px;
border:1px solid red;
`



export default (props) => (
  
  <CardWrapper> 
  
    <InputTextBar />
    <CalendarInput />
  </CardWrapper>

)