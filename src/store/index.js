
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware, {all} from 'redux-saga'
import reducers from '../reducers'


function* rootSaga(){
  yield all([])
}


const sagaMiddleware = createSagaMiddleware()

const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore)

const appStore = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



sagaMiddleware.run(rootSaga)





export default appStore