
import Overviewcard from "./Overviewcard.tsx";
import Recentprojectcard from "./Recentprojectcard.tsx";




function Herorightovleft()
{
    return (
        <div className="home-hero-r-r-ov-l-m-container">
            <div className="d-f">
                <Overviewcard />
                <Overviewcard />
            </div>
            <div className="m-c">
                <div className="m-t"><p className="p1">Recent Projects</p><p className="p2">View all</p></div>
                <Recentprojectcard title="DevFlow Website" progress="In Progress" isTime={true} />
                <Recentprojectcard title="DevFlow Website" progress="In Progress" isTime={false} />
                <Recentprojectcard title="DevFlow Website" progress="In Progress" isTime={false} />
                <Recentprojectcard title="DevFlow Website" progress="In Progress" isTime={true} />
            </div>
            <div className="m-d">
                <div className="m-t"><p className="p1">Recent Projects</p><p className="p2">View all</p></div>
                <Recentprojectcard title="API Integration" progress="Pending" isTime={false} />
                <Recentprojectcard title="Database Integration" progress="Done" isTime={false} />
            </div>
        </div>
    );
}



export default Herorightovleft;