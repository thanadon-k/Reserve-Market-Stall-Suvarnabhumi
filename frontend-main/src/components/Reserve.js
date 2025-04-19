import React, { useState } from 'react';
import "../styles/Reserve.css";
import { FaStore } from "react-icons/fa";
import { RiErrorWarningFill } from "react-icons/ri";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { GoTrash } from "react-icons/go";

const Reserve = () => {
    return (
        <div className="reserved">
            <div className="infor-left">
                <div>
                    <FaStore /> 
                    <h4 className="name">ร้านยำอร่อยแซ่บอร่อย</h4>
                </div>
                <div>
                    <RiErrorWarningFill /> 
                    <h4 className="stall_reserved">[B0, B1]</h4>
                </div>
                <div>
                    <MdOutlineCalendarMonth /> 
                    <h4 className="date">[รายเดือน] 1 ม.ค 67 - 1 ก.พ. 67</h4>
                </div>
                <div>
                    <h4 className="price">฿16,800</h4>
                </div>
            </div>
            <div className="infor-rigth">
                <div className="delete">
                    <GoTrash size={20} color="red" style={{ fontWeight: 'bold' }}/>
                </div>
                <div className="state">รอ</div>
            </div>
        </div>

    );
}

export default Reserve;