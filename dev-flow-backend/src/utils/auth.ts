


interface Signin{
    firstName: string,
    lastName: string,
    email: string,
    password: string
}

interface login{
    email: string,
    password: string
}


export function signin({firstName, lastName, email, password}: Signin){
    if(!firstName || !firstName.trim())
        return {err: true, msg: "Please enter your first Name", status: 400};
    if(!lastName || !lastName.trim())
        return {err: true, msg: "Please enter your last name", status: 400};
    if(!email || !email.trim())
        return {err: true, msg: "Please enter your email", status: 400};
    if(!password || !password.trim())
        return {err: true, msg: "Please enter your password", status: 400};
    return {err: false, msg: "okay", status: 201}
}



export function login({email, password}: login){
    if(!email || !email.trim())
        return  {err: true, msg: "Please enter your email", status: 400};
    if(!password)
        return {err: true, msg: "Please enter your password", status: 400};
    return {err: false, msg: "okay", status: 200};
}