



interface Data{
    src: string;
    size?: string;
    round?: boolean;
}


function Logo({src, size, round}: Data)
{
    return (
        <div className="shared-logo" style={{height: `${size?size:"2.4rem"}`}}>
            <img src={src} alt="Logo image" style={{borderRadius: `${round?"50%":"0%"}`}} />
        </div>
    );
}



export default Logo;