import React from 'react';
import './App.css';
import AddComponet from './Component/AddComponent';
import ListComponent from './Component/ListComponent';

function App() {
  return (
    <div className="App">
       <div>
        <AddComponet/>
        <div className="row">
          <div className="col-md-12">
            <ListComponent/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
