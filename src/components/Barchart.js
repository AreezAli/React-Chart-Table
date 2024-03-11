import React from 'react'
import {
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Legend
} from "recharts";

const Barchart = ({data,meta}) => {
  return (
    <>
    <div style={{paddingLeft:"50px"}}>
    <ResponsiveContainer width="100%" height={300}>
     <BarChart width={400} height={300} data={data}>
            <Bar dataKey={meta.field} fill={meta.color} />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis orientation="right" />
            <Tooltip />
            <Legend />
        </BarChart>
    </ResponsiveContainer>
    </div>
    </>
  )
}

export default Barchart
