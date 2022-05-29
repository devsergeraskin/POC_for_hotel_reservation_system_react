import React from 'react';
// import logo from './logo.svg';
// import  Todo from './components/Todo';
import './App.css';
import './components/ReservationComponent';
import ReservationComponent from './components/ReservationComponent';


function App() {
  return (
    <div className="App">
      <div className="container ">
        <ReservationComponent></ReservationComponent>
        <h2>MADE BY SERGEY RASKIN</h2>
      </div>
    </div>
  );
}

export default App;
