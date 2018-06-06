import React, {Component} from 'react'
import Styled from 'styled-components'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import TodoItem from './Todo_Item'

const OutterWrapper = Styled.section `

margin:30px 15% 0px 15%;
width:70%;
`

class TodoListArea extends Component {

  constructor(props) {
    super(props)
  }

    renderCurrTodoList = (todoList) => (todoList.map((d, i) => <TodoItem key={i}/>))

    render() {

      return (
        <OutterWrapper>
          {this.renderCurrTodoList(this.props.todoList)}
        </OutterWrapper>
      )
    }
}

TodoListArea.propTypes = {
  todoList: PropTypes.array
}

function mapStateToProps(state) {
  const {todoList} = state
  return {todoList}

}

export default connect(mapStateToProps, null)(TodoListArea)
