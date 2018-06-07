import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import UpperBar from './containers/upperBar'
import EdittingTaskCard from './components/EditingTodoCard'
import TodoListArea from './components/TodoListArea'
import AddTodoBar from './components/AddTodoBar'
import { toggleAppInNewAddTodoMode } from './actions'


const IndexRoute = (props) => {


  const handleIsOpenEditingTaskCard = (props) => {

    if(props.appMode.inAdd){

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
  appMode: PropTypes.object,
}

function mapStateToProps(state){

  return { appMode: state.appMode}
}

function mapDispatchToProps(dispatch){

  return bindActionCreators({toggleAppInNewAddTodoMode},dispatch)
}

export default  connect(mapStateToProps, mapDispatchToProps)(IndexRoute)
