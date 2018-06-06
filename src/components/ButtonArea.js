import React from 'react'
import Styled from 'styled-components'


const OutterDiv = Styled.div`
grid-column:1/8;
grid-row:8/9;

display:grid;
grid-template-columns:1fr 1fr;
grid-template-rows:100%;
`
const CancelBtn = Styled.a`
grid-column:1/2;
grid-row:1/1;
background-color:#FFFFFF;
color:#D0021B;
line-height:50px;
text-align:center;
`

const ConfirmBtn = Styled.a`
grid-column:2/3;
grid-row:1/1;
background-color:#4A90E2;
color:#FFFFFF;
line-height:50px;
text-align:center;
`




export default (props) => (

  <OutterDiv>
    <CancelBtn>X Cancel</CancelBtn>
    <ConfirmBtn>＋ Add Task</ConfirmBtn>
  </OutterDiv>

)