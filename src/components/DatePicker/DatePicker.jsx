import React from 'react'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function Datepicker(props) {

    const { label, value, onChange } = props;
    return (
        <DatePicker
          label={label}
          value={value}
          onChange={(newValue) => onChange(newValue)}
        />
    )
}