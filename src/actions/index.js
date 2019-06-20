import { createAction } from 'redux-actions'
import {
  SAGA, STORE
} from '../action_types'



export const sendReorderTodosToReducer  = (todosArr) => {


  return {
      type: SAGA.SAGA_REORDER_TODOS,
      payload: todosArr
  }

}

export const highlightOneTodo  = (todoIndex) => {


  return {
      type: STORE.HIGHLIGHT_TODO,
      payload: todoIndex
  }

}

export const markOneTodoComplete  = (todoIndex) => {


  return {
      type: STORE.MARK_ONE_TODO_IS_COMPLETE,
      payload: todoIndex
  }

}



export const toggleAppInNewAddTodoMode  = () => {


  return {
    type: STORE.TOGGLE_APP_NEW_ADD_TODO_MODE,
    payload: undefined
  }

}

export const toggleAppInEditingTodoMode  = (todoIndex, todoData) => {


  return {
    type: STORE.TOGGLE_APP_EDITING_TODO_MODE,
    payload: {todoIndex, todoData}
  }

}


export const updateTodo  = (todoIndex, todoData) => {


  return {
    type: STORE.UPDATE_TODO,
    payload: {todoIndex, todoData}
  }

}


export const addTodo  = (todoData) => {


  return {
    type: STORE.ADD_TODO,
    payload: todoData
  }

}

export const changeAppCurrTabMode = (mode) => {

  return {
    type: STORE.CHANGE_APP_CURR_TAB_MODE,
    payload:mode
  }

}

export const getInitTodos = createAction(SAGA.SAGA_GET_INIT_TODO_DATA, payload => payload)