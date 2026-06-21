

interface Data{
    title: string;
    isBackground: boolean;
}



function Servicebutton({title, isBackground}: Data)
{
    return (
        <div className={`servicebutton-container ${!isBackground && "background-transparent"}`}>
            <div className="logo"><img src="./img/home/web.png" alt="Logo image" /></div>
            <p className="para">{title}</p>
        </div>
    );
}


export default Servicebutton;