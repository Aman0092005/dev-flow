
import Navbar from "./../shared/Navbar";
import Totaltaskbox from "./Totaltaskbox";
import Recentprojects from "./Recentprojects";
import Taskoverview from "./Taskoverview";
import Recentactivity from "./Recentactivity";
import Deadlinesbox from "./Deadlinesbox";



function Dashboardright()
{
    return (
        <div className="dashboard-right">
            <Navbar />
            <div className="wish-container">
                <div className="wish-text">
                    <h3>Good morning, John👋</h3>
                    <p>Here's what's happening with your projects today.</p>
                </div>
                <p className="wish-date">{new Date().toDateString()}</p>
            </div>
            <div className="dashboard-total-task-box-cont">
                <Totaltaskbox />
                <Totaltaskbox />
                <Totaltaskbox />
                <Totaltaskbox />
            </div>
            <div className="task-r-v-a-cont">
                <Recentprojects />
                <Taskoverview />
                <Recentactivity />
            </div>
            <div className="task-deadlines-cont">
                <Deadlinesbox />
            </div>
        </div>
    );
}




export default Dashboardright;