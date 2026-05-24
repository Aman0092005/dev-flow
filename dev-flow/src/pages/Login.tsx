import {useState} from "react";
import Forminput from "./../components/Forminput.tsx";
import Registerbutton from "./../components/Registerbutton.tsx";
import Loginerr from "./../components/Loginerr.tsx"



interface loginData{
    handleLogin: (firstName: string,
        lastName: string,
        email: string,
        password: string,
        isLogin: boolean) => void,
        isLoginErr: {err:boolean, msg: string}
}


function Login({handleLogin, isLoginErr}: loginData)
{
    const [isLogin, setIsLogin] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function temp()
    {
        handleLogin(firstName, lastName, email, password, isLogin);
        setTimeout(() => {
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
        }, 1000);
        
    }

    return (
        <section className="section-login">
        <div className=" login-container">
            <p className="login-tag-1">DEV FLOW</p>
            
            <div className="login-img-container">
                <p className="login-tag-2">Grow your skills with us</p>
                
                <img src="./img/login.jpg" alt="Desert Image" />
            </div>

            <div className=" right-container">
                <h2 >{isLogin?"Welcome back":"Create an account"}</h2>
                <div className="right-cont-2">
                    <p >{isLogin?"Create account":"Already have an account?"}</p>
                    <p className="log-in" onClick={() => setIsLogin(!isLogin)} >{isLogin?"Sign in":"Log in"}</p>
                </div>
                {isLoginErr.err && <Loginerr msg={isLoginErr.msg} />}
                <form onSubmit={(e) => e.preventDefault()} >
                    {!isLogin &&
                        <div className=" form-cont-name form-cont-inp">
                            <Forminput type = "text" placeholder="First name" value={firstName} setValue={setFirstName} />
                            <Forminput type = "text" placeholder="Last name" value={lastName} setValue={setLastName} />
                        </div>
                    }
                    <div className="form-cont-inp">
                        <Forminput type = "email" placeholder="Email" value={email} setValue={setEmail} />
                    </div>
                    <div className="form-cont-inp">
                        <Forminput type = "password" placeholder="Password" value={password} setValue={setPassword} />
                    </div>
                    <div className="checkbox-cont">
                        <div className="checkbox-cont-inp">
                            <input type="checkbox" name="checkbox" id="check-box" required />
                            {
                                isLogin?<label htmlFor="check-box">Remember me </label>:
                                <div><label htmlFor="check-box">I agree to the </label> <a href="">Terms & Conditions</a></div>
                            }
                        </div>
                        {
                            isLogin && <p>Forgot password</p>
                        }
                    </div>

                    <div className="login-btn-cont">
                        <button onClick={() => temp()} >{isLogin?"Login":"Create account"}</button>
                    </div>
                </form>
                <div>
                    <p className="cont-para-2">Or register with</p>
                    <div className="register-cont" >
                        <Registerbutton imgName={"google.svg"} alt={"Google SVG image"} btnTitle={"Google"} />
                        <Registerbutton imgName={"github.svg"} alt={"GitHUb SVG image"} btnTitle={"GitHub"} />
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}




export default Login;