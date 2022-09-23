import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import Splash from './pages/splashscreen/Splash';

function App() {
  const [loading, setLoading] = useState(1)

  useEffect(()=>{
    setTimeout(() => {
      setLoading(0)
    }, 2500);
  },[])
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {
          loading
          ?
          <Splash/>
          :
          <Router/>
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
