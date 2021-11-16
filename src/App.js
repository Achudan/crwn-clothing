import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage/homepage.component';

const Hats = () =>{
  return(<div>HAts</div>)
}

function App() {
  return (
    <div className="App">
      {/* <Homepage /> */}
      <Routes>
        <Route  path='/' element={<Homepage/>}/>
        <Route  path='/hats' element={<Hats/>} />
      </Routes>
    </div>
  );
}

export default App;
