import React from 'react'


import Styled from 'styled-components'


const OuttestWrapper = Styled.div`
background-color:${props => props.highlighted ? '#FFF2DC' : '#F2F2F2'};
height:102px;
margin-bottom:8px;
`

const ToDoItem = Styled.div``

const Checkbox = Styled.input`
margin-left:30px;
`

const TodoTextDisplayDiv = Styled.div`
margin-left:20px;
display:inline-block;
`

const Div = Styled.div`
margin-left:80px;
display:inline-block;
`

const  ToDoItemMetaCondition = Styled.div`
margin-left:50px;
`


export default (props) => (

  <OuttestWrapper highlighted={props.highlighted}>
    <ToDoItem>   
      <Checkbox type="checkbox" />
      <TodoTextDisplayDiv>your todo</TodoTextDisplayDiv>
      <Div>星</Div>
      <Div>筆</Div>
    </ToDoItem> 

    <ToDoItemMetaCondition>
    some condition
    </ToDoItemMetaCondition>    
  </OuttestWrapper>

)