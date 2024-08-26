import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [excusa, SetExcusa] = useState("")
  const [category, SetCategory] = useState("")
  const handleCategory=(e)=>{
    SetCategory(e.target.value)
    
  }
  function createExcuse(){
    fetch('https://excuser-three.vercel.app/v1/excuse'+category)
    .then(response => response.json())
    .then(data => SetExcusa(data[0].excuse))
  }
  useEffect(() => {
    createExcuse()
    SetCategory("/family")
  }, category=="");

  return (
    <div className="App">
      <header className="App-header">
        <h2>{excusa}</h2>
        <select onChange={handleCategory}>
      <option value="/family">Family</option>
      <option value="/office">Office</option>
      <option value="/children">Children</option>
      <option value="/college">College</option>
      <option value="/party">Party</option>
      <option value="/funny">Funny</option>
      <option value="/unbelievable">Unbelievable</option>
      <option value="/developers">Developers</option>
      <option value="/gaming">Gaming</option>
        </select>
        <button onClick={createExcuse}>create Excuse</button>
      </header>
    </div>
  );
}

export default App;
