
import Mainlogo from "./../shared/Mainlogo";
import Servicebutton from "./../shared/Servicebutton";
import Upgrade from "./../shared/Upgrade";



function Dashboardleft()
{
    return (
        <div className="dashboard-left">
            <Mainlogo />
            <Servicebutton title="DashBoard" isBackground={true} />
            <div className="main">
                <h3>MAIN</h3>
                <Servicebutton title="Workspaces" isBackground={false} />
                <Servicebutton title="Projects" isBackground={false} />
                <Servicebutton title="Tasks" isBackground={false} />
                <Servicebutton title="Notes" isBackground={false} />
                <Servicebutton title="DSA Tracker" isBackground={false} />
            </div>
            <div className="main">
                <h3>SETTINGS</h3>
                <Servicebutton title="Settings" isBackground={false} />
                <Servicebutton title="Profile" isBackground={false} />
            </div>
            <Upgrade />
            <Servicebutton title="Collapse" isBackground={true} />
        </div>
    );
}


export default Dashboardleft;