



interface Data{
    src: string;
    size?: string;
    round?: boolean;
    angle?: string;
}


function Logo({src, size, round, angle}: Data)
{
    return (
        <div className="shared-logo" style={{height: `${size?size:"2.4rem"}`, width: `${size?size:"2.4rem"}`}}>
            <img src={src} alt="Logo image" style={{borderRadius: `${round?"50%":"0%"}`, height: "100%", width: "100%", rotate: `${angle?angle:"0deg"}`}} />
        </div>
    );
}



export default Logo;