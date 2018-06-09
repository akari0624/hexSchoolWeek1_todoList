import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'


const iconFontSize = '20px'

const OutterDiv = Styled.div`
grid-column:1/7;
grid-row:6/8;

display:grid;
grid-template-columns:20% 80%;
grid-template-rows:20px 110px;
grid-row-gap:10px;
`
const CommentPicAndDesc = Styled.div`
grid-column:1/3;
grid-row:1/2;
padding-left:30px;
font-size:${iconFontSize};
`

const TextSpan = Styled.span`
margin-left:20px;
`

const CommentTextArea = Styled.textarea`
grid-column:1/3;
grid-row:2/3;
padding:0px 20px;
margin:0px 20px;
resize:none;
`




const CommentArea = (props) => (

  <OutterDiv> 
    <CommentPicAndDesc><i className="far fa-comment-dots"></i><TextSpan>Comment</TextSpan></CommentPicAndDesc>
    <CommentTextArea placeholder="Type your memo here…" value={props.data} onChange={props.onCommentChange} /> 
  </OutterDiv>
    

)

CommentArea.propTypes = {
  data:PropTypes.string,
  onCommentChange:PropTypes.func,

}


export default CommentArea