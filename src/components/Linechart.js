import React from 'react'
import {
    LineChart,
    Line,
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
    <ResponsiveContainer width="100%" height={300}>
     <LineChart width={400} height={300} data={data}>
            <Line type="monotone" dataKey={meta.field} stroke={meta.color} />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
        </LineChart>
    </ResponsiveContainer>

    </>
  )
}

export default Barchart
