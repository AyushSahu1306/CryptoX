import React from 'react';
import { useState,useEffect } from 'react';
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


const Chart = ({ Data,days }) => {
 
 

  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Price",
        data: [],
        borderColor: "rgb(250 204 21)",
        borderWidth: 2
      }
    ],
  });

  useEffect(() => {
    setChartData({
      labels: Data.map((data) => {
        const date = new Date(data[0]);
        let time = date.getHours() > 12 ? `${date.getHours() - 12}:${date.getMinutes()} PM` : `${date.getHours()}:${date.getMinutes()} AM`;
        return days === 1 ? time : date.toLocaleDateString();
      }),
      datasets: [
        {
          label: "Price",
          data: Data.map((data) => data[1]),
          borderColor: "rgb(250 204 21)",
          borderWidth: 2,
          pointRadius:0,
          
        }
      ],
    });
  }, [Data, days]);
  return (
    <div className="mt-16">
      {/* <h2>Line Chart</h2> */}
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
             text: `Price in ${days} ${days==1?"day":"days"}  in usd`
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