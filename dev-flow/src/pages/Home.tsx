
import Navbar from "./../components/home/Navbar.tsx";
import Hero from "./../components/home/Hero.tsx";

import "./../styles/home.css";








function Home()
{
    return (
        <div className="home-container">
            <Navbar/>
            <Hero />
        </div>
    );
}




export default Home;