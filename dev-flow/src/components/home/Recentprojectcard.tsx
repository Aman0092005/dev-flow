





interface Recent{
    title: string,
    progress: string,
    isTime: boolean
}


function Recentprojectcard({title, progress, isTime}: Recent)
{
    return (
        <div className="home-hero-recent-container">
            <div className="r-c-img-title-container">
                <div className="r-c-img"><img src="./img/home/home.png" alt="Logo image" /></div>
                <p className="p1">{title}</p>
            </div>
            <div className="p1-p2">
                <p className="p2">{progress}</p>
                {isTime && <p className="p3">Time</p>}
            </div>
        </div>
    );
}



export default Recentprojectcard;