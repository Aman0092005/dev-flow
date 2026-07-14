
import Recenttask from "./Recenttask";





function Recentactivity()
{
    return (
        <div className="dash-recent-acitivity-cont">
            <div className="dash-recent-acitivity-top">
                <h3>Recent Acitivity</h3>
                <p>View all</p>
            </div>
            <Recenttask isText={true} isDays={true} />
            <Recenttask isText={true} isDays={true} />
            <Recenttask isText={true} isDays={true} />
            <Recenttask isText={true} isDays={true} />
        </div>
    );
}



export default Recentactivity;