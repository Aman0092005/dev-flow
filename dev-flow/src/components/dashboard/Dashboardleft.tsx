
import Mainlogo from "./../shared/Mainlogo";
import Servicebutton from "./../shared/Servicebutton";
import Upgrade from "./../shared/Upgrade";



function Dashboardleft()
{
    return (
        <div className="dashboard-left">
            <Mainlogo />
            <Servicebutton title="DashBoard" isBackground={true} src="./img/dashboard/collapse.png" />
            <div className="main">
                <h3>MAIN</h3>
                <Servicebutton title="Workspaces" isBackground={false} src="./img/dashboard/collapse.png" />
                <Servicebutton title="Projects" isBackground={false} src="./img/dashboard/collapse.png" />
                <Servicebutton title="Tasks" isBackground={false} src="./img/dashboard/collapse.png" />
                <Servicebutton title="Notes" isBackground={false} src="./img/dashboard/collapse.png" />
                <Servicebutton title="DSA Tracker" isBackground={false} src="./img/dashboard/collapse.png" />
            </div>
            <div className="main">
                <h3>SETTINGS</h3>
                <Servicebutton title="Settings" isBackground={false} src="./img/dashboard/collapse.png" />
                <Servicebutton title="Profile" isBackground={false} src="./img/dashboard/collapse.png" />
            </div>
            <Upgrade />
            <Servicebutton title="Collapse" isBackground={true} src="./img/dashboard/collapse.png" />
        </div>
    );
}


export default Dashboardleft;