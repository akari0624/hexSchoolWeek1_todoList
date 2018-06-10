import {
  GET_CURR_TODO_DATA, REORDER_TODOS,
  HIGHLIGHT_TODO,
  MARK_ONE_TODO_IS_COMPLETE,
  ADD_TODO,
  UPDATE_TODO,
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


const mockData = [{
  desc:'myTodo 1',
  file:'',
  deadline:'',
  highlighted:false,
  comment:'',
  isComplete:false,
},{
  desc:'myTodo 2',
  file:'',
  deadline:'',
  highlighted:false,
  comment:'',
  isComplete:false,
},{
  desc:'myTodo 3',
  file:'',
  deadline:'',
  highlighted:false,
  comment:'',
  isComplete:false,
},{
  desc:'myTodo 4',
  file:'',
  deadline:'',
  highlighted:false,
  comment:'',
  isComplete:false,
},{
  desc:'myTodo 5',
  file:'',
  deadline:'',
  highlighted:false,
  comment:'',
  isComplete:false,
},]


export default (state = [...mockData], action) => {

  switch(action.type){

  case GET_CURR_TODO_DATA:

    return state

  case REORDER_TODOS:
    state = action.payload  

    return state

  case HIGHLIGHT_TODO:
    return processHighlighTodo(action.payload, state)

  case MARK_ONE_TODO_IS_COMPLETE:
    return processCompleteTodo(action.payload, state)

  case ADD_TODO:
    return  [...state, action.payload]

  case UPDATE_TODO:
    return processUpdateTodo(action.payload.todoData ,state, action.payload.todoIndex)
  }

  
   

  return state
}