import React from 'react'
import Styled from 'styled-components'



const OutterDiv = Styled.div`
grid-column:1/8;
grid-row:1/2;
`

const Checkbox = Styled.input`
margin-left:30px;
`

const Input = Styled.input`
margin-left:20px;
`

const Div = Styled.div`
margin-left:80px;
display:inline-block;
`


export default (props) => (
  <OutterDiv>
    <Checkbox type="checkbox"/>
    <Input type="text" />
    <Div>星</Div>
    <Div>筆</Div>
  </OutterDiv>
)