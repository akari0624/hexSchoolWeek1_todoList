import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {conect} from 'react-redux';

import Styled from 'styled-components';

const DIVHeader = Styled.nav `
display:flex;
width:100%;
height:200px;
background-color:#4A90E2;
`;

export default class UpperBar extends Component {

    render() {

        return (<DIVHeader/>)
    }

}