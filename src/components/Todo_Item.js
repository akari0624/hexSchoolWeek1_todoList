import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'


const iconFontSize = '20px'

const OuttestWrapper = Styled.div`
background-color:${props => props.highlighted ? '#FFF2DC' : '#F2F2F2'};


margin-bottom:8px;
`

const ToDoItem = Styled.div`
font-size:24px;
display: grid;
    grid-template-columns: 10% 60% 15% 15%;
    grid-column-gap: 10px;

    &:nth-child(3){
      grid-column:3/4;
    }
    
    &:nth-child(4){
      grid-column:4/5;
    }

 margin-bottom:15px;   
`

const Checkbox = Styled.input`
grid-column: 1/2;
grid-row: 1/2;
margin-left:30px;
`

const TodoTextDisplayDiv = Styled.div`
grid-column: 2/3;
grid-row: 1/2;

`

const Div = Styled.div`
font-size:${iconFontSize};
`

const  ToDoItemMetaCondition = Styled.div`
display: grid;
grid-column: 1/5;
margin-left:50px;
padding-bottom:16px;
`


const Todo_Items = (props) => (

  <OuttestWrapper highlighted={props.highlighted}>
    <ToDoItem>   
      <Checkbox type="checkbox" />
      <TodoTextDisplayDiv>your todo {props.data.num}</TodoTextDisplayDiv>
      <Div><i className="far fa-star"></i></Div>
      <Div><i className="far fa-edit"></i></Div> 
    </ToDoItem> 

    <ToDoItemMetaCondition>
    some condition
    </ToDoItemMetaCondition>    
  </OuttestWrapper>

)

Todo_Items.propTypes = {
  highlighted: PropTypes.bool,
  data: PropTypes.object,

}


export default Todo_Items