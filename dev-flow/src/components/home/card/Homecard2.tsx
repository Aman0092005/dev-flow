


interface Data{
    title: string;
    para: string;
    src: string;
    color: string;
}


function Homecard2({title, para, src, color}: Data)
{
    return (
        <div className="home-card-2-container">
            <div className="card-2-img"><img src={`img/home/${src}`} alt="Logo image" /></div>
            <div className="card-2-texts">
                <p className="p1" style={{color: color}}> {title} </p>
                <p className="p2">{para}</p>
            </div>
        </div>
    );
}



export default Homecard2;