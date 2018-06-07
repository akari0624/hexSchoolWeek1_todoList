import { combineReducers } from 'redux'
import TodoListReducer from './TodoListReducer'
import AppMode from './AppMode'

const rootReducer = combineReducers({

  todoList:TodoListReducer,
  appMode:AppMode
})


export default rootReducer