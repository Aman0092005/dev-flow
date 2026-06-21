

import "./../styles/dashboard.css";

import Dashboardleft from "./../components/dashboard/Dashboardleft.tsx";



function Dashboard()
{
    return (
        <section className="dashboard-section">
            <Dashboardleft />
            {/* <div style={{backgroundColor:"blue"}} className="dashboard-right"><h2>Hello</h2></div> */}
        </section>
    );
}




export default Dashboard;