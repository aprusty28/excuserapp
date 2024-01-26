import './App.css';
import Axios from "axios";
import { useEffect, useState } from 'react';


// function App() {


//   fetch("https://catfact.ninja/fact").then((res) => res.json()).then((data) => {
//   console.log("data anu", data)
// })

// const [catFact, setCatFact] = useState("");


// const onClick = () => {
//   Axios.get("https://catfact.ninja/fact").then((res) => {
//     setCatFact(res.data.fact)
  
//   })
// }

// useEffect(() => {
//   onClick()
// }, []);


//   return (
//     <div className="App">
//       <button onClick={onClick}>Generate cat fact</button>
//       <p>{catFact}</p>
//     </div>
//   );
// }

// export default App;



// function App() {

//   const [facto, setFact] = useState(null);
//   const [ name, setName] = useState("");

// const fetchCatFact = () => {
//   Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
//     setFact(res.data)
  
//   })
// }
//   return (
//     <div className="App">
//       <input placeholder='Enter a name' 
//       onChange={(event) => {
//         setName(event.target.value)
//         }}>
//         </input>
//       <button onClick={fetchCatFact}>Generate person details</button>
//       <p>{facto?.age}</p>
//       <p>{facto?.name}</p>

//     </div>
//   );
// }

// export default App;



function App() {

  const [facto, setFact] = useState("");

const generatePartyExcuse = (excuse) => {
  Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`).then((res) => {
    setFact(res.data[0].excuse)
    console.log(res.data)
  })
}


  return (
    <div className="App">
      <h1>Generate an excuse</h1>
      <button onClick={() => generatePartyExcuse("party")}>Party</button>
      <br></br>
      <button onClick={() => generatePartyExcuse("family")}>Family</button>
      <br></br>
      <button onClick={() => generatePartyExcuse("office")}>Office</button>
      <p>{facto}</p>

    </div>
  );
}

export default App;


