
import Logo from "./Logo";


interface Data{
    title1: string;
    title2: string;
}


function Profile({title1, title2}: Data)
{
    return (
        <div className="shared-profile-container">
            <Logo src="./img/home/p1.jpg" round={true} size="2.8rem" />
            <div>
                <p style={{fontSize: "1.2rem", fontWeight: 500}}>{title1}</p>
                <p>{title2}</p>
            </div>
            <Logo src="./img/dashboard/collapse.png" round={true} angle="-90deg" />
        </div>
    );
}


export default Profile;