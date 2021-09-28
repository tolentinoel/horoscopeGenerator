
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputName from './components/InputName';
import TopNav from './components/TopNav';
import FootNav from './components/FootNav';

function App() {
  return (
    <div className="App">
      <div id="bg"><img src="https://i.pinimg.com/originals/2a/0e/32/2a0e32c7a0584b5928252d800837e348.jpg" alt="vector wallpaper"/></div>
      <TopNav/>
      <InputName/>
      <FootNav/>
    </div>
  );
}

export default App;
