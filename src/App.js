import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login'
import Home from './components/Home'
import EditUser from './components/EditUser';



function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/editUser/:id' element={<EditUser/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
