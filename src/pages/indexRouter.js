import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import UpperBar from '../containers/upperBar'
import EdittingTaskCard from '../components/EditingTodoCard'
import TodoListArea from '../components/TodoListArea'
import AddTodoBar from '../components/AddTodoBar'
import { toggleAppInNewAddTodoMode, toggleAppInEditingTodoMode, getInitTodos } from '../actions'


const IndexRoute = (props) => {

  useEffect(() => {
    props.getInitTodos()
  }, [])

  const handleIsOpenEditingTaskCard = (props) => {

    if(props.appMode.inAdd || props.appMode.inEdit){

      return <EdittingTaskCard {...props} />
    }

    return <AddTodoBar {...props} />
  }

  return (
    <div>
      <UpperBar />
      {handleIsOpenEditingTaskCard(props)}
      <TodoListArea />
    </div>
  )

   

}


IndexRoute.propTypes = {

  toggleAppInNewAddTodoMode: PropTypes.func,
  toggleAppInEditingTodoMode: PropTypes.func,
  getInitTodos: PropTypes.func,
  appMode: PropTypes.object,
  todoList: PropTypes.object,
}

function mapStateToProps({appMode, todoList}){

  return { appMode, todoList}
}

function mapDispatchToProps(dispatch){

  return bindActionCreators(
    {
      toggleAppInNewAddTodoMode,
      toggleAppInEditingTodoMode,
      getInitTodos
    }, dispatch)
}

export default  connect(mapStateToProps, mapDispatchToProps)(IndexRoute)
