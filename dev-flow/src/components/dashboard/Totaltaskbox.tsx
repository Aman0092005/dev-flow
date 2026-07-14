
import Logo from "./../shared/Logo";





function Totaltaskbox()
{
    return (
        <div className="total-task-container">
            <div className="total-task-cont-inner">
                <Logo src='./img/github.svg' size="3.2rem" />
                <div className="total-task-text">
                    <p className="p1">Total Projects</p>
                    <p className="p2">12</p>
                </div>
                <Logo src='./img/dashboard/dot.png' size="1.8rem" />
            </div>
            <p className="total-task-p3">20% from last month</p>
        </div>
    );
}



export default Totaltaskbox;