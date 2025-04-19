import React from "react";
import "../styles/wattingpopup.css"
import { FaStore } from "react-icons/fa";
import { RiErrorWarningFill } from "react-icons/ri";
import { MdOutlineCalendarMonth } from "react-icons/md";

const pointpopup = ({ open, onClose }) => {
    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose(); 
        }
    };

    if (!open) return null;
    
    return(
        <div className="popup-back" onClick={handleBackgroundClick}>
            <div class="popup-main">
                <div class="head-popup">
                    <p>ล็อคที่ B1</p> <p class="status">รอการอนุมัติ</p>
                </div>
                <div class="body-popup">
                    <div class="body-L">
                        <div class="name">
                            จาก <p class="customer-name">ทำดี มีตัง</p>
                        </div>
                        <div class="store">
                            <p> <FaStore /> ร้ายยำอร่อยแซ่บ</p> <br></br>
                        </div>
                        <div class="stall">
                            <p> <RiErrorWarningFill /> B1, B2</p>
                        </div>
                        <div class="month">
                            <p> <MdOutlineCalendarMonth /> รายเดือน (1 ม.ค. 67 - 1 ก.พ. 67)</p>
                        </div>
                        <div class="price">
                            <p>฿16,800</p>
                        </div>
                    </div>

                    <div class="body-R">
                        <div class="point">
                            <p>100/100</p>
                        </div>
                        <div class="cut-del">
                            <p>ตัดคะแนน</p>
                        </div>
                        <div class="cut-del">
                            <p>ลบร้านค้า</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
export default pointpopup