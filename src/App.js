import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage/homepage.component';
import ShopPage from './Pages/Shop/shop.component';
import Header from './Components/Header/header.component';
import SigninSignup from './Pages/Signin-SignupPage/signin-signup.component';
import { useEffect, useState } from 'react';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

const Hats = () =>{
  return(<div>HAts</div>)
}

//help
//https://benmcmahen.com/using-firebase-with-react-hooks/

function App() {
  const [user, setUser] = useState(null);
  //   ()=>{
  //   const user = auth.currentUser;
  //   return user;
  // });
  useEffect(()=>{
    // console.log("effect");
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (user)=>{
      if(user){
        const docRef = createUserProfileDocument(user);
        (await docRef).onSnapshot(snapShot => {
          setUser({id:snapShot.id, ...snapShot.data()})
        })
      }
      else{
        setUser(user);
      }
    })
    return ()=>{unsubscribeFromAuth()}
  },[]);
  return (
    <div className="App">
      {/* <Homepage /> */}
      <Header currentUser={user}/>
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
