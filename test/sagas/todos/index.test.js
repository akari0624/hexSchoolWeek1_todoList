import { take, call, put } from 'redux-saga/effects';
import { getInitTodos, getMockDataAsyncly } from '../../../src/sagas/todos';
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
