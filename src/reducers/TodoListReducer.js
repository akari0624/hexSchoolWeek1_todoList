import {GET_CURR_TODO_DATA} from '../action_types'


// {
//     file:String,
//     deadline:TimeStamp,
//     todoText:String,
//     isDone:boolean,
//     highlighted:boolean,
//     comment:String,
// }



export default (state = [], action) => {

  switch(action.type){

  case GET_CURR_TODO_DATA:

    return state;


  }

  return state;
}