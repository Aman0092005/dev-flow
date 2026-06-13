
import Overviewcard from "./Overviewcard.tsx";
import Recentprojectcard from "./Recentprojectcard.tsx";




function Herorightovleft()
{
    return (
        <div className="home-hero-r-r-ov-l-m-container hide-very-sm-screen">
            <div className="d-f">
                <Overviewcard title="Total Projects" total={12} src="folder.png" />
                <Overviewcard title="Tasks" total={86} src="tasks.png" />
            </div>
            <div className="m-c">
                <div className="m-t"><p className="p1">Recent Projects</p><p className="p2">View all</p></div>
                <Recentprojectcard title="DevFlow Website" progress="In Progress" time="Updated 2s ago" isTime={true} src="website.png" colors="bl1" />
                <Recentprojectcard title="Mobile App" progress="Todo" isTime={false} src="mobile.png" colors="bl1" />
                <Recentprojectcard title="DSA Tracker" progress="Done" isTime={false} src="dsa.png" colors="gn1" />
                <Recentprojectcard title="AI Assistant" progress="In Progress" time="Updated 1hr ago" isTime={true} src="asistent.png" colors="pl1" />
            </div>
            <div className="m-d">
                <div className="m-t"><p className="p1">Recent Projects</p><p className="p2">View all</p></div>
                <Recentprojectcard title="API Integration" progress="Pending" isTime={false} src="api.png" colors="bl2" />
                <Recentprojectcard title="Database Integration" progress="Done" isTime={false} src="database.png" colors="gn2" />
            </div>
        </div>
    );
}



export default Herorightovleft;