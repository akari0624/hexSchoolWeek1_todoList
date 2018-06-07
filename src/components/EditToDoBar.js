import React from 'react'
import Styled from 'styled-components'


const iconFontSize = '20px'

const OutterDiv = Styled.div`
grid-column:1/7;
grid-row:1/2;

display:grid;
grid-template-columns:10% 60% 15% 15%;
grid-template-rows:100%;
grid-row-gap:2px;
grid-column-gap:10px;

&:nth-child(3){
  grid-column:3/4;
}

&:nth-child(4){
  grid-column:4/5;
}
`

const Checkbox = Styled.input`
grid-column:1/2;
margin-left:30px;
`

const Input = Styled.input`
grid-column:2/3;
padding:0px 5px;
`

const Div = Styled.div`
display:inline-block;

font-size:${iconFontSize};
`


const EditingTodoBar =  (props) => (
  <OutterDiv>
    <Checkbox type="checkbox" />
    <Input type="text" placeholder="Type Something Here…" />
    <Div><i className="far fa-star"></i></Div>
    <Div><i className="far fa-edit"></i></Div>
  </OutterDiv>
)


export default EditingTodoBar