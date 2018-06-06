import {GET_CURR_TODO_DATA, REORDER_TODOS} from '../action_types'


// {
//     file:String,
//     deadline:TimeStamp,
//     todoText:String,
//     isDone:boolean,
//     highlighted:boolean,
//     comment:String,
// }



export default (state = [{num:1},{num:2},{num:3},{num:4},{num:5},], action) => {

  switch(action.type){

  case GET_CURR_TODO_DATA:

    return state

  case REORDER_TODOS:
    state = action.payload  

    return state
  }

  return state
}