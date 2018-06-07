import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {conect} from 'react-redux';

import Styled from 'styled-components';

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

export default class UpperBar extends Component {

  render() {

    return (
      <NavHeader>
        <DIVBlock>My Task</DIVBlock>
        <DIVBlock>In Progress</DIVBlock>
        <DIVBlock>Completed</DIVBlock>
      </NavHeader>)
    }

}