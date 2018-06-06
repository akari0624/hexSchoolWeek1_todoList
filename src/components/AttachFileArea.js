import React from 'react'
import Styled from 'styled-components'

const OutterDiv = Styled.div`
grid-column:1/8;
grid-row:4/6;

display:grid;
grid-template-columns:1fr 1fr;
grid-template-rows:50% 50%;
grid-row-gap:5px;
`

const AttachFilePic = Styled.div`
grid-column:1/2;
grid-row:1/2;
`

const AttachFileDesc = Styled.div`
grid-column:2/3;
grid-row:1/2;
`

const AttachFilePlusLabel = Styled.label`
grid-column:1/2;
grid-row:2/3
background-color:red;
`

const AttachFileHiddenInput = Styled.input`
width:0;
height:0;
display:none;
`

export default (props) => (
  <OutterDiv>
    <AttachFilePic>上傳檔案 圖 </AttachFilePic>
    <AttachFileDesc> File</AttachFileDesc>
    <AttachFileHiddenInput type="file" id="attachFileUploadId"/> 
    <AttachFilePlusLabel htmlFor="attachFileUploadId"> + </AttachFilePlusLabel>
  </OutterDiv>

)
