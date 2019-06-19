import React from 'react';
import { Provider } from 'react-redux';
import { render as rtlRender } from '@testing-library/react';
import { createStore } from 'redux';
import combinedReducers from '../../src/reducers';

function renderReduxConnectedHOC(TestedComponent, initState) {
  return rtlRender(
    <Provider store={createStore(combinedReducers, initState)}>
      <>
        <TestedComponent />
      </>
    </Provider>
  );
}

export { renderReduxConnectedHOC };
