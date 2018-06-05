import React from 'react'
import Styled from 'styled-components'

const OutterDiv = Styled.div`
grid-column:1/8;
grid-row:2/4;

display:grid;
grid-template-columns:1fr 1fr;
grid-template-rows:30% 70%;
grid-row-gap:5px;
`
const calendarPic = Styled.div`
grid-colum:1/2;
grid-row:1/2;
`

const calendarDesc = Styled.div`
grid-colum:2/3;
grid-row:2/3;
`


export default (props) => (

<OutterDiv> 
    <calendarPic>日曆圖</calendarPic>
    <calendarDesc>dead line</calendarDesc>
</OutterDiv>
    

)