

interface Data{
    title: string;
    para: string;
    src: string;
}


function Homecard1({title, para, src}: Data)
{
    return (
        <div className="home-card-1-container">
            <div className="card-1-img"><img src={`img/home/${src}`} alt="Logo image" /></div>
            <h3>{title}</h3>
            <p>{para}</p>
        </div>
    );
}




export default Homecard1;