import { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs, addDoc } from 'firebase/firestore';

const AddDog = () => {
  const [newDogName, setNewDogName] = useState("");
  const [newDogAge, setNewDogAge] = useState(0);
  const [newDogWeight, setNewDogWeight] = useState(0);
  const [newDogBreed, setNewDogBreed] = useState("");
  const [dogs, setDogs] = useState([]);
  const dogsCollectionRef = collection(db, "dogs");

  const addDog = async() => {
    await addDoc(dogsCollectionRef, {dogName: newDogName, age: newDogAge, weight: newDogWeight, breed: newDogBreed})
  }
  useEffect(() => {

    const getDogs = async () => {
      const data = await getDocs(dogsCollectionRef);
      console.log('data in getDogs: ', data);
      console.log('data.docs in getDogs')
      setDogs(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }

    getDogs();
  }, []);
  return (
    <div className="App">
      <input
        placeholder="Dog's Name..."
        onChange={(event)=> {
          setNewDogName(event.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Dog's Age..."
        onChange={(event)=> {
          setNewDogAge(event.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Dog's Weight..."
        onChange={(event)=> {
          setNewDogWeight(event.target.value);
        }}
      />
      <input
        placeholder="Dog's Breed..."
        onChange={(event)=> {
          setNewDogBreed(event.target.value);
        }}
      />
      <button onClick={addDog}>Add Dog</button>
      {/* <table border='1'>
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
      </table> */}
    </div>
  );
}

export default AddDog;