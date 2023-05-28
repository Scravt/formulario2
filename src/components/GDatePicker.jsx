import React from 'react'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

const GDatePicker = () => {
    const [startDate, setStartDate] = React.useState(new Date());
    return  <DatePicker selected={startDate} onChange={(Date) => setStartDate(Date)} />;
}
export default GDatePicker
