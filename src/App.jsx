import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import LoginForm from './uiCollections/login/loginForm';
import IndexPage from './uiCollections/login';
import Home from './uiCollections/home/Home'
import SignupPage from './uiCollections/signup';

function App() {
  return (
    // <div className="App">
    //   <IndexPage/>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<IndexPage/>}></Route>
        <Route path='/signup' element={<SignupPage/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
