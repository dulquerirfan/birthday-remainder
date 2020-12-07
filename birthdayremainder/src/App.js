import React,{ useState } from 'react';
import './App.css';
import data from './components/data';
import List from './components/List';

function App() {
    const [people,setPeople]=useState(data);
 
  return (
    <div>
      <h1>Today {people.length} are celebrating birthday</h1>
    <div className='container'>
    <List people={people} />
    <button className='button' onClick={()=>setPeople([])}>Claer all</button>
    </div>
    </div>
  );
}

export default App;
