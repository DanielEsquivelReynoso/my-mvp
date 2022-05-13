import React from 'react';
import Hourly from './Hourly.jsx';
import Daily from './Daily.jsx';

function DogHealthDataDashboard() {
  return (
    <div>
      <Hourly />
      <Daily />
    </div>
  );
}

export default DogHealthDataDashboard;