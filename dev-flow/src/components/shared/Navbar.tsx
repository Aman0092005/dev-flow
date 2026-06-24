
import Logo from "./Logo";
import Profile from "./Profile";




function Navbar()
{
    return (
        <div className="shared-navbar-container">
            <div className="inner-inp">
                <input type="search" name="searching" id="search" placeholder="Search anything" />
            </div>
            <div className="inner">
                <Logo src="./img/home/api.png"/>
                <Logo src="./img/home/api.png"/>
                <Profile />
            </div>
        </div>
    );
}



export default Navbar;