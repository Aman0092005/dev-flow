





interface ErrMessage{
    msg: string
}



function Loginerr({msg}: ErrMessage)
{

    return <p className="err-msg">{msg}!</p>
}





export default Loginerr;