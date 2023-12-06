import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Crud  from './Crud';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Login from './Login';

function App() {
  return (
    <div className="App">
      {/* <Crud/> */}
      { <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Crud" element={<Crud/>} />
      </Routes>
    </Router> }

     </div>
  );
}

export default App;


// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Navigate } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

// import Login from './Login';
// import Crud from './Crud';

// const App = () => {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Simulating a basic authentication process
//     if (username === 'suvarna' && password === 'suvarna') {
//       setLoggedIn(true);
//     } else {
//       alert('Invalid credentials. Please try again.');
//     }
//   };

//   return (
//     <Router>
//       <Route exact path="/Login">
//         {loggedIn ? <Navigate to="/Crud" /> : <Login handleLogin={handleLogin} setUsername={setUsername} setPassword={setPassword} />}
//       </Route>
//       <Route exact path="/Crud">
//         {loggedIn ? <Crud /> : <Navigate to="/" />}
//       </Route>
//     </Router>
//   );
// };

//npm start
//export default App;