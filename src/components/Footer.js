import React from "react";
import twitterIcon from "../images/Twitter-Icon.svg";
import facebookIcon from "../images/Facebook-Icon.svg";
import instagramIcon from "../images/Instagram-Icon.svg";
import githubIcon from "../images/GitHub-Icon.svg";


export default function Footer () {
    return (
        <div className="footer">
            <img alt="Twitter" src={twitterIcon}/>
            <img alt="Facebook" src={facebookIcon}/>
            <img alt="Instagram" src={instagramIcon}/>
            <img alt="GitHub" src={githubIcon}/>
        </div>
    )
}