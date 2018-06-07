import React from 'react'
import UpperBar from './containers/upperBar'
import EdittingTaskCard from './components/EditingTodoCard'
import TodoListArea from './components/TodoListArea'

export default (props) => {


  return (
    <div>
      <UpperBar />
      <EdittingTaskCard />
      <TodoListArea />
    </div>
  )

   

}

