import { Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import PageNotFound from './pages/PageNotFound/PageNotFound';

function App() {


  return (
    <div className="App">
      <nav>
      <NavLink to='/'>
          <span className='header'>New Project</span>
      </NavLink>
      </nav>

      <Routes>
        <Route path='/' element={<Login />} />
  
      
        <Route path='*' element={<PageNotFound />} />
      </Routes>
     

   
    </div>
  );
}

export default App;
