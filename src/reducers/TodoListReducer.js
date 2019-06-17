import {
  STORE
} from '../action_types'
import { reorder } from '../utils'

// const todo= {
//     desc:String, 
//     file:String,
//     deadline:TimeStamp,
//     todoText:String,
//     highlighted:boolean,
//     comment:String,
//     isComplete: boolean,
// }



const processHighlighTodo = (index, currTodosArr) => {

  const newTodos = [...currTodosArr]

  const isHighlighted = newTodos[index]['highlighted'];

  const changeTo = isHighlighted ? false : true;
  
  newTodos[index]['highlighted'] = changeTo

  if(changeTo){

    return reorder(newTodos, index, 0)

  }
  return reorder(newTodos, index, (newTodos.length-1))
}


const processCompleteTodo = (index, currTodosArr) => {

  const newTodos = [...currTodosArr]

  const isComplete = newTodos[index]['isComplete'];

  const changeTo = isComplete ? false : true;

  newTodos[index]['isComplete'] = changeTo

  if(changeTo){

    return reorder(newTodos, index, (newTodos.length-1))

  }
  return reorder(newTodos, index, 0)  

}

const processUpdateTodo = (newTodo, state, index) => {

  const newTodos = [...state];

  newTodos[index] = newTodo

  return newTodos
  
  
}




export default (state = [], action) => {

  switch(action.type){

  case STORE.GET_INIT_TODO_DATA:
   
    return [...action.payload]

  case STORE.REORDER_TODOS:
    state = action.payload  

    return state

  case STORE.HIGHLIGHT_TODO:
    return processHighlighTodo(action.payload, state)

  case STORE.MARK_ONE_TODO_IS_COMPLETE:
    return processCompleteTodo(action.payload, state)

  case STORE.ADD_TODO:
    return  [...state, action.payload]

  case STORE.UPDATE_TODO:
    return processUpdateTodo(action.payload.todoData ,state, action.payload.todoIndex)
  }

  
   

  return state
}