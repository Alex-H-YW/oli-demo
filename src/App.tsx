import React, { FC } from 'react';
import Header from './components/Header/Header';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Reference from './pages/Reference/Reference';
import { DataProvider } from './components/Context'

const App: FC =() => {
  return (
    
      <div className="App">
        <DataProvider>
          <Router>
            <Header /> 
            <Routes>
              <Route path="/reference" element={<Reference/>}/>
            </Routes>
          </Router>
        </DataProvider> 
      </div>

  );
}

export default App;
