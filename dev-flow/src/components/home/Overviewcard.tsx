

interface Card{
    title: string;
    total: number;
    src: string;
}




function Overviewcard({title, total, src}: Card)
{
    return (
        <div className="home-hero-ov-card-container">
            <div className="p1-p2">
                <p className="p1">{title}</p>
                <p className="p2">{total}</p>
            </div>
            <div className="logo-container"><img src={`./img/home/${src}`} alt="Logo image" /></div>
        </div>
    );
}


export default Overviewcard;