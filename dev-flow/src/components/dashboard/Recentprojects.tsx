import Recenttask from "./Recenttask";




function Recentprojects()
{
    return (
        <div className="recent-project-cont">
            <div className="recent-project-inner-1">
                <h3>Recent Projects</h3>
                <p>View all</p>
            </div>
            <Recenttask isText={false} isDays={true} />
            <Recenttask isText={false} isDays={true} />
            <Recenttask isText={false} isDays={true} />
            <Recenttask isText={false} isDays={true} />
            <Recenttask isText={false} isDays={true} />
        </div>
    );
}



export default Recentprojects;