import React, {Component} from 'react'
import Styled from 'styled-components'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import TodoItem from './Todo_Item'

const OutterWrapper = Styled.section`
margin:30px 15% 0px 15%;
width:70%;
`



const getListStyle = isDraggingOver => ({
  backgroundColor: isDraggingOver ? 'lightblue' : '#FFFFFF',
});



class TodoListArea extends Component {

  constructor(props) {
    super(props)
  }

   

    onDragAndDropEnd = (result) => {

        if (!result.destination) {
            return;
        }
        console.log('dnd end')
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
      <TodoItem key={i} />
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
      <OutterWrapper innerRef={provided.innerRef}
        style={getListStyle(snapshot.isDraggingOver)}>
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
  todoList: PropTypes.array
}

function mapStateToProps(state) {
  const {todoList} = state
  return {todoList}

}

export default connect(mapStateToProps, null)(TodoListArea)
