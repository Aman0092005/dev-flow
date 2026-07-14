
import Logo from "./../shared/Logo";

import Taskshow from "./../home/Taskshow";

import { PieChart, Pie, Tooltip, Label, Cell } from "recharts";



interface ChartDataItem {
    name: string;
    tasks: number;
    fill: string;
}

function Taskoverview() {
    const data: ChartDataItem[] = [
        { name: "Todo", tasks: 32, fill: "#3677F3" },
        { name: "In Progress", tasks: 30, fill: "#794CE0" },
        { name: "Done", tasks: 24, fill: "#249163" },
    ];


    return (
        <div className="dash-task-overview-cont">
            <div className="dash-task-over-inner">
                <h3>Task Overview</h3>
                <div className="dash-task-inner-text-logo"><p>This Week</p> <Logo src="./img/dashboard/collapse.png" angle="-90deg" size="1.6rem" /> </div>
            </div>
            <div className="dash-overview-circle-main-cont">
                <div className="task-overview-circle-cont">
                    <PieChart width={125} height={120} className="pie-chart">
                        <Tooltip />
                        <Pie
                            data={data}
                            dataKey="tasks"
                            outerRadius={58}
                            innerRadius={35}
                            // fill="green"
                            stroke="#151C2D"
                            strokeWidth={2}
                        >
                            {data.map((entry, index) => (
                                <Cell key={index} fill={entry.fill} />
                            ))}
                            <Label
                                value="86 Total"
                                position="center"
                                style={{
                                    fontSize: "10px",
                                    fill: "white"
                                }}
                            />
                        </Pie>
                    </PieChart>
                </div>
                <div className="m-t-progress-inner dash-task-cont">
                    <Taskshow title={data[0].name} total={data[0].tasks} color={data[0].fill} />
                    <Taskshow title={data[1].name} total={data[0].tasks} color={data[1].fill} />
                    <Taskshow title={data[2].name} total={data[0].tasks} color={data[2].fill} />
                </div>
            </div>
        </div>
    );
}



export default Taskoverview;