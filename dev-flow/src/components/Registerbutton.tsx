

interface RegisterProps{
    imgName: string,
    alt: string,
    btnTitle: string
}



function Registerbutton({imgName, alt, btnTitle}: RegisterProps)
{
    return (
        <>
            <button> <div className="register-cont-svg"><img src={`./img/${imgName}`} alt={alt} /></div>{btnTitle}</button>
        </>
    );
}




export default Registerbutton;