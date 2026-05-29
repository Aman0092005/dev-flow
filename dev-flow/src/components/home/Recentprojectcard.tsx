





interface Recent{
    title: string;
    progress: string;
    isTime: boolean;
    src: string;
    colors: string;
    time?: string;
}


function Recentprojectcard({title, progress, isTime, time, src, colors}: Recent)
{
    return (
        <div className="home-hero-recent-container">
            <div className="r-c-img-title-container">
                <div className="r-c-img"><img src={`./img/home/${src}`} alt="Logo image" /></div>
                <p className="p1">{title}</p>
            </div>
            <div className="p1-p2">
                <p className={`p2 ${colors}`}>{progress}</p>
                {isTime && <p className="p3">{time}</p>}
            </div>
        </div>
    );
}



export default Recentprojectcard;