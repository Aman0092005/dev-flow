
import Recenttask from "./Recenttask";







function Deadline()
{
    return (
        <div className="dash-deadline">
            <Recenttask isText={true} isDays={false} />
            <p>Date</p>
            <p>Tag</p>
        </div>
    );
}




export default Deadline;