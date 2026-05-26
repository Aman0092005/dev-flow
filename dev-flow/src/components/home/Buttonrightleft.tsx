


interface Button{
    title: string,
    src: string
}


function Buttonrightleft({title, src}: Button)
{
    return (
        <div className="home-hero-right-left-middle-img-btn-container">
            <div className="home-hero-right-left-middle-img-container"><img src={src} alt="Button logo" /></div>
            <button>{title}</button>
        </div>
    );
}




export default Buttonrightleft;