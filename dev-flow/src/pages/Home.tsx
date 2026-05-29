
import Navbar from "./../components/home/Navbar.tsx";
import Hero from "./../components/home/Hero.tsx";

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
        </div>
    );
}




export default Home;