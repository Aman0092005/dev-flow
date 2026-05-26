
import Button from "./Button.tsx";




function Navbar()
{
    return (
        <nav className="nav-container">
            <div className="nav-img-container">
                <img src="./img/home/nav-logo.png" alt="" />
            </div>
            <div className="nav-link-container">
                <a href="/">Features</a>
                <a href="/">How it works</a>
                <a href="/">Pricing</a>
                <a href="/">Testimonials</a>
                <a href="/">Roadmap</a>
                <a href="/">Blog</a>
            </div>
            <div className="nav-btn-container">
                <Button title="Log in" bgClass="bg-transparent" />
                <Button title="Sign up" bgClass="bg-blue" />
            </div>
        </nav>
    );
}




export default Navbar;