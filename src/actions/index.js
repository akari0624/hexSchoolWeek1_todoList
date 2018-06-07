import {REORDER_TODOS, HIGHLIGHT_TODO} from '../action_types'

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