import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Box from './components/Box';

function App() {
  const [form,setForm] = useState("");
  const [boxen,setBoxen] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let box = {
      color: form
    }
    setBoxen(oldboxen => [...oldboxen,box]);
    setForm("");
  }
  const destroyBox = (e, idx) => {
    e.preventDefault();
    setBoxen([
      ...boxen.slice(0, idx)
    ].concat(boxen.slice(idx + 1)))
  }

  return (
    <div className="App">
      <form className="col-5 mx-auto"onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label>Color:</label>
          <input className="form-control" value={form} type="text" onChange={(e) => setForm(e.target.value)} />
        </div>
        <input type="submit" value="Add Box" className="btn btn-danger btn-outline-dark" />
      </form>
      <div className="row justify-content-around">
        {
          boxen.map((box,idx) => {
            return <Box color={box.color} key={idx} removeBox={destroyBox} idx={idx}/>
          })
        }

      </div>

      
    </div>
  );
}

export default App;
