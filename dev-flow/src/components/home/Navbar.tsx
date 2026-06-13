
import Button from "./Button.tsx";

import {useState} from "react";



function Navbar()
{
    const[isHamClick, setIsHamClick] = useState(false);

    return (
        <nav className="nav-container">
            <div className="nav-img-container">
                <img src="./img/home/nav-logo.png" alt="Logo image" />
            </div>
            <div className={`nav-link-container hide`}>
                <a href="/">Features</a>
                <a href="/">How it works</a>
                <a href="/">Pricing</a>
                <a href="/">Testimonials</a>
                <a href="/">Roadmap</a>
                <a href="/">Blog</a>
            </div>
            <div className={`nav-btn-container hide`}>
                <Button title="Log in" bgClass="bg-transparent" />
                <Button title="Sign up" bgClass="bg-blue" />
            </div>
            <div className="nav-hamburger hiding un-hide" onClick={() => setIsHamClick(!isHamClick)} >
                <img src="./img/home/hamburger.png" alt="Logo image" />
            </div>
            {
                isHamClick && <div className={`nav-link-container nav-link-ham-cont hiding`}>
                <a href="/">Features</a>
                <a href="/">How it works</a>
                <a href="/">Pricing</a>
                <a href="/">Testimonials</a>
                <a href="/">Roadmap</a>
                <a href="/">Blog</a>
                <Button title="Log in" bgClass="bg-transparent" />
                <Button title="Sign up" bgClass="bg-blue" />
            </div>
            }
        </nav>
    );
}




export default Navbar;