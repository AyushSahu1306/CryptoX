import React from 'react';
import { useState } from 'react';
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";


const Chart = ({ Data }) => {
 
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
    const [chartData, setChartData] = useState({
        labels: Data.map((data) => {
            const date= new Date(data[0]);
            let time= date.getHours()>12?`${date.getHours()-12}:${date.getMinutes()} PM`:`${date.getHours()}:${date.getMinutes()} AM`;
            return time;
        }), 
        datasets: [
          {
            label: "Price in 1 day in usd",
            data: Data.map((data) => data[1]),
            // backgroundColor: [
            //   "rgba(75,192,192,1)",
            // ],
            borderColor: "rgb(250 204 21)",
            borderWidth: 2
          }
        ],
        
      });
  return (
    <div className="">
      <h2>Line Chart</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              // text: "Price in 1 day in usd"
            },
            legend: {
              display: true
            },
          },
            elements:{
              point:{
                radius:1
              }
            }
        }}
      />
    </div>
  )
}

export default Chart