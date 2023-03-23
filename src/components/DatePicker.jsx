import React from 'react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const DatePicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    regreso (
      <DatePicker seleccionado={startDate} en cambio={(Date) => setStartDate(Date)} />
    );
}
export default DatePicker
