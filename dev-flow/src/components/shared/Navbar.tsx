
import Logo from "./Logo";
import Profile from "./Profile";




function Navbar()
{
    return (
        <div className="shared-navbar-container">
            <div className="inner-search">
                <input type="search" name="searching" id="search" placeholder="Search anything" />
            </div>
            <div className="inner">
                <Logo src="./img/dashboard/notification.png" size="2.6rem" />
                <Logo src="./img/dashboard/moon.png" size="2.6rem" />
                <Profile title1="Jhon" title2="jhon@gmail.com" />
            </div>
        </div>
    );
}



export default Navbar;