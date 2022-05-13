import { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

const DogList = () => {

  const [dogs, setDogs] = useState([]);
  const dogsCollectionRef = collection(db, "dogs");
  useEffect(() => {

    const getDogs = async () => {
      const data = await getDocs(dogsCollectionRef);
      console.log('data in getDogs: ', data);
      console.log('data.docs in getDogs')
      setDogs(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }

    getDogs();
  });
  return (
    <table border='3'>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Weight</th>
        <th>Breed</th>
      </tr>
      {dogs.map((dog) => {
        return (
          <tr>
            <td>{dog.dogName}</td>
            <td>{dog.age}</td>
            <td>{dog.weight} lbs</td>
            <td>{dog.breed}</td>
          </tr>
        );
      })}
    </table>
  );
}

export default DogList;