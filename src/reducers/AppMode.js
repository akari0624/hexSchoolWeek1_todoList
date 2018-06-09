import { TOGGLE_APP_NEW_ADD_TODO_MODE, TOGGLE_APP_EDITING_TODO_MODE } from '../action_types' 



export default (state = { inAdd:false, inEdit:false, inEditingIndex:undefined }, action) => {

  switch(action.type){

  case TOGGLE_APP_NEW_ADD_TODO_MODE:
  const newState = {...state}
  const reverseCondition =  !newState.inAdd 
  newState.inAdd = reverseCondition
  return newState
     
case TOGGLE_APP_EDITING_TODO_MODE:
  const inEditState = {...state}
  const reverseCondition2 =  !inEditState.inEdit 
  inEditState.inEdit = reverseCondition2
  inEditState.inEditingIndex = action.payload.todoIndex
  return inEditState
  }

  return state

}