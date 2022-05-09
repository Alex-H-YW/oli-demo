import React, { FC } from 'react';
import Header from './components/Header/Header';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Reference from './pages/Reference/Reference';
//import '~antd/dist/antd.css';


const App: FC =() => {
  return (
    <div className="App">
      <Router>
        <Header /> 
        <Routes>
          <Route path="/reference" element={<Reference/>}/>
        </Routes>
      </Router>
  
    </div>
  );
}

export default App;
