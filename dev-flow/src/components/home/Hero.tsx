
import Herolefttop from "./Herolefttop.tsx";
import Herolefttexts from "./Herolefttexts.tsx";
import Herorightleft from "./Herorighleft.tsx";
import Herorightright from "./Herorightright.tsx";



function Hero()
{
    return (
        <div className="home-hero-container">
            <div className="home-hero-left">
                <Herolefttop />
                <Herolefttexts />
            </div>
            <div className="home-hero-right">
                <Herorightleft />
                <Herorightright />
            </div>
        </div>
    );
}



export default Hero;