




import Overviewcard from "./Overviewcard.tsx";
import Recentprojectcard from "./Recentprojectcard.tsx";
import Taskshow from "./Taskshow.tsx";



import { PieChart, Pie, Tooltip, Label, Cell } from "recharts";


interface ChartDataItem {
    name: string;
    tasks: number;
    fill: string;
}
// #249163  #3677F3 #794CE0
function Herorightrightright() {

    const data: ChartDataItem[] = [
        { name: "Todo", tasks: 32, fill: "#3677F3" },
        { name: "In Progress", tasks: 30, fill: "#794CE0" },
        { name: "Done", tasks: 24, fill: "#249163" },
    ];
    return (
        <div className="home-hero-r-r-ov-l-m-container p-r-1">
            <div className="d-f">
                <Overviewcard title="in Progress" total={12} src="progress.png" />
                <Overviewcard title="Completed" total={62} src="complete.png" />
            </div>
            <div className="m-c">
                <div className="m-t"><p className="p1">Task Overview</p></div>
                <div className="m-t-progress">
                    <div style={{ textAlign: "center", margin: "auto 5%" }}>
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
                    <div className="m-t-progress-inner">
                        <Taskshow title={data[0].name} total={data[0].tasks} color={data[0].fill} />
                        <Taskshow title={data[1].name} total={data[0].tasks} color={data[1].fill} />
                        <Taskshow title={data[2].name} total={data[0].tasks} color={data[2].fill} />
                    </div>
                </div>
            </div>
            <div className="m-d">
                <div className="m-t"><p className="p1">Activity</p><p className="p2">View all</p></div>
                <Recentprojectcard title="Authentication Done" progress="just now" isTime={false} src="authentication.png" colors="pl2" />
                <Recentprojectcard title="Rate Limiting" progress="2hr ago" isTime={false} src="rate-limiting.png" colors="bl2" />
            </div>
        </div>
    );
}



export default Herorightrightright;