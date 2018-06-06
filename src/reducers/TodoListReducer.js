import {GET_CURR_TODO_DATA} from '../action_types'


export default (state = [], action) => {

  switch(action.type){

  case GET_CURR_TODO_DATA:

    return state;


  }

  return state;
}