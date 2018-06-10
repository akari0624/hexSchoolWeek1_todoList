import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {PropTypes} from 'prop-types'

import Styled from 'styled-components'
import Pages from '../conf'

import {changeAppCurrTabMode} from '../actions'

const outterHeight = 76
const NavHeader = Styled.nav `
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:stretch;
width:100%;
height:${outterHeight}px;
background-color:#4A90E2;
padding:0px 15%;
`;

const DIVBlock = Styled.div`
line-height:${outterHeight}px;
color:#00408B;
font-family: Roboto-Medium;
font-size: 24px;
text-align:center;

&:hover{ 
    color:#FFFFFF; 
    cursor:pointer;
    border-bottom:5px solid #00408b;
}
`;


const CurrentSelectedBlock = Styled.div`
line-height:${outterHeight}px;
font-family: Roboto-Medium;
font-size: 24px;
text-align:center;
color:#FFFFFF; 
cursor:pointer;
border-bottom:5px solid #00408b;
`


class UpperBar extends Component {

  constructor(props){
    super(props)

    this.state = {
      nowPage :Pages[0]
    }
  }

  onOneTabClick = (e) => {

    const changeToTabMode = e.target.textContent
    this.setState({
      nowPage:changeToTabMode
    })

    this.props.changeAppCurrTabMode(changeToTabMode)
  }

  renderCurrentFocusTabBar = (clickHandler) => (

    Pages.map(pText => (

      pText === this.state.nowPage 
        ? <CurrentSelectedBlock key={pText} onClick={clickHandler}> {pText} </CurrentSelectedBlock>
        :<DIVBlock key={pText} onClick={clickHandler}>{pText}</DIVBlock>
    ))
  )

  render() {

    return (
      <NavHeader>
        {this.renderCurrentFocusTabBar(this.onOneTabClick)}
      </NavHeader>)
  }

}



UpperBar.propTypes = {

  changeAppCurrTabMode:PropTypes.func,
}

function mapDispatchToProps(dispatch){

  return bindActionCreators({changeAppCurrTabMode},dispatch)

}

export default connect(null, mapDispatchToProps)(UpperBar)

