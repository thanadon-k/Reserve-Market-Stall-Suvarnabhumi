import React, { useState } from "react";
import Popup from './components/Popup'
import Waittingpopup from './components/Waittingpopup'
import PointPopup from './components/PointPopup'

function Testpopup(){
    const [openModal, setOpenModal] = useState(false)
    const [openModal2, setOpenModal2] = useState(false)
    const [openModal3, setOpenModal3] = useState(false)

    const handleClosePopup = () => {
        setOpenModal(false); 
    };

    const handleClosePopup2 = () => {
        setOpenModal2(false); 
    };

    const handleClosePopup3 = () => {
        setOpenModal3(false); 
    };

    return(
        <div>
            <button onClick={() => setOpenModal(true)}>ห้ามจองล็อค</button>
            <Popup open={openModal} onClose={handleClosePopup} />

            <button onClick={() => setOpenModal2(true)}>รอการอนุมัติ</button>
            <Waittingpopup open={openModal2} onClose={handleClosePopup2} />

            <button onClick={() => setOpenModal3(true)}>คะแนน</button>
            <PointPopup open={openModal3} onClose={handleClosePopup3} />
        </div>
    );
}
export default Testpopup;
