import type { ReactNode } from "react";
import {Navigate} from "react-router-dom";


interface Temp{
    children: ReactNode
}


function Protectedroute({children}: Temp)
{
    const token = sessionStorage.getItem("token");
    if(!token)
        return <Navigate to={"/"} />
    
    return children;
}




export default Protectedroute;