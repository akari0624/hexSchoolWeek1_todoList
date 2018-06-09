import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'

const iconFontSize = '20px'

const OutterDiv = Styled.div`
grid-column:1/7;
grid-row:1/2;

display:grid;
grid-template-columns:10% 60% 15% 15%;
grid-template-rows:100%;
grid-row-gap:2px;
grid-column-gap:10px;

&:nth-child(3){
  grid-column:3/4;
}

&:nth-child(4){
  grid-column:4/5;
}
`

const Checkbox = Styled.input`
grid-column:1/2;
margin-left:30px;
`

const Input = Styled.input`
grid-column:2/3;
padding:0px 5px;
`

const Div = Styled.div`
display:inline-block;

font-size:${iconFontSize};
`


const EditingTodoBar =  (props) => {

const handleIsInEdit = ({inEdit}) => {

  if(inEdit === true){
    return <i className="fas fa-edit"></i>
  }else if(props.inEdit === false){
    return <i className="far fa-edit"></i>
  }

}


const handleIsHighlight = ({highlighted}) => {

  if(highlighted === true){
    return <i className="fas fa-star"></i>
  }else{
    return <i className="far fa-star"></i>
  }

}

  return (
    <OutterDiv>
      <Checkbox type="checkbox" />
      <Input 
        type="text" 
        placeholder="Type Something Here…" 
        value={props.desc} 
        onChange={props.onDescChange}
      />
      <Div>{handleIsHighlight(props)}</Div>
      <Div>{handleIsInEdit(props)}</Div>
    </OutterDiv>
  )
}

EditingTodoBar.propTypes = {
  inEdit:PropTypes.bool,
  desc:PropTypes.string,
  onDescChange:PropTypes.func,
}

export default EditingTodoBar