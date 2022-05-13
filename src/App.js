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
      <nav>
        <Link to='/'>Dog Search</Link>
        <Link to='/addDog'>Add Dog</Link>
        <Link to='/dogList'>Dog List</Link>
      </nav>
      <Routes>
        <Route path='/' element={<DogCheck/>}/>
        <Route path='/addDog' element={<AddDogForm />} />
        <Route path='/dogList' element={<DogList />}/>
        <Route path='/dogHealthData' element={<DogHealthDataDashboard />}/>
        <Route path='/activityInput' />
      </Routes>
    </Router>
  );
}

export default App;