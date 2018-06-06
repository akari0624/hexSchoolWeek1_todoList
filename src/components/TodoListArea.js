import React, {Component} from 'react'
import Styled from 'styled-components'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import {bindActionCreators} from 'redux'
import TodoItem from './Todo_Item'
import {sendReorderTodosToReducer} from '../actions'


const OutterWrapper = Styled.section`
margin:30px 15% 0px 15%;
width:70%;
`



const getListStyle = isDraggingOver => ({
  backgroundColor: isDraggingOver ? 'lightblue' : '#FFFFFF',
})


const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
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
      <TodoItem key={i} data={todoData} />
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

      return (
        <div> 
          <DragDropContext onDragEnd={this.onDragAndDropEnd}>
            <Droppable droppableId="todoListDropable">
              {this.renderDnDableTodoListArea(this.props.todoList)}
            </Droppable>
          </DragDropContext>  
        </div>
      );
    }
}

TodoListArea.propTypes = {
  todoList: PropTypes.array,
  sendReorderTodosToReducer: PropTypes.func,
}

function mapStateToProps(state) {
  const {todoList} = state
  return {todoList}

}

function mapDispatchToProps(dispatch){

  return bindActionCreators({
    sendReorderTodosToReducer
  },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListArea)
