import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import "../styles/SelectDate.css";

const SelectDate = ({ handleDateChange }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const shouldDisableDate = (date) => {
    const formattedDate = date.toISOString().slice(0,10);
    const today = new Date().toISOString().slice(0,10);
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate());
    const tomorrowFormatted = tomorrow.toISOString().slice(0,10);
  
    return (
      formattedDate === today ||  
      formattedDate > tomorrowFormatted 
    );
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
    handleDateChange(date, endDate);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    handleDateChange(startDate, date);
  };

  return (
    <div className='select_date'>
      <h4>เลือกวัน</h4>
      <div className="date_picker_container">
        <div className="date_picker_item">
          <label>วันที่เริ่ม:</label>
          <DatePicker 
            className='box_date'
            selected={startDate}
            onChange={(date) => handleStartDateChange(date)} 
            placeholderText="เลือกวันที่"
            shouldCloseOnSelect={true}
            filterDate={shouldDisableDate}
            dateFormat="yyyy-MM-dd"
          />
        </div>
        <div className="date_picker_item">
          <label>วันที่สิ้นสุด:</label>
          <DatePicker
            className='box_date'
            selected={endDate}
            onChange={(date) => handleEndDateChange(date)} 
            placeholderText="เลือกวันที่"
            shouldCloseOnSelect={true}
            filterDate={shouldDisableDate}
            dateFormat="yyyy-MM-dd"
          />
        </div>
      </div>
    </div>
  );
};

export default SelectDate;
