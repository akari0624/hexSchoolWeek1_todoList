import { renderComponent , expect } from '../test_helper'
import TodoListArea from '../../src/components/TodoListArea'

describe('TodoListArea' , () => {
  let component

  beforeEach(() => {
    component = renderComponent(TodoListArea)
  })

  it('renders something', () => {
    expect(component).to.exist
  })
})
