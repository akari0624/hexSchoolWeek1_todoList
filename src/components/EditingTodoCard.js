import React, {Component} from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
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


const handleIsInEditing = (inEdit,todo, handler) => (
   
    
  <EditToDoBar inEdit={inEdit}
    desc={todo.desc} 
    highlighted={todo.highlighted} 
    onDescChange={handler} 
  />

)

const handleIsAdd_or_Edit_ButtonArea = (props) => {

  if(props.appMode.inAdd){
    return <ButtonArea toggleAppModeCB={props.toggleAppInNewAddTodoMode} />
  }

  return <ButtonArea toggleAppModeCB={props.toggleAppInEditingTodoMode} />

 } 





const generateEditinfTodo_forState = (props) => {

  const editingTodo = props.todoList[props.appMode.inEditingIndex]
  
  const editingTodo_state = {
    desc:editingTodo.desc,
    file:editingTodo.file,
    deadline:editingTodo.deadline,
    highlighted:editingTodo.highlighted,
    comment:editingTodo.comment,
    isComplete:editingTodo.isComplete,
  } 

  return editingTodo_state

}

const generateEmptyTodo_forState = () => {

  const emptyTodo = {
    desc:'',
    file:'',
    deadline:'',
    highlighted:false,
    comment:'',
    isCompletefalse:false,}

  return emptyTodo

}

class EditingTodoCard extends Component{
  
  constructor(props){
    super(props)

    if(this.props.appMode.inEdit){
     
      this.state = generateEditinfTodo_forState(this.props)

    }else if(this.props.appMode.inAdd){

      this.state = generateEmptyTodo_forState()
    }

  }

  componentWillUnmount(){
    this.setState({
      desc:null,
      file:null,
      deadline:null,
      highlighted:null,
      comment:null,
      isCompletefalse:null,
    })
  }

  onCommentChange = (e) => {
    const comment = e.target.value
    this.setState({comment})
  }

  onDescChange = (e) => {
    const desc = e.target.value
    this.setState({desc})

  }

  

   
  render(){

    const props = this.props
    
  
    return(
      <CardWrapper> 
  
        {handleIsInEditing(props.appMode.inEdit, this.state, this.onDescChange)}
        <CalendarArea />
        <AttachFileArea />
        <CommentArea data={this.state.comment} onCommentChange={this.onCommentChange} />
        {handleIsAdd_or_Edit_ButtonArea(props)}
      </CardWrapper>
    )
  }



}


EditingTodoCard.propTypes = {
  appMode: PropTypes.object,
  todoList: PropTypes.array,
}

export default EditingTodoCard