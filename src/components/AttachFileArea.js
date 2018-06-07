import React from 'react'
import Styled from 'styled-components'


const iconFontSize = '20px'
const largerIconFontSize = '30px'
const largerIconFontSizeOnHover = '40px'

const OutterDiv = Styled.div`
grid-column:1/7;
grid-row:4/6;

display:grid;
grid-template-columns:20% 80%;
grid-template-rows:50% 50%;
grid-row-gap:5px;
font-size:${iconFontSize};
`

const AttachFilePicAndDesc = Styled.div`
grid-column:1/3;
grid-row:1/2;
padding-left:30px;
`

const TextSpan = Styled.span`
margin-left:20px;
`



const AttachFilePlusLabel = Styled.label`
grid-column:1/2;
grid-row:2/3
padding-left:50px;
cursor:pointer;
font-size:${largerIconFontSize};
transition:.5s;
  &:hover{
    font-size:${largerIconFontSizeOnHover};
  }
`

const AttachFileHiddenInput = Styled.input`
width:0;
height:0;
display:none;
`

 const AttachFileArea = (props) => (
  <OutterDiv>
    <AttachFilePicAndDesc><i className="far fa-file"></i><TextSpan>File</TextSpan></AttachFilePicAndDesc>
    <AttachFileHiddenInput type="file" id="attachFileUploadId" /> 
    <AttachFilePlusLabel htmlFor="attachFileUploadId"><i className="fas fa-plus-square"></i></AttachFilePlusLabel>
  </OutterDiv>

)


export default AttachFileArea