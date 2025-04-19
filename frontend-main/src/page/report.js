import React, { useState } from 'react';
import "../styles/Report.css";
import { GoChevronLeft } from "react-icons/go";

const Report = () =>{
    const [location, setLocation] = useState('');
    const [report, setReport] = useState('');
    const [file, setFile] = useState(null);
    const [showFileAlert, setShowFileAlert] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            if (location.trim().length > 50 || report.trim().length > 127 || location.trim().length === 0 || report.trim().length === 0) {
                setShowAlert(true);
                alert('กรุณากรอกข้อมูลให้ครบถ้วนและไม่เกินความยาวที่กำหนด (สถานที่ไม่เกิน 50 ตัวอักษร, หมายเหตุไม่เกิน 127 ตัวอักษร)');
            }
            if (file === null) {
                alert('กรุณาเลือกไฟล์รูปภาพ');
            }
            else{

            const formData = new FormData();
            formData.append('location', location);
            formData.append('report', report);
            formData.append('file', file);

            console.log({ location, report, file });

            const response = await fetch('http://localhost:5000/report', {
                method: 'POST',
                headers: {
                    'api-key': '2ff20d0d99465c2d929666dc96d0620dbbc48b2d79f575a3784ae786b76628a6'
                },
                body: formData
            });

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            console.log('Report submitted successfully!');
            setShowAlert(false);
            setShowFileAlert(false);
            setLocation('');
            setReport('');
            setFile(null);
            alert('ขอบคุณสำหรับการรายงานปัญหา');
            window.location.href = '/';

        }
        } catch (error) {
            console.error('Error submitting report:', error);
        }
        
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
        if (selectedFile && allowedTypes.includes(selectedFile.type)) {
            setFile(selectedFile);
        } else {
            setFile(null);
            alert('กรุณาเลือกไฟล์รูปภาพที่เป็นนามสกุล .jpg, .jpeg หรือ .png');

        }
    };

    return(
        <div className="reportpage">
            <div className="nav_report">
                <a href='/'>
                <GoChevronLeft size={40} color="gray" style={{ fontWeight: 'bold' }} />
                </a>
                <h2>รายงาน</h2>
            </div>
            <form className='location_form' onSubmit={handleSubmit}>
                <input
                    type="text"
                    className='input_small'
                    placeholder="ระบุสถานที่"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                />
                <textarea
                    className='input_large'
                    placeholder="ระบุหมายเหตุ"
                    value={report}
                    onChange={(e) => setReport(e.target.value)}
                    required
                />
                <p className='upload_head'>อัพโหลดรูปภาพ</p>
                <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".jpg, .png, .jpeg"
                />
                <button type="submit">รายงาน</button>
            </form>

        </div>
    );
}

export default Report;
