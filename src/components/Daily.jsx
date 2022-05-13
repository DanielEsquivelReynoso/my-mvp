import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { DailyData } from '../Data';


function Hourly() {
  const daily = DailyData.activity_series.records;
  const [dailyDogData, setDailyDogData] = useState({
    labels: daily.map((timestamp) => timestamp.date), // a list of each bar
    datasets: [{
      label: "Minutes of Activity Per Day",
      data: daily.map((rest) => rest.min_active),
      backgroundColor: [
        "rgba(75,192,192,1)"
      ],
      borderColor: "black",
      borderWidth: 3,
    }]
  })
  return (
    <Bar data={dailyDogData}/>
  );
}

export default Hourly;