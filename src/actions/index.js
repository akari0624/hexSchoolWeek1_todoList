import {
  REORDER_TODOS,
  HIGHLIGHT_TODO, 
  MARK_ONE_TODO_IS_COMPLETE,
  TOGGLE_APP_NEW_ADD_TODO_MODE,
  TOGGLE_APP_EDITING_TODO_MODE,
  UPDATE_TODO,
  ADD_TODO,
} from '../action_types'

export const sendReorderTodosToReducer  = (todosArr) => {


  return {
      type: REORDER_TODOS,
      payload: todosArr
  }

}

export const highlightOneTodo  = (todoIndex) => {


  return {
      type: HIGHLIGHT_TODO,
      payload: todoIndex
  }

}

export const markOneTodoComplete  = (todoIndex) => {


  return {
      type: MARK_ONE_TODO_IS_COMPLETE,
      payload: todoIndex
  }

}



export const toggleAppInNewAddTodoMode  = () => {


  return {
    type: TOGGLE_APP_NEW_ADD_TODO_MODE,
    payload: undefined
  }

}

export const toggleAppInEditingTodoMode  = (todoIndex, todoData) => {


  return {
    type: TOGGLE_APP_EDITING_TODO_MODE,
    payload: {todoIndex, todoData}
  }

}


export const updateTodo  = (todoIndex, todoData) => {


  return {
    type: UPDATE_TODO,
    payload: {todoIndex, todoData}
  }

}


export const addTodo  = (todoData) => {


  return {
    type: ADD_TODO,
    payload: todoData
  }

}