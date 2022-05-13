import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { HourlyData } from '../Data';


function Hourly() {

  const data = HourlyData.activity_series.records;
  // eslint-disable-next-line no-unused-vars
  const [hourlyDogData, setHourlyDogData] = useState({
    labels: data.map((timestamp) => timestamp.date), // a list of each bar
    datasets: [{
      label: `minutes of activity per hour`,
      data: data.map((rest) => rest.min_active),
      backgroundColor: [
        "rgba(75,192,192,1)"
      ],
      borderColor: "black",
      borderWidth: 3
    }]
  })
  return (
    <Bar data={hourlyDogData}/>
  );
}

export default Hourly;