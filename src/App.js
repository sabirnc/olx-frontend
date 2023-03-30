import './styles/App.css'
import Nav from './Component/Navbar'
import Home from './pages/Home';
import Login from './pages/login';
import Signup from './pages/signup';
import { Route , Routes } from 'react-router-dom';
import Sell from './pages/sell';



function App() {
  return (
   <div className="App">
          <Nav />
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/login' element={<Login/>} />
              <Route path='/signup' element={<Signup/>} />
              <Route path='/create' element={<Sell/>}/>
          </Routes>
   </div>
  );
}

export default App;
