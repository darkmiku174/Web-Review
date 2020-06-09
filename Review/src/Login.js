import React, { Component } from 'react';
import './Login.css';

class Login extends Component {

    onShow = () => {
        console.log(1);
    }

    render() {
        return (
            <div>
                <header>
                    <img src={require("./Pic/Logo2.jpg")} alt="Ảnh bị lỗi"/>
                </header>
                <main>
                    <div className="container">
                        <div className="login-form">
                            <form>
                                <h1>MEGP.COM Đăng Nhập</h1>
                                    <input type="text" placeholder="Username" className="input-box"/>
                                    <input type="password" placeholder="Mật khẩu" className="input-box"/>
                                <div className="btn-box">
                                    <button type="submit" >
                                        Đăng nhập
                                    </button>
                                </div>
                                <div className="create-acc">
                                     <center>
                                        <h1>Bạn chưa có tài khoản ?</h1>
                                    </center>
                                    <button type="submit" className="block">
                                         Đăng ký
                                    </button>
                                </div>
                            </form>   
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default Login;
