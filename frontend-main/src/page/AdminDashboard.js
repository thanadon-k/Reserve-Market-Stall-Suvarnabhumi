import React, { useState, useEffect } from "react";
import "../styles/AdminDashboard.css";

function AdminDashboard() {
    const [notificationData, setNotificationData] = useState([]);
    const [stallData, setStallData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/stall/all', {
            method: 'GET',
            headers: {
                "api-key": "2ff20d0d99465c2d929666dc96d0620dbbc48b2d79f575a3784ae786b76628a6",
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const modifiedData = data.map(item => ({
                ...item,
                filePath: item.path_to_imag_slip.substring(item.path_to_imag_slip.indexOf("Public/") + 7)
            }));
            
            setStallData(modifiedData);
            const mergedData = mergeDataByName(modifiedData);
            setStallData(mergedData); 
        })
        .catch(error => {
            console.error('Error fetching stall data:', error);
        });
    }, []);
    useEffect(() => {
        fetch('http://localhost:5000/report/all', {
            method: 'GET',
            headers: {
                "api-key": "2ff20d0d99465c2d929666dc96d0620dbbc48b2d79f575a3784ae786b76628a6",
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const modifiedData = data.map(item => ({
                ...item,
                filePath: item.filePath.substring(item.filePath.indexOf("Public/") + 7)
            }));
            setNotificationData(modifiedData);
        })
        .catch(error => {
            console.error('Error fetching notification data:', error);
        });
    }, []); 

    const handleNotificationPut = (notification) => {
        console.log(notification);
        fetch(`http://localhost:5000/report/${notification.id_report}`, {
            method: 'PUT',
            headers: {
                "api-key": "2ff20d0d99465c2d929666dc96d0620dbbc48b2d79f575a3784ae786b76628a6",
            },
        })
        .then(response => {
            if (response.ok) {
                console.log('Notification data successfully updated.');
                alert("ส่งแจ้งเตือนไปแล้ว")
                window.location.reload();
            } else {
                console.error('Failed to update notification data.');
            }
        })
        .catch(error => {
            console.error('Error updating notification data:', error);
        });
    };

    const  handleNotificationDelete = (notification) => {
        fetch(`http://localhost:5000/report/${notification.id_report}`, {
            method: 'DELETE',
            headers: {
                "api-key": "2ff20d0d99465c2d929666dc96d0620dbbc48b2d79f575a3784ae786b76628a6",
            },
        })
        .then(response => {
            if (response.ok) {
                console.log('Notification data successfully deleted.');
                alert("ลบแจ้งเตือนแล้ว")
                window.location.reload();
            } else {
                console.error('Failed to delete notification data.');
            }
        })
        .catch(error => {
            console.error('Error deleting notification data:', error);
        });
    };


    const handleNotificationPut_wait = (notification) => {
        console.log(notification);
        fetch(`http://localhost:5000/report/wait/${notification.id_report}`, {
            method: 'PUT',
            headers: {
                "api-key": "2ff20d0d99465c2d929666dc96d0620dbbc48b2d79f575a3784ae786b76628a6",
            },
        })
        .then(response => {
            if (response.ok) {
                console.log('Notification data successfully updated.');
                alert("กำลังดำเนินการ")
                window.location.reload();
            } else {
                console.error('Failed to update notification data.');
            }
        })
        .catch(error => {
            console.error('Error updating notification data:', error);
        }
        );
    };

    const handleStallPut = (stallData) => {

        fetch( `http://localhost:5000/stall/${stallData.ID_stall}`  , {
            method: 'PUT',
            headers: {
                "api-key": "2ff20d0d99465c2d929666dc96d0620dbbc48b2d79f575a3784ae786b76628a6",
            },
        })
        .then(response => {
            if (response.ok) {
                console.log('Stall data successfully updated.');
                alert("อนุมัติแล้ว")
                window.location.reload();
            } else {
                console.error('Failed to update stall data.');
            }
        })
        .catch(error => {
            console.error('Error updating stall data:', error);
        });
    };
    const handleStallDelete = (stallData) => {
        fetch(`http://localhost:5000/stall/both/${stallData.ID_stall}`, {
            method: 'DELETE',
            headers: {
                "api-key": "2ff20d0d99465c2d929666dc96d0620dbbc48b2d79f575a3784ae786b76628a6",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(stallData) 
        })
        .then(response => {
            if (response.ok) {
                console.log('Stall data successfully deleted.');
                alert("ไม่อนุมัติแล้ว")
                window.location.reload();
            } else {
                console.error('Failed to delete stall data.');
            }
        })
        .catch(error => {
            console.error('Error deleting stall data:', error);
        });
    };


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
    return (
        <div className="admin_dashboard">
            <div className='nav'>
                <div className="nav_L">
                    <div className="circle"></div>
                    <div className="infor_admin">
                        <p className="name_admin">Thamdee Meesatang</p>
                        <p className="sub_title">ผู้ดูแลตลาด</p>
                    </div>
                </div>
                <div className="divider"></div>

            </div>
            <div className='financial'>
                <div className='notification'>
                    <h4>แสดงการรายงาน</h4>
                    {notificationData.map((notification, index) => (
                        <div key={index}>
                            <p className="name_report">ที่ไหน {notification.location} </p> 
                            <p className="place">เหตุ {notification.report}</p>
                            <p className="place">สถานะ {notification.status === "0" ? "รอ" : notification.status === "1" ? "แก้ไขแล้ว" : "กำลังดำเนินการ"}</p>
                            <a href={`http://localhost:5000/${notification.filePath}`} target="_blank" className="picture_wish"> รูปภาพประกอบ </a>
                            {notification.status === 0 && <button onClick={() => handleNotificationPut(notification)}>ได้รับการแก้ไขแล้ว</button>}
                            {notification.status === 0 && <button onClick={() => handleNotificationPut_wait(notification)}>กำลังดำเนินการ</button>}
                            <button onClick={() => handleNotificationPut(notification)}>ได้รับการแก้ไขแล้ว</button>
                            <button onClick={() => handleNotificationPut_wait(notification)}>กำลังดำเนินการ</button>
                            <button onClick={() => handleNotificationDelete(notification)}>ลบ</button>
                        </div>
                    ))}
                </div>

            </div>
            <div className='financial'>
            <div className='notification'>
                    <h4>แสดงการขออนุมัติ</h4>
                    {stallData.filter(data => data.status === "0").map((data, index) => (
                        <div key={index}>
                            <p className="name_report">ชื่อร้านค้า {data.Name_shop} :</p> 
                            <p className="place">lock {data.combinedKey}</p>
                            <p className="place">สถานะ {data.status === "0" ? "รอ" : ""}</p>
                            <p className="date">ตั้งแต่วันที่ {new Date(data.date_start).toLocaleDateString()} - {new Date(data.date_end).toLocaleDateString()}</p>
                            <a href={`http://localhost:5000/${data.filePath}`} target="_blank" className="picture_wish"> รูปภาพประกอบ </a>
                            <button onClick={() => handleStallPut(data)}>อนุมัติ</button>
                            <button onClick={() => handleStallDelete(data)}>ไม่อนุมัติ</button>
                        </div>
                    ))}

                </div>
                </div>
        </div>
    );
}

export default AdminDashboard;
