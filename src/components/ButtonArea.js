import React from 'react'
import Styled from 'styled-components'


const OutterDiv = Styled.div`
grid-column:1/7;
grid-row:8/9;


display:grid;
grid-template-columns:1fr 1fr;
grid-template-rows:100%;
font-size:24px;
`
const CancelBtn = Styled.a`
grid-column:1/2;
grid-row:1/1;
background-color:#FFFFFF;
color:#D0021B;
line-height:50px;
text-align:center;
cursor:pointer;
transition:.6s;
  &:hover{
    background-color:#D0021B;
    color:#FFFFFF;
}
`

const ConfirmBtn = Styled.a`
grid-column:2/3;
grid-row:1/1;
background-color:#4A90E2;
color:#FFFFFF;
line-height:50px;
text-align:center;
cursor:pointer;
transition:.6s;

  &:hover{
    background-color:#FFFFFF;
    color:#4A90E2;
    border:1px solid #4A90E2;
}
`




 const ButtonArea = (props) => (

  <OutterDiv>
    <CancelBtn>X Cancel</CancelBtn>
    <ConfirmBtn>＋ Add Task</ConfirmBtn>
  </OutterDiv>

)


export default ButtonArea