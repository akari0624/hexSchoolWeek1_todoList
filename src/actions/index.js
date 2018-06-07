import {REORDER_TODOS, HIGHLIGHT_TODO, MARK_ONE_TODO_IS_COMPLETE} from '../action_types'

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