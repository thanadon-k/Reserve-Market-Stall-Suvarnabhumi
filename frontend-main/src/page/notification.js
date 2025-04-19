import React, { useState, useEffect } from 'react';
import "../styles/notification.css";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GoChevronLeft } from "react-icons/go";

const Notification = () =>{
    const [reports, setReports] = useState([]);

    const fetchReports = async () => {
        try {
            const response = await fetch('http://localhost:5000/report/all', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': '2ff20d0d99465c2d929666dc96d0620dbbc48b2d79f575a3784ae786b76628a6'
                }
            });
            if (!response.ok) {
                throw new Error('Failed to fetch reports');
            }
            const data = await response.json();
            console.log(data);
            setReports(data);
        } catch (error) {
            console.error('Error fetching reports:', error);
        }
    };

    // เรียกใช้ fetchReports เมื่อ Component ถูกโหลดครั้งแรก
    useEffect(() => {
        fetchReports();
    }, []);

    return(
        <div className='notification_page'>
            <div className="head_info">
                <div className="txt_head_info">
                    <a href='/'>
                    <GoChevronLeft size={40} color="gray" style={{ fontWeight: 'bold' }} />
                    </a>
                    <h2>การแจ้งเตือน</h2>
                </div>
            </div>

            <div className="container-noti">
                {reports.map((report, index) => (
                    <div className="form-group-noti" key={index}>
                        <div className="noti-name">
                            <label htmlFor="username">ปัญหา {report.location}</label>
                            <p id="username" name="username">ที่ {report.report}</p>
                        </div>
                        <div className="icon-noit">
                            {report.status === "1" && <span style={{ color: 'red' }}>แก้ไขแล้ว</span>}
                            {report.status === "2" && <span style={{ color: 'green' }}>กำลังดำเนินการ</span>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Notification;
