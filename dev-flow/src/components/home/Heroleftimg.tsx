


interface Img{
    src: string
}



function Heroleftimg({src,}: Img)
{
    return (
        <div className="home-hero-left-img">
            <img src={src} alt="People image" />
        </div>
    );
}



export default Heroleftimg