import './App.css';
import {useState} from 'react';
import Axios from 'axios';

function App() {

  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [position, setPosition] = useState('')

  const[dataList, setDataList] = useState([]);

  const addElement = () => {
    Axios.post("https://golftracking.herokuapp.com/create", {name: name, age: age, position: position}).then(() => {
      console.log("Success");
    });
  };

  const getData = () => {
    Axios.get("https://golftracking.herokuapp.com/data").then((response) => {
      console.log(response);
      setDataList(response.data);
    });
  }

  return (
    <div className = "app">
      <div className = "information">
        <label htmlFor="">Name</label>
        <input type="text" onChange={(event) => {
          setName(event.target.value);
        }} />

        <label htmlFor="">Age</label>
        <input type="number" onChange={(event) => {
          setAge(event.target.value);
        }} />

        <label htmlFor="">Position</label>
        <input type="text" onChange={(event) => {
          setPosition(event.target.value);
        }} />

        <button onClick={addElement} >Add Element</button>
        </div>

        <div className="dataShow">
          <button onClick={getData}>Show Data</button>
          {dataList.map((val, key) => {
            return <div> {val.name} {val.age} {val.position} </div>
          })}
        </div>
        
        
    </div>
  );
}

export default App;
