import "./RevenueChart.css";

function RevenueChart({ data }) {

    const max = Math.max(...data);

    return (

        <div className="chart-card">

            <h3>Doanh thu tuần</h3>

            <div className="chart">

                {data.map((value,index)=>(

                    <div
                        key={index}
                        className="bar-wrapper"
                    >

                        <div
                            className="bar"
                            style={{
                                height:`${value/max*220}px`
                            }}
                        ></div>

                        <span>T{index+2}</span>

                    </div>

                ))}

            </div>

        </div>

    )

}

export default RevenueChart;