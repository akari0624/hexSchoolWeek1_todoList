import React from 'react'
import Styled from 'styled-components'
import { DatePicker} from 'antd'
import 'antd/lib/date-picker/style'
import 'antd/lib/time-picker/style'
import locale from 'antd/lib/date-picker/locale/zh_TW'

const iconFontSize = '20px'




const OutterDiv = Styled.div `
grid-column:1/7;
grid-row:2/4;

display:grid;
grid-template-columns:50% 50%;
grid-template-rows:50% 50%;
grid-row-gap:5px;
`
const CalendarPicAndDesc = Styled.div `
grid-column:1/3;
grid-row:1/2;

font-size:${iconFontSize};
padding-left:30px;
`

const TextSpan = Styled.span`
margin-left:20px;
`



const DatePickerStyle = {
  gridColumn: '1/3',
  gridRow: '2/3',
  marginLeft:'30px',

}

const TimePickerStyle = {
  gridColumn: '2/3',
  gridRow: '2/3',
  marginLeft:'10px',

}

const onDateInputChange = (date) => console.log(date.toString())

const onTimeInputChange = (time) => console.log(time.toString())


const onDateAndTimeOk = (value) => {
  console.log('onOK', value)
}

const DateAndTimePicker = (props) => (


  

  <OutterDiv>
    <CalendarPicAndDesc><i className="far fa-calendar-alt"></i>  <TextSpan>dead line</TextSpan></CalendarPicAndDesc>
    <DatePicker showTime format="YYYY-MM-DD HH:mm" onChange={onDateInputChange} locale={locale} style={DatePickerStyle} onOk={onDateAndTimeOk} /> 

  </OutterDiv>

)

export default DateAndTimePicker