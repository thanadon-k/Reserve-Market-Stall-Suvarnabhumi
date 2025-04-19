import React from "react";
import "../styles/addAdmin.css";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { ImBin } from "react-icons/im";
import { RiShutDownLine } from "react-icons/ri";

function addAdmin (){
    return(
        <div class="content-body">
            <div class="content-body-col">
                <div class="content-body-L">
                    <div class="content-text">
                        <IoPersonCircleOutline /> <p>ผู้ดูแลตลาด</p> 
                    </div>
                    <div class="content-text">
                        <BsFileEarmarkBarGraph /> <p>การเงิน</p>
                    </div>
                    <div class="content-text" id="logout">
                        <RiShutDownLine /> <p>ออกจากระบบ</p>
                    </div>
                </div>

                <div class="content-body-R">
                    <p>การเพิ่มผู้ดูแลตลาด</p>
                    <div class="input-form">
                        <form>
                            <input 
                                type="text"
                                placeholder="ชื่อผู้ใช้"
                                required
                            />
                            <input 
                                type="email"
                                placeholder="อีเมล"
                                required
                            />
                            <input 
                                type="password"
                                placeholder="รหัสผ่าน"
                                required
                            />
                            <input 
                                type="password"
                                placeholder="ยืนยันรหัสผ่าน"
                                required
                            />
                            <button class="btn-register">ลงทะเบียน</button>
                        </form>
                    </div>

                    <div>
                        <p>ผู้ดูแลตลาด</p>
                        <div class="admin">
                            <p>test test</p> <ImBin />
                        </div>
                        <div class="admin">
                            <p>test test</p> <ImBin />
                        </div>
                        <div class="admin">
                            <p>test test</p> <ImBin />
                        </div>
                        <div class="admin">
                            <p>test test</p> <ImBin />
                        </div>
                        <div class="admin">
                            <p>test test</p> <ImBin />
                        </div>
                        <div class="admin">
                            <p>test test</p> <ImBin />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default addAdmin;