import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar.js';
import Strip from './components/Strip.js';

const App = () => {
  return (
    <div>
      <Strip />
      {/* <hr className='text-white' /> */}
      <Home />
    </div>
  )
}

export default App;
