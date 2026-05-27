

interface Task{
    title: string;
    total: number;
    color: string
}



function Taskshow({title, total, color}: Task)
{
    return (
        <div className="home-hero-task-show-container">
            <div className="t-s-c">
                <div className="t-s-1" style={{backgroundColor: color}} ></div>
                <p className="t-s-p1">{title}</p>
            </div>
            <p className="t-s-p2">{total}</p>
        </div>
    );
}




export default Taskshow;