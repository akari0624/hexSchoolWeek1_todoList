import React, {Component} from 'react'
import Styled from 'styled-components'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import {bindActionCreators} from 'redux'
import TodoItem from './Todo_Item'
import { sendReorderTodosToReducer } from '../actions'
import { reorder } from '../utils'
import AppTabMode from '../conf'

const OutterWrapper = Styled.section`
margin:30px 15% 0px 15%;
width:70%;

@media (max-width: 700px){
  margin:30px 0% 0px 0%;
  width:100%;
}
`



const getListStyle = isDraggingOver => ({
  backgroundColor: isDraggingOver ? '#4A90E2' : '#FFFFFF',
})



const filterTodoListByCurrTabMode = (allTodos, tabMode) => {

     if(tabMode === AppTabMode[0]){
        return allTodos
     }else if(
      tabMode === AppTabMode[1]
     ){
      return allTodos.filter(d => !d.isComplete)
     }else if(tabMode === AppTabMode[2]){
      return allTodos.filter(d => d.isComplete)
     }

     throw new Error(`unknown tab mode type!!! => ${tabMode}`)
    }

class TodoListArea extends Component {

  constructor(props) {
    super(props)
  }

   

    onDragAndDropEnd = (result) => {

      if (!result.destination) {
        return;
      }

      const reorderTodoItems = reorder(
        this.props.todoList,
        result.source.index,
        result.destination.index
      )


      this.props.sendReorderTodosToReducer(reorderTodoItems)

    };

    
renderDragableTodoItem = (todoData, i) => (
  provided, 
  snapshot
) => (
  <div>
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <TodoItem key={i} {...todoData} index={i} />
    </div>
    {provided.placeholder}
  </div>       
);

    renderCurrTodoList = (todoList) => 
      (todoList.map((d, i) => 
        (
          <Draggable key={i} draggableId={i} index={i}>
            {this.renderDragableTodoItem(d, i)}
          </Draggable>
        )
      ));

 

    renderDnDableTodoListArea = (todoList) => (provided, snapshot) => (
      <OutterWrapper 
        innerRef={provided.innerRef}
        style={getListStyle(snapshot.isDraggingOver)}
      >
        {this.renderCurrTodoList(todoList)}
      </OutterWrapper>
    );

    render() {

      const filteredTabmodeTodos = filterTodoListByCurrTabMode(this.props.todoList, this.props.appMode.visibilityTodoMode)
      return (
        <div> 
          <DragDropContext onDragEnd={this.onDragAndDropEnd}>
            <Droppable droppableId="todoListDropable">
              {this.renderDnDableTodoListArea(filteredTabmodeTodos)}
            </Droppable>
          </DragDropContext>  
        </div>
      );
    }
}

TodoListArea.propTypes = {
  todoList: PropTypes.array,
  sendReorderTodosToReducer: PropTypes.func,
  appMode: PropTypes.object,

}

function mapStateToProps({todoList, appMode}) {
  return {todoList, appMode}
}

function mapDispatchToProps(dispatch){

  return bindActionCreators({
    sendReorderTodosToReducer,
  },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListArea)
