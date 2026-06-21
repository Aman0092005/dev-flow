

interface Data{
    title: string;
    isBackground: boolean;
    src: string;
}



function Servicebutton({title, isBackground, src}: Data)
{
    return (
        <div className={`servicebutton-container ${!isBackground && "background-transparent"}`}>
            <div className="logo"><img src={src} alt="Logo image" /></div>
            <p className="para">{title}</p>
        </div>
    );
}


export default Servicebutton;