import React from 'react'
import {
  fireEvent,
  cleanup,
  waitForElement,
} from '@testing-library/react'
import TodoListArea from '../../src/components/TodoListArea'
import Todo from '../../src/data_models/todo'
import AppTabMode from '../../src/conf' 
import { renderReduxConnectedHOC } from '../utils'

function getMockedAppMode() {

  return { inAdd:false, inEdit:false, inEditingIndex:undefined, visibilityTodoMode:AppTabMode[0] }
}

afterEach(cleanup)

describe('can render todos', () => {

  const mockedTodos = [new Todo(), new Todo(), new Todo()]
  it('can render 3 todos', () => {
    const optionsForStore = {
      todoList: mockedTodos, 
      appMode: getMockedAppMode(),
    }
    renderReduxConnectedHOC(TodoListArea, optionsForStore)
  })
})