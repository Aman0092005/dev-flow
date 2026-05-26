
import Button from "./Button.tsx";
import Heroleftimg from "./Heroleftimg.tsx";



function Herolefttexts()
{
    return (
        <div className="home-hero-left-texts">
            <div className="home-hero-left-text1">
                <h1>Plan. Build. <span>Ship.</span> All in one flow.</h1>
            </div>
            <div className="home-hero-left-text2">
                <p>
                    Devflow helps you organize projects, manage tasks, write notes, track progress
                    and collaborate with your team in real-time.
                </p>
            </div>
            <div className="home-hero-btn-container">
                <Button title="Get started for free ->" bgClass="bg-blue" />
                <Button title="View demo </>" bgClass="bg-transparent2" />
            </div>
            <div className="home-hero-left-rating">
                <div className="home-hero-left-img-container">
                    <div className="home-left-img-pos-abs1"><Heroleftimg src="./img/home/p1.jpg" /></div>
                    <div className="home-left-img-pos-abs2"><Heroleftimg src="./img/home/p2.jpg" /></div>
                    <div className="home-left-img-pos-abs3"><Heroleftimg src="./img/home/p3.jpg" /></div>
                    <div className="home-left-img-pos-abs4"><Heroleftimg src="./img/home/p4.jpg" /></div>
                </div>
                <div className="home-hero-left-rating-star-text">
                    <div><p>⭐⭐⭐⭐⭐</p></div>
                    <div className="home-hero-left-rating-text"><p>Loved by 1,000+ developers</p></div>
                </div>
            </div>
        </div>
    );
}



export default Herolefttexts;