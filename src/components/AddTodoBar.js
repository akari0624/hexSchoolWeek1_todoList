import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'


const InputTodo = Styled.input`
margin:30px 15% 0px 15%;
width:70%;
height:65px;
padding-left:45px;
color:#C8C8C8;
line-height:65px;
border-radius:5px;
background: #FFFFFF;
border: 2px solid #C8C8C8;
font-size:24px;
`


const AddTodoBar = props => (

 <InputTodo placeholder="＋ Add Task" onClick={props.toggleAppInNewAddTodoMode} />

)

AddTodoBar.propTypes = {

    toggleAppInNewAddTodoMode:PropTypes.func

  }


export default AddTodoBar