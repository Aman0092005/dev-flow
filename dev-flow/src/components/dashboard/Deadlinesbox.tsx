

import Deadline from "./Deadline";




function Deadlinesbox()
{
    return (
        <div className="dash-deadlines-cont">
            <div className="deadlines-top">
                <p>Upcoming Deadlines</p>
                <p>View all</p>
            </div>
            <Deadline />
            <Deadline />
            <Deadline />
            <Deadline />
        </div>
    );
}




export default Deadlinesbox;