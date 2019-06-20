import { take, call, put } from 'redux-saga/effects';
import { expect } from 'chai'
import { getInitTodos, getMockDataAsyncly, reorderTodos } from '../../../src/sagas/todos';
import { SAGA, STORE } from '../../../src/action_types';

describe('test get init todos generator function', () => {
  const _iterator = getInitTodos();

  it(`can take ${SAGA.SAGA_GET_INIT_TODO_DATA} pattern`, () => {
    const result1 = take(SAGA.SAGA_GET_INIT_TODO_DATA);
    const iResult = _iterator.next().value;
    expect(result1).to.deep.equal(iResult);
  });
 
  it(`should call fetchInitTodosAsyncly`, () => {
    const resultPromise = call(getMockDataAsyncly);
    const iResult = _iterator.next().value;
    expect(resultPromise).to.deep.equal(iResult);
  })

  const mockAPIPayload = 'mocked payload'

  it(`can put API result`, () => {
    const putResult = put({type: STORE.GET_INIT_TODO_DATA, payload: mockAPIPayload});
    const iResult = _iterator.next(mockAPIPayload).value;
    expect(putResult).to.deep.equal(iResult);
  })

});


describe('test reorderTodos generator function', () => {
  const _iterator = reorderTodos()
  it('can take reorder action', () => {
    const mockedTake = take(SAGA.SAGA_REORDER_TODOS);
    const iteTake = _iterator.next().value

    expect(mockedTake).to.deep.equal(iteTake)
  })

  it('can dispatch correct action(i.e. reordered array in payload)', () => {
    const mockedReorderTodos = [ {'number': 2,}, {'number': 1,},]
    const mockedAction = {type: STORE.REORDER_TODOS, payload: mockedReorderTodos}
    const mockedDispatchedObj = put(mockedAction)

    const iteTake = _iterator.next(mockedAction).value
    expect(mockedDispatchedObj).to.deep.equal(iteTake)
  })
})