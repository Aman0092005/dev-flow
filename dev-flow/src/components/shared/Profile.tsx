
import Logo from "./Logo";




function Profile()
{
    return (
        <div className="shared-profile-container">
            <Logo src="./img/home/api.png" round={true} />
            <div>
                <p style={{fontSize: "1.2rem", fontWeight: 500}}>Name</p>
                <p>para</p>
            </div>
            <Logo src="./img/dashboard/collapse.png" />
        </div>
    );
}


export default Profile;