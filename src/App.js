import { useState, useEffect } from 'react';
import './App.css';
import AddDogForm from './components/AddDogForm';

// import BarChart from './components/BarChart';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DogCheck from './components/DogCheck';
import DogHealthDataDashboard from './components/DogHealthDataDashboard';
import DogList from './components/DogList';


function App() {
  return (
    <Router>
      <DogList />
      <nav>
        <Link to='/'>Dog Check</Link>
        <Link to='/dogHealthData'>Dog Health Data</Link>
      </nav>
      <Routes>
        <Route path='/' element={<DogCheck/>}/>
        <Route></Route>
        <Route path='/dogHealthData' element={<DogHealthDataDashboard />}/>
        <Route path='/activityInput' />
      </Routes>
    </Router>
  );
}

export default App;