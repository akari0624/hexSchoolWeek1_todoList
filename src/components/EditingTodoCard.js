import React, {Component} from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import EditToDoBar from './EditToDoBar'
import CalendarArea from './CalendarArea'
import AttachFileArea from './AttachFileArea'
import CommentArea from './CommentArea'
import ButtonArea from './ButtonArea'
import {updateTodo, addTodo} from '../actions'

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

const handleIsAdd_or_Edit_ButtonArea = (props, onButtonConfirmClickHandler) => {

  if(props.appMode.inAdd){
    return <ButtonArea toggleAppModeCB={props.toggleAppInNewAddTodoMode} onConfirm={onButtonConfirmClickHandler} />
  }

  return <ButtonArea toggleAppModeCB={props.toggleAppInEditingTodoMode} onConfirm={onButtonConfirmClickHandler} />

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

const examineData = (desc) => {

  if(desc === ''){
    return false
  }
  return true
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

  onButtonConfirmClick = () => {

    if(!examineData()){
      return
    }

    if(this.props.appMode.inAdd){
      this.props.addTodo(this.state)
      this.props.toggleAppInNewAddTodoMode()
    
    }else{
      this.props.updateTodo(this.props.appMode.inEditingIndex, this.state)
      this.props.toggleAppInEditingTodoMode()
    }


  }

   
  render(){

    const props = this.props
    
  
    return(
      <CardWrapper> 
  
        {handleIsInEditing(props.appMode.inEdit, this.state, this.onDescChange)}
        <CalendarArea />
        <AttachFileArea />
        <CommentArea data={this.state.comment} onCommentChange={this.onCommentChange} />
        {handleIsAdd_or_Edit_ButtonArea(props, this.onButtonConfirmClick)}
      </CardWrapper>
    )
  }



}


EditingTodoCard.propTypes = {
  appMode: PropTypes.object.isRequired,
  todoList: PropTypes.array.isRequired,
  toggleAppInNewAddTodoMode: PropTypes.func,
  toggleAppInEditingTodoMode: PropTypes.func,
  updateTodo: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
}

function mapDispatchToProps(dispatch){


  return bindActionCreators({updateTodo, addTodo}, dispatch)
}

export default connect(null, mapDispatchToProps)(EditingTodoCard)