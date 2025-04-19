import React from "react";
import "../styles/popup.css"

const Popup = ({ open, onClose }) => {
    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose(); 
        }
    };

    if (!open) return null;
    return (
        <div className="popup_stateless">
            <div className="popup-back" onClick={handleBackgroundClick}>
                <div className="popup-main">
                    <div className="head-popup">
                        <p>ล็อคที่ B1</p> <p className="status">ห้ามจองล็อค</p>
                    </div>
                    <div className="body-popup">
                        <p>ยังไม่มีการจอง</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Popup;
