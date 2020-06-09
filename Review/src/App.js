import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <div id="top">
                </div>
                <div id="main"> 

                    <div className="row">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <div className="container">
                                <img src={require("./Pic/matrix.jpg")} id="img1" alt="Ảnh bị lỗi" />
                                <button type="button" style={{color: 'black'}} className="centered">
                                    <h1>Phim Ảnh</h1>
                                    <p>
                                        Hòa mình vào thế giới điện ảnh đầy mê hoặc
                                    </p>
                                </button>   
                            </div>
                        </div>


                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <div className="container">
                                <img src={require("./Pic/sekiro2.jpg")} id="img2" alt="Ảnh bị lỗi" />
                                <button type="button" style={{color: 'black'}} className="centered">
                                    <h1>Game</h1>
                                    <p> 
                                        Xách kiếm lên và bảo vệ thế giới 
                                    </p>
                                </button>
                            </div>
                        </div>

                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <div className="container">
                                <img src= {require("./Pic/eva.jpg")} id="img3" alt="Ảnh bị lỗi" />
                                <button type="button" style={{color: 'black'}} className="centered">
                                    <h1>Truyện</h1>
                                    <p>
                                        Cùng bước đến những vùng đất mới
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="bottom">
                    Make by Phúc - Bằng
                </div>
            </div>
        );
    }
}

export default App;
