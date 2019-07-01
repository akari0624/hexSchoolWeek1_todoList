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
import 'jest-dom/extend-expect'

function getMockedAppMode() {

  return { inAdd:false, inEdit:false, inEditingIndex:undefined, visibilityTodoMode:AppTabMode[0] }
}

afterEach(cleanup)

describe('can render todos', () => {
  const mockDesc = 'this is todo1'
  const mockedTodos = [new Todo(mockDesc), new Todo(), new Todo()]
  it('can render 3 todos', () => {
    const optionsForStore = {
      todoList: mockedTodos, 
      appMode: getMockedAppMode(),
    }
    const  container  = renderReduxConnectedHOC(TodoListArea, optionsForStore)
    const todos = container.getAllByTestId('todoItem')
    expect(todos.length).toBe(3)
    expect(todos[0]).toHaveTextContent(mockDesc)
  })
})


describe('can render highlighted todos', () => {
  const mockDesc = 'highlighted todo'
  const mockedTodos = [new Todo(mockDesc, '', 0, '', true), new Todo(mockDesc, '', 0, '', true), new Todo()]
  it('can render highLighted todo', () => {
    const optionsForStore = {
      todoList: mockedTodos, 
      appMode: getMockedAppMode(),
    }
    const  container  = renderReduxConnectedHOC(TodoListArea, optionsForStore)
    const highLighted_i_IconArr = container.queryAllByTestId('highlighted')
   
    expect(highLighted_i_IconArr.length).toBe(2)
  })
})