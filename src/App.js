import './App.css';
import {useState} from 'react';
import Axios from 'axios';
import logo from './logo.png';

function App() {

  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [position, setPosition] = useState('')

  const[dataList, setDataList] = useState([]);

  const addElement = () => {
    //Axios.post("http://localhost:3001/create", {name: name, age: age, position: position}).then(() => {
    Axios.post("https://golftracking.herokuapp.com/create", {name: name, age: age, position: position}).then(() => {
      console.log("Success");
    });
  };

  const getData = () => {
    //Axios.get("http://localhost:3001/data").then((response) => {
    Axios.get("https://golftracking.herokuapp.com/data").then((response) => {
      console.log(response);
      setDataList(response.data);
    });
  }

  const deleteEntry = (name) =>{
    //Axios.delete(`http://localhost:3001/delete/${name}`).then((response) => {
    Axios.delete(`https://golftracking.herokuapp.com/delete/${name}`);
    //Axios.delete(`http://localhost:3000/delete/${name}`);
  }

  return (
      <div className = "app">

      <div className = "logoImage">
        <img src={logo} alt="" />
      </div>
        
      <div className = "information">
        <label htmlFor="">Course Name</label>
        <input type="text" onChange={(event) => {
          setName(event.target.value);
        }} />

        <label htmlFor="">Score</label>
        <input type="number" onChange={(event) => {
          setAge(event.target.value);
        }} />

        <label htmlFor="">Notes</label>
        <input type="text" onChange={(event) => {
          setPosition(event.target.value);
        }} />

        <button onClick={addElement} >Add Element</button>
        </div>

        <div className="dataShow">
          <button onClick={getData}>Show Data</button>
          {dataList.map((val, key) => {
            return <div className="dataLayout"> 
              <h2>{val.name} </h2>
              <h2>{val.age} </h2>
              <h2>{val.position}</h2>
              <button onClick={deleteEntry(val.name)}>Delete</button>
              </div>
          })}
        </div>
        
        
    </div>
  );
}

export default App;
