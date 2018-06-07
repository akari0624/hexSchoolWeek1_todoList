import { TOGGLE_APP_NEW_ADD_TODO_MODE } from '../action_types' 



export default (state = { inAdd:false, inEdit:false }, action) => {

  switch(action.type){

  case TOGGLE_APP_NEW_ADD_TODO_MODE:
  const newState = {...state}
  const reverseCondition =  !newState.inAdd 
  newState.inAdd = reverseCondition
  return newState
     
  }

  return state

}