import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaFileAlt, FaBell, FaUser, FaTrash,FaStore } from 'react-icons/fa';
import { MdOutlineCalendarMonth } from "react-icons/md";
import { RiErrorWarningFill } from "react-icons/ri";
import "../styles/Home.css";

function Home() {
    const [reservationData, setReservationData] = useState(null);
    const [fetchKey, setFetchKey] = useState(0);

    useEffect(() => {
        fetch('http://localhost:5000/stall/all', {
            headers: {
                'api-key': '2ff20d0d99465c2d929666dc96d0620dbbc48b2d79f575a3784ae786b76628a6'
            }
        })
        .then(response => response.json())
        .then(data => {
            const mergedData = mergeDataByName(data);
            setReservationData(mergedData);
            console.log(mergedData);
            
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, [fetchKey]);

    const mergeDataByName = (data) => {
        const mergedData = {};
        data.forEach(item => {
            const combinedKey = `${item.lock_key}${item.num}`;
            if (!mergedData[item.Name_shop]) {
                mergedData[item.Name_shop] = {
                    ...item,
                    combinedKey: [combinedKey],
                    duration: calculateDuration(item.date_start, item.date_end)
                };
            } else {
                mergedData[item.Name_shop].combinedKey.push(combinedKey);
            }
        });
        return Object.values(mergedData);
    };

    const calculateDuration = (start, end) => {
        const startDate = new Date(start);
        const endDate = new Date(end);
        const duration = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
        return duration;
    };

    const handleDelete = (id) => {
        const confirmDelete = window.confirm('คุณต้องการลบข้อมูลนี้ใช่หรือไม่?');
        if (confirmDelete) {
            fetch(`http://localhost:5000/stall/${id}`, {
                method: 'DELETE',
                headers: {
                    'api-key': '2ff20d0d99465c2d929666dc96d0620dbbc48b2d79f575a3784ae786b76628a6'
                }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Delete successful:', data);
                setFetchKey(prevKey => prevKey + 1);
            })
            .catch(error => {
                console.error('Error deleting data:', error);
            });
        }
    };


    return (
        <div className="home">
            <h2>หน้าหลัก</h2>
            <div className="select">
                <div>
                    <a href='/createStore' className="icon-link">
                        <div><FaCalendarAlt /></div>
                        <h4>จองล็อค</h4>
                    </a>
                </div>
                <div>
                    <a href='/report' className="icon-link">
                        <div><FaFileAlt /></div>
                        <h4>รายงาน</h4>
                    </a>
                </div>
                <div>
                    <a href='/notification' className="icon-link">
                        <div><FaBell /></div>
                        <h4>แจ้งเตือน</h4>
                    </a>
                </div>
                <div>
                    <div><FaUser /></div>
                    <h4>ข้อมูลส่วนตัว</h4>
                </div>
            </div>
            <h3>การจองของฉัน</h3>
            <div className="list_reserved">
            {reservationData && reservationData.map((item, index) => (
                    <div className="reserved" key={index}>
                        <div className="infor-left">
                            <div>
                                <h4 className="name"><FaStore/>   {item.Name_shop}</h4>
                            </div>
                            <div>
                                <h4 className="stall_reserved">
                                    <RiErrorWarningFill/>   {item.combinedKey.map((key, idx) => (
                                        <span key={idx}>
                                            {idx > 0 && ", "}
                                            {key}
                                        </span>
                                    ))}
                                </h4>
                            </div>
                            <div>
                                <h4 className="date"><MdOutlineCalendarMonth/>   {new Date(item.date_start).toLocaleDateString()} - {new Date(item.date_end).toLocaleDateString()}</h4>
                            </div>
                            <div>
                                <h4 className="price">฿{item.duration * 50} บาท</h4>
                            </div>
                        </div>
                        <div className="infor-rigth">
                            <FaTrash className="delete" onClick={() => handleDelete(item.Name_shop)} />
                            <div className="state" style={{ color: item.status === "1" ? 'green' : item.status === "0" ? 'white' : 'red' }}>
                                {item.status === "1" ? 'อนุมัติ' : item.status === "0" ? 'รอ' : 'ไม่อนุมัติ'}
                            </div>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
}

export default Home;
