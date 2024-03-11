import React from "react";
import "./ChartPage.css";
import { useSelector, useDispatch } from "react-redux";
import {
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
} from "recharts";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { storeData } from "../actions/index.js";
import { fakeData } from "../fakeData.js";
// import Barchart from '../components/Barchart.js';
// import Linechart from '../components/Linechart.js';

const ChartPage = () => {
  const stateData = useSelector((state) => state.data);
  useEffect(() => {
    localStorage.setItem("reduxState", JSON.stringify(stateData));
  }, [stateData]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(storeData(fakeData));
  }, [dispatch]);

  if (!stateData.data) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="header">
        <h1>Chart Page</h1>
        <div >
          {/* <Link style={{textDecoration:"none" , padding:"10px", borderRadius:"10px", backgroundColor:"green", color:"white"}} to="/table" target='_blank'>See Table</Link> */}

          {/* Redux store does not share values accros the multiple tabs so if it needs to be open into another tab then use of browser storage would be necessary */}
          {/*we can set data in local storage like localStorage.setItem('key',value) and  can get using localStorage.getItem('key');  */}
          <Link to="/table"
          >
            See Table
          </Link>
        </div>

        {/* FOR INDIVIUAL LINECHART */}
        {/* <Linechart data={stateData.data.data} meta={stateData.data.meta[0]} /> */}
        {/* FOR INDIVIUAL BARCHAR */}
        {/* <Barchart data={stateData.data.data} meta={stateData.data.meta[1]} /> */}
        <div className="chart-container"       >
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart
              width={800}
              height={400}
              data={stateData.data.data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="date" />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              {stateData.data.meta.map((item, index) => {
                if (item.chartType === "bar") {
                  return (
                    <React.Fragment key={index}>
                      <YAxis yAxisId={item.axis} orientation="right" />
                      <Bar
                        key={index}
                        dataKey={item.field}
                        fill={item.color}
                        yAxisId={item.axis}
                      />
                    </React.Fragment>
                  );
                }
                return null;
              })}
              {stateData.data.meta.map((item, index) => {
                if (item.chartType === "line") {
                  return (
                    <React.Fragment key={index}>
                      <YAxis yAxisId={item.axis} />
                      <Line
                        key={index}
                        type="monotone"
                        dataKey={item.field}
                        stroke={item.color}
                        yAxisId={item.axis}
                        strokeWidth={2}
                      />
                    </React.Fragment>
                  );
                }
                return null;
              })}
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default ChartPage;
