import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {conect} from 'react-redux';

import Styled from 'styled-components';

const outterHeight = 76
const NavHeader = Styled.nav `
display:flex;
flex-direction:row;
justify-content:center;
align-items:stretch;
width:100%;
height:${outterHeight}px;
background-color:#4A90E2;
`;

const DIVBlock = Styled.div`
line-height:${outterHeight}px;
color:#00408B;
font-family: Roboto-Medium;
font-size: 24px;
text-align:center;
`;

export default class UpperBar extends Component {

    render() {

        return (<NavHeader>

            <DIVBlock>My Task</DIVBlock>
            <DIVBlock>In Progress</DIVBlock>
            <DIVBlock>Completed</DIVBlock>
        </NavHeader>)
    }

}