import './App.css';
import React, { useState } from 'react'
import Header from './layout/header';
import Mainsection from './layout/Mainsection';
import Footer from './layout/Footer';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import  UserContext  from './AppContext';

function App() {
  const [value, setValue] = useState('');
  return (
   <Router>
      <UserContext.Provider value={[value,setValue]}>
        <Header />
        <Mainsection />
        <Footer />
      </UserContext.Provider>
   </Router>
  );
}

export default App;
