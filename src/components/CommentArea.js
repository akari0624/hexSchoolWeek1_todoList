import React from 'react'
import Styled from 'styled-components'

const OutterDiv = Styled.div`
grid-column:1/7;
grid-row:6/8;

display:grid;
grid-template-columns:1fr 1fr;
grid-template-rows:50% 50%;
grid-row-gap:5px;
`
const CommentPic = Styled.div`
grid-column:1/2;
grid-row:1/2;
`

const CommentDesc = Styled.div`
grid-column:2/3;
grid-row:1/2;
`

const CommentTextArea = Styled.textarea`
grid-column:1/3;
grid-row:2/3;
resize:none;
`




export default (props) => (

  <OutterDiv> 
    <CommentPic>備註圖</CommentPic>
    <CommentDesc>Comment</CommentDesc>
    <CommentTextArea placeholder="Type your memo here…" /> 
  </OutterDiv>
    

)