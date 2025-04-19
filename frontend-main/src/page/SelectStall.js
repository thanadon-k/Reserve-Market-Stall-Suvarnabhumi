import { React, useState,useEffect} from "react";
import { GoCheckCircle } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
import "../styles/SelectStall.css";
import Stall from '../components/Stall';
import Positionlock from '../components/lock';
import MultiSelectDate from '../components/SelectDate';


function SelectStall(props) {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [phone, setPhone] = useState("");
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const initialSelectedCol = {};
    const keys = 'ABCDEFGHIJKLMNOPQRST';
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const name = params.get("name");
        const type = params.get("type");
        const phone = params.get("phone");

        setName(name);
        setType(type);
        setPhone(phone);
    }, []);



    console.log(name, type, phone);
    for (let key of keys) {
        initialSelectedCol[key] = 0;
    }
    
    const initialSelectedRow = {};
    for (let i = 1; i <= 20; i++) {
        initialSelectedRow[String(i)] = 0;
    }

    const [selectedCol, setSelectedCol] = useState(initialSelectedCol);
    const [selectedRow, setSelectedRow] = useState(initialSelectedRow);
    const [valueCol, setValueCol] = useState('');
    const [Multiple, setMultiple] = useState([]);
    const [selectedDates, setSelectedDates] = useState([]);


    useEffect(() => {

        if (valueCol !== '') {
        }
    }, [valueCol]);
    const colCallback = (col) => {
        const updatedSelectedCol = {};
        Object.keys(selectedCol).forEach((key) => {
            updatedSelectedCol[key] = key === col ? 1 : 0;
        });
        setSelectedCol(updatedSelectedCol);
        Object.keys(selectedRow).forEach((key) => {
            setSelectedRow((prevSelectedRow) => ({ ...prevSelectedRow, [key]: 0 }));
        });
        setValueCol(col);
    };

    const rowCallback = (row) => {
        setSelectedRow(row);
        console.log(selectedRow)

    };

    const [selectedRent, setSelectedRent] = useState({daily: false, monthly: false});

    const selectDaily = () => {
        setSelectedRent({...selectedRent, daily: !selectedRent.daily, monthly: false});
    };

    const selectMonthly = () => {
        setSelectedRent({...selectedRent, daily: false, monthly: !selectedRent.monthly});
    };
    const handleSelectionChange = (selectedValues) => {
        setMultiple(selectedValues);

      };
      const handleDateChange = (startDate, endDate) => {

        if (startDate && endDate && startDate.getTime() > endDate.getTime()) {
            alert("วันที่เริ่มต้นต้องมาก่อนวันที่สิ้นสุด");
            setStartDate(null);
            setEndDate(null); 
            return;
        }
        setStartDate(startDate);    
        setEndDate(endDate); 
        console.log("Start Date:", startDate);
        console.log("End Date:", endDate);
    };
      
    const handleSubmit = () => {
        if (!startDate || !endDate || !name || !type || !phone) {
            alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
            return;
        }

        window.location.href = `/payment?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&name=${name}&type=${type}&phone=${phone}&stall=${valueCol}&row=${selectedRow}`;
    };

    return (
        <div className="selectpage">
            <div className="nav_reserve">
                <a href='/'>
                <GoChevronLeft size={40} color="gray" style={{ fontWeight: 'bold' }} />
                </a>
                <h2>จองล็อค</h2>
            </div>
            <div className="show-state">
                <div className="back">
                    <div className="store_selectstall"></div>
                    <div className="selectstall_payment"></div>
                </div>
                <div className="front">
                    <div className="store">
                        <div className="symbol">

                            <GoCheckCircle size={40} color="white" style={{ fontWeight: 'bold' }} />

                        </div>
                        <h4>ข้อมูลร้าน</h4>
                    </div>
                    <div className="select_stall">
                        <div className="symbol"></div>
                        <h4>จองล็อค</h4>
                    </div>
                    <div className="payment">
                        <div className="symbol"></div>
                        <h4>จ่ายเงิน</h4>
                    </div>
                </div>
            </div>
            <div className="selectstall">
                <h3>จองล็อค</h3>
                <div className="col">
                    <h4>เลือกแถว</h4>
                    <div className="text_stall">
                        {Object.keys(initialSelectedCol).map((key, index) => {
                            return (
                                <div key={index}>
                                    <Stall text={key} state={1} onSelectionChange={handleSelectionChange} select={selectedCol[key]} stall={(data) => colCallback(data)}/>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="col">
                    <h4>เลือกล็อค</h4>
                    <div className="text_stall">
                    <Positionlock value={valueCol} stall={rowCallback} />
                    </div>
                </div>
                <MultiSelectDate handleDateChange={handleDateChange} />
                {/* <div className="radio">
                    <div>
                        <div onClick={() => selectDaily()}></div>
                        {selectedRent.daily && <div className="select_rent"></div>}
                        <h4>รายวัน</h4>
                    </div>
                    <div>
                        <div onClick={() => selectMonthly()}></div>
                        {selectedRent.monthly && <div className="select_rent"></div>}
                        <h4>รายเดือน</h4>
                    </div>
                </div> */}
                <div className="save" onClick={handleSubmit}>
                    <h2>บันทึก</h2>
                </div>
            </div>
        </div>
    );
}

export default SelectStall;