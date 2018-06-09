import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { highlightOneTodo, markOneTodoComplete, toggleAppInEditingTodoMode } from '../actions'

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

const Checkbox = Styled.div`
grid-column: 1/2;
grid-row: 1/2;
margin-left:30px;
cursor:pointer;
`

const TodoTextDisplayDiv = Styled.div`
grid-column: 2/3;
grid-row: 1/2;

`

const Div = Styled.div`
font-size:${iconFontSize};
cursor:pointer;
`

const  ToDoItemMetaCondition = Styled.div`
display: grid;
grid-column: 1/5;
margin-left:50px;
padding-bottom:16px;
`

const LineThroughSpan = Styled.span`
text-decoration:line-through;
`




const Todo_Items = (props) => {



  const handleHighLightedChange = () => {

    
    props.highlightOneTodo(props.index)

  }

  const markOneTodoComplete = () => {

    props.markOneTodoComplete(props.index)
  }

   
  const renderIsHighlightStar = () => {

    if(props.highlighted){
      return (<i className="fas fa-star"></i>)
    }

    return (<i className="far fa-star"></i>)
  }

  const renderIsTodoCompleteCheckbox = () => {


 if(props.isComplete){
  return (<i className="fas fa-check-circle"></i>)
}

return (<i className="far fa-circle"></i>)

  }


  const renderIsComplete = () => {

   if(props.isComplete){

    return <TodoTextDisplayDiv><LineThroughSpan>{props.desc}</LineThroughSpan></TodoTextDisplayDiv>

   }

   return <TodoTextDisplayDiv>{props.desc}</TodoTextDisplayDiv>
  }

  const handleIsShouldOpenTodoEditCard = () => {

    if(props.appMode.inAdd){
      return
    }else if(!props.appMode.inEdit){
      
      const {desc, file, deadline, highlighted, comment, isComplete} = props
      const todoData = {
        desc, file, deadline, highlighted, comment, isComplete
      }
      props.toggleAppInEditingTodoMode(props.index, todoData)

    }
  }


return(
  <OuttestWrapper highlighted={props.highlighted}>
    <ToDoItem>   
      <Checkbox onClick={markOneTodoComplete} >{renderIsTodoCompleteCheckbox()}</Checkbox>
      {renderIsComplete()}
      <Div onClick={handleHighLightedChange}>{renderIsHighlightStar()}</Div>
      <Div onClick={handleIsShouldOpenTodoEditCard}><i className="far fa-edit"></i></Div> 
    </ToDoItem> 

    <ToDoItemMetaCondition>
    some condition
    </ToDoItemMetaCondition>    
  </OuttestWrapper>
)
}

Todo_Items.propTypes = {
 
  markOneTodoComplete: PropTypes.func,
  highlightOneTodo: PropTypes.func,
  toggleAppInEditingTodoMode: PropTypes.func,

  index: PropTypes.number,
  appMode: PropTypes.object,
  

  desc: PropTypes.string,
  file:PropTypes.string,
  deadline:PropTypes.string,
  highlighted: PropTypes.bool,
  comment:PropTypes.string,
  isComplete: PropTypes.bool,

}


function mapStateToProps(state){

  return {
    appMode:state.appMode
  }
}

function mapDispatchToProps(dispatch){

  return bindActionCreators({
    highlightOneTodo, markOneTodoComplete,toggleAppInEditingTodoMode
  },dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(Todo_Items)