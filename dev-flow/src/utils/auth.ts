






interface Data{
  firstName?: string,
  lastName?: string,
  email: string,
  password: string
}


export async function login(firstName: string, lastName: string, email: string, password: string, isLogin: boolean) {

    const data: Data = {
      email: email,
      password: password
    };

    let endPoint = "login";

    if(!isLogin)
    {
      data.firstName = firstName;
      data.lastName = lastName;
      endPoint = "signin"
    }
    const result = await fetch(`http://172.20.10.7:3000/${endPoint}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return result.json();
  }