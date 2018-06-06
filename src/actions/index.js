import {REORDER_TODOS} from '../action_types'

export const sendReorderTodosToReducer  = (todosArr) => {


  return {
      type: REORDER_TODOS,
      payload: todosArr
  }

}