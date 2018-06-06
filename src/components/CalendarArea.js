import React from 'react'
import Styled from 'styled-components'

const OutterDiv = Styled.div`
grid-column:1/8;
grid-row:2/4;

display:grid;
grid-template-columns:1fr 1fr;
grid-template-rows:50% 50%;
grid-row-gap:5px;
`
const CalendarPic = Styled.div`
grid-column:1/2;
grid-row:1/2;
`

const CalendarDesc = Styled.div`
grid-column:2/3;
grid-row:1/2;
`

const DeadlineDate = Styled.input`
grid-column:1/2;
grid-row:2/3;
`

const DedlineTime = Styled.input`
grid-column:2/3;
grid-row:2/3;
`


export default (props) => (

  <OutterDiv> 
    <CalendarPic>日曆圖</CalendarPic>
    <CalendarDesc>dead line</CalendarDesc>
    <DeadlineDate placeholder="yyyy/mm/dd"/> <DedlineTime placeholder="hh:mm"/>
  </OutterDiv>
    

)