import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage/homepage.component';
import ShopPage from './Pages/Shop/shop.component';
import Header from './Components/Header/header.component';
import SigninSignup from './Pages/Signin-SignupPage/signin-signup.component';

const Hats = () =>{
  return(<div>HAts</div>)
}

function App() {
  return (
    <div className="App">
      {/* <Homepage /> */}
      <Header />
      <Routes>
        <Route  path='/' element={<Homepage/>}/>
        <Route  path='/hats' element={<Hats/>} />
        <Route  path='/shop' element={<ShopPage/>}/>
        <Route  path='/signinsignup' element={<SigninSignup/>}/>
      </Routes>
    </div>
  );
}

export default App;
