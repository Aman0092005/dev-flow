

import "./../styles/dashboard.css";

import Dashboardleft from "./../components/dashboard/Dashboardleft.tsx";
import Dashboardright from "./../components/dashboard/Dashboardright.tsx";



function Dashboard()
{
    return (
        <section className="dashboard-section">
            <Dashboardleft />
            <Dashboardright />
        </section>
    );
}




export default Dashboard;