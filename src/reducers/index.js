import { combineReducers } from 'redux'
import TodoListReducer from './TodoListReducer'

const rootReducer = combineReducers({

  todoList:TodoListReducer
})


export default rootReducer