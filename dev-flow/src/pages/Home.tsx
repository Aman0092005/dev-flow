
import Navbar from "./../components/home/Navbar.tsx";
import Hero from "./../components/home/Hero.tsx";

import Homecard1 from "./../components/home/card/Homecard1";
import Homecard2 from "./../components/home/card/Homecard2.tsx";

import "./../styles/home.css";








function Home()
{
    return (
        <div className="home-container">
            <Navbar/>
            <Hero />
            <div className="home-after-hero-heading">
                <p>POWERFUL FEATURES</p>
                <h2>Everything you need to stay productive</h2>
            </div>
            <div className="home-feature">
                <Homecard1 title="Project Management" para="Create projects, break them into tasks and track progress effortlessly." src="folder.png" />
                <Homecard1 title="Kanban Board" para="Visualize your workflow with drag and drop kanban board." src="kanban.png" />
                <Homecard1 title="Notes & Docs" para="Write notes, create docs and organize your knowledge." src="project.png" />
                <Homecard1 title="DSA Tracker" para="Track your DSA progress, problems solved and improve daily." src="tracker.png" />
                <Homecard1 title="Team Collaboration" para="Invite your team, assign tasks and collaborate in real-time." src="team.png" />
                <Homecard1 title="Real-time Updates" para="Get instant updates and never miss important changes." src="progress.png" />
            </div>
            <div className="home-feature-2">
                <Homecard2 title="1,000+" para="Happy Developers" src="developers.png" color="#A1B7D3" />
                <Homecard2 title="10,000+" para="Projects Created" src="rocket.png" color="#EEA0B5" />
                <Homecard2 title="50,000+" para="Tasks Completed" src="time.png" color="#807DCC" />
                <Homecard2 title="25+" para="Countries" src="web.png" color="#9183AF" />
            </div>
        </div>
    );
}




export default Home;