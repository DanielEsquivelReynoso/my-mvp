import {useState} from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase-config';
import Hourly from './Hourly.jsx';
import Daily from './Daily.jsx';

function DogHealthDataDashboard() {
  const [dog, setDog] = useState({});
  const dogDocRef = doc(db, 'dogs', 'pGHcLGLMS4OIstaj5ZKW');
  getDoc(dogDocRef)
    .then((doc) => {
      console.log(doc.data(), doc.id);
      setDog(doc.data())
      console.log('dog, doc.data(): ', dog);
    });
  return (
    <div>
      <table>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Weight</th>
        <th>Breed</th>
      </tr>
      <tr>
        <th>{dog.dogName}</th>
        <th>{dog.age}</th>
        <th>{dog.weight} lbs</th>
        <th>{dog.breed}</th>
      </tr>
      </table>
      <Hourly />
      <Daily />
    </div>
  );
}

export default DogHealthDataDashboard;