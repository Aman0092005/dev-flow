
import Buttonrightleft from "./Buttonrightleft";
import Homerightleftdown from "./Homerightleftdown";



function Herorightleft()
{
    return (
        <div className="home-hero-right-left">
            <div className="home-hero-right-left-top-img-text-container">
                <div className="home-hero-right-left-img-container">
                    <img src="./img/home/nav-logo.png" alt="Devflow logo" />
                </div>
                <p>{">"}</p>
            </div>
            <div className="home-hero-right-left-middle-container">
                <Buttonrightleft title="Overview" src="./img/home/home.png" />
                <Buttonrightleft title="My Tasks" src="./img/home/home.png" />
                <Buttonrightleft title="Projects" src="./img/home/home.png" />
                <Buttonrightleft title="Workspaces" src="./img/home/home.png" />
                <Buttonrightleft title="Notes" src="./img/home/home.png" />
                <Buttonrightleft title="DSA Tracker" src="./img/home/home.png" />
                <Buttonrightleft title="Calendar" src="./img/home/home.png" />
                <Buttonrightleft title="Team" src="./img/home/home.png" />
                <Buttonrightleft title="Settings" src="./img/home/home.png" />
            </div>
            <div className="home-hero-right-left-down-align-container"><Homerightleftdown /></div>
        </div>
    );
}




export default Herorightleft;