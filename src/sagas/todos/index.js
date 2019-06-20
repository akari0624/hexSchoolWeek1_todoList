import { all, put, take, call } from 'redux-saga/effects'
import {createAction} from 'redux-actions'
import { SAGA, STORE } from '../../action_types'




const mockData = [{
  desc:'myTodo 1',
  file:'',
  deadline:'',
  highlighted:false,
  comment:'',
  isComplete:false,
},{
  desc:'myTodo 2',
  file:'',
  deadline:'',
  highlighted:false,
  comment:'',
  isComplete:false,
},{
  desc:'myTodo 3',
  file:'',
  deadline:'',
  highlighted:false,
  comment:'',
  isComplete:false,
},{
  desc:'myTodo 4',
  file:'',
  deadline:'',
  highlighted:false,
  comment:'',
  isComplete:false,
},{
  desc:'myTodo 5',
  file:'',
  deadline:'',
  highlighted:false,
  comment:'',
  isComplete:false,
},]


export const getMockDataAsyncly = () => (new Promise((res, rej) => {

  try{
    setTimeout(() => {
      res(mockData)
    }, 3000)
  }catch(err){
    rej(err)
  }

})
)


const dispatchInitTodosToStore = createAction(STORE.GET_INIT_TODO_DATA, payload => payload)

const dispatchReorderTodosToStore = createAction(STORE.REORDER_TODOS, payload => payload)

export function* getInitTodos() {
  while(true){
    yield take(SAGA.SAGA_GET_INIT_TODO_DATA)
    const mockInitTodos = yield call(getMockDataAsyncly)
    yield put(dispatchInitTodosToStore(mockInitTodos))
  }

}

export function* reorderTodos() {
  while(true){
    const {payload} = yield take(SAGA.SAGA_REORDER_TODOS)
    yield put(dispatchReorderTodosToStore(payload))
  }

}


export default function* todosRootSaga() {
  yield all(
    [
      getInitTodos(),
      reorderTodos(),
    ]
  )
}