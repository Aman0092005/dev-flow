import Logo from "./../shared/Logo";



interface Data{
    isText:boolean;
    isDays: boolean;
}


function RecentTask({isText, isDays}: Data)
{
    return (
        <div className="recent-task-cont">
            <Logo src="./img/github.svg" />
            <div className="recent-task-inner-cont">
                <p>Title</p>
                {
                !isText?<div className="complete-cont">
                    <div className="complete-figure-cont">
                        <div className="complete-figure-1"></div>
                        <div className="complete-figure-2"></div>
                    </div>
                    <p>50%</p>
                </div>:
                <p>Description paragraph</p>
                }
            </div>
            {isDays && <p>2 days ago</p>}
        </div>
    );
}



export default RecentTask;