import React from "react";
import "../styles/addAdmin.css";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { ImBin } from "react-icons/im";
import { RiShutDownLine } from "react-icons/ri";

function ViewRecipt() {
  return (
    <div className="content-body">
      <div className="content-body-col">
        <div className="content-body-L">
          <div className="content-text">
            <IoPersonCircleOutline aria-label="ผู้ดูแลตลาด" />
            <p>ผู้ดูแลตลาด</p>
          </div>
          <div className="content-text">
            <BsFileEarmarkBarGraph aria-label="การเงิน" />
            <p>การเงิน</p>
          </div>
          <div className="content-text" id="logout">
            <RiShutDownLine aria-label="ออกจากระบบ" />
            <p>ออกจากระบบ</p>
          </div>
        </div>

        <div className="content-body-R">
          <p>ขอดูรายรับ</p>
          <div className="input-form">
            <form>
              <label htmlFor="startDate">เริ่มวันที่</label>
              <input
                type="date"
                id="startDate"
                required
              />
              <label htmlFor="endDate">ถึงวันที่</label>
              <input
                type="date"
                id="endDate"
                required
              />
              <button className="btn-register" type="submit">ดาวน์โหลด</button>
            </form>
          </div>

          <div>
            <p>ประวัติการขอดู</p>
            <div className="admin">
              <p>test test</p> <ImBin aria-label="ลบ" />
            </div>
            <div className="admin">
              <p>test test</p> <ImBin aria-label="ลบ" />
            </div>
            <div className="admin">
              <p>test test</p> <ImBin aria-label="ลบ" />
            </div>
            <div className="admin">
              <p>test test</p> <ImBin aria-label="ลบ" />
            </div>
            <div className="admin">
              <p>test test</p> <ImBin aria-label="ลบ" />
            </div>
            <div className="admin">
              <p>test test</p> <ImBin aria-label="ลบ" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewRecipt;