import React, { useState, useEffect } from "react";
import { BsShop } from "react-icons/bs";
import { GoCheckCircle, GoChevronLeft } from "react-icons/go";
import "../styles/payment.css";

function Payment() {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [phone, setPhone] = useState("");
    const [stall, setStall] = useState("");
    const [rows, setRows] = useState([]);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [duration, setDuration] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const name = params.get("name") || "";
        const type = params.get("type") || "";
        const phone = params.get("phone") || "";
        const stall = params.get("stall") || "";
        const rowParam = params.get("row");
        const rows = rowParam ? rowParam.split(",") : [];
        const startDateParam = params.get("startDate");
        const endDateParam = params.get("endDate");

        setName(name);
        setType(type);
        setPhone(phone);
        setStall(stall);
        setRows(rows);
        setStartDate(startDateParam ? new Date(startDateParam) : null);
        setEndDate(endDateParam ? new Date(endDateParam) : null);

    }, []);
    useEffect(() => {
        if (startDate && endDate) {
            const diffTime = Math.abs(endDate - startDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            setDuration(diffDays > 1 ? parseInt(diffDays) : 1);
        }
    }, [startDate, endDate]);
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
        if (selectedFile && allowedTypes.includes(selectedFile.type)) {
            setSelectedFile(selectedFile);
        } else {
            setSelectedFile(null);
            alert("Please select a valid image file (jpg, jpeg, or png).");
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!selectedFile) {
            console.error("No file selected.");
            return;
        }

        const formData = new FormData();
        formData.append("file", selectedFile);
        formData.append("name", name);
        formData.append("type", type);
        formData.append("phone", phone);
        formData.append("stall", stall);
        formData.append("rows", rows);
        formData.append("startDate", startDate);
        formData.append("endDate", endDate);
        formData.append("duration", duration);

        try {
            const response = await fetch("http://localhost:5000/stall", {
                method: "POST",
                body: formData,
                headers: {
                    "api-key": "2ff20d0d99465c2d929666dc96d0620dbbc48b2d79f575a3784ae786b76628a6",
                },
            });

            if (response.ok) {
                console.log("File uploaded successfully");
                alert("ขอบคุณที่ทำการจอง !!!")
                window.location.href = 'http://localhost:3000/';
            } else {
                console.error("Failed to upload file");
            }
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    };

    return (
        <div className="payment_page">
            <div className="head_payment">
                <a href="/">
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
                        <div className="symbol">
                            <GoCheckCircle size={40} color="white" style={{ fontWeight: 'bold' }} />
                        </div>
                        <h4>จองล็อค</h4>
                    </div>
                    <div className="payment">
                        <div className="symbol"></div>
                        <h4>จ่ายเงิน</h4>
                    </div>
                </div>
            </div>

            <div className="payment_detail">
                <div className="detail_head">
                    <h3><BsShop /> จ่ายเงิน</h3>
                    <div className="qr">
                        <img src={process.env.PUBLIC_URL + '/qrcode_104094551_9b29e5cf42bcd30c9e8c63a962157753.png'} alt="QR Code" width="170px" height="170px" />
                    </div>
                </div>
                <div className="payment_bank">
                    <p>ธนาคารกสิกรไทย</p>
                </div>
                <div className="payment-content">
                    <div className="payment-L">
                        <div className="payment_name">
                            <p className='name'>นาย เทพซ่า ฮาฮาบวก</p>
                            <p className='num'>1234567890</p>
                        </div>
                        <div className="payment-stall">
                            <p>จองล็อค {stall} {rows.join(', ')}</p>
                            <p>{rows.length * 50}</p>
                        </div>
                        {startDate && endDate && (
                            <div className="payment-stall">
                                <p>ตั้งแต่วันที่ {startDate.toLocaleDateString()} <br/>ถึง {endDate.toLocaleDateString()}</p>
                                <p className='price'>฿{duration * (rows.length*50)}</p>
                            </div>
                        )}
                        <div className="payment-bill">
                            <p>อัพโหลดรูปภาพสลิป</p>
                            <input type="file" accept=".jpg, .jpeg, .png" className="btn-bill" onChange={handleFileChange} />
                        </div>
                    </div>
                </div>
                <button className="btn-submit" onClick={handleSubmit}>จองเลย</button>
            </div>
        </div>
    );
}

export default Payment;
