import React from "react";
import myPic from "../images/mypic.png";
import emailButton from "../images/email-button.svg"
import linkedinButton from "../images/linkedin-button.svg"


export default function Info () {
    return (
        <div className="info">
            <img className="info--profileimg" src={myPic} alt="Mike Zimm"/>
            <h1>Michael Zimmerman</h1>
            <h3>Frontend Developer</h3>
            <h4>zfuse.com</h4>
            <div>
                <img src={emailButton} alt="Email Button" />
                <img src={linkedinButton} alt="Linkedin Button"/>
            </div>
        </div>
    )
}