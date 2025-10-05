import React from 'react';
import './Main.css';
import { assets } from '../../assets/assets';

const Main = () => {
    return (
        <div className="main">
            <div className="nav">
                <p>Health</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello, Dev.</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>example prompt 1</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>example prompt 2</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>example prompt 3</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>example prompt 4</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>

                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder="Enter a prompt here" />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <div className="bottom-info">
                        Healthcarebot may post innacurate info, take with a grain of salt.
                    </div>
                </div>
            </div>
        </div>
    ); 
};

export default Main;