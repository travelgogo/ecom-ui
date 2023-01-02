import React from "react";
import { DatePicker, Space } from 'antd';
import type { DatePickerProps } from 'antd';
import './index.scss'
import moment from "moment";

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };
const DatePickerControl = (props: any) =>{
    return (
        <>
            <div className='datepicker-control'>
                <div className='datepicker-control__lable'>{props.data.name}</div>
                <Space direction="vertical">
                    <DatePicker 
                        size="large" 
                        defaultValue={ moment(new Date().toLocaleDateString(),'MM/DD/yyyy')} 
                        onChange={onChange}/>
                </Space>
            </div>
            
        </>
    );
}
export default DatePickerControl;