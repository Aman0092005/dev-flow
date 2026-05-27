import Herorightrighttop from "./Herorightrighttop";
import Herorightovleft from "./Herorightovleft.tsx";
import Herorightrightright from "./Herorightrightright.tsx";




function Herorightright()
{

    return (
        <div className="home-hero-right-right-container">
            <Herorightrighttop />
            <div className="right-subheading"><h2>Overview</h2></div>
            <div className="home-hero-right-right-ov-container">
                <Herorightovleft />
                <Herorightrightright />
            </div>
        </div>
    );
}


export default Herorightright;