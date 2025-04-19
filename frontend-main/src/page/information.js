import React, { useState } from 'react';
import "../styles/information.css";

const Report = () =>{
    const [location, setLocation] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('https://example.com/api/report', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ location, notes })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Handle success
            console.log('Report submitted successfully!');
        } catch (error) {
            // Handle error
            console.error('Error submitting report:', error);
        }
    };

    return(
        <div>
            <div class="head_info">
                <div class="txt_head_info">
                    <p>ข้อมูลส่วนตัว</p>
                </div>
                <div >
                    <p class="score">100/100</p>
                </div>
            </div>

            <div class="container-info">
                <div class="form-group-info">
                    <div class="infor-name">
                        <label for="username">ชื่อผู้ใช้</label>
                        <p id="username" name="username">test</p>
                    </div>
                    <div class="info-btn">
                        <button type="submit" class="btn-info">เปลี่ยน</button>
                    </div>
                </div>

                <div class="form-group-info">
                    <div class="infor-name">
                        <label for="username">อีเมล</label>
                        <p id="username" name="username">testtest@gmail.com</p>
                    </div>
                    <div class="info-btn">
                        <button type="submit" class="btn-info">เปลี่ยน</button>
                    </div>
                </div>

                <div class="form-group-info">
                    <div class="infor-name">
                        <label for="username">รหัสผ่าน</label>
                        <p id="username" name="username">***************</p>
                    </div>
                    <div class="info-btn">
                        <button type="submit" class="btn-info">เปลี่ยน</button>
                    </div>
                </div>
            </div>
           
            <button type="submit" class="logout-btn">
                ออกจากระบบ
            </button>
           
        </div>
    );
}

export default Report;
