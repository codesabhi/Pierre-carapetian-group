
import './App.css';
import Eventpage from './Pages/Eventpage/Eventpage';
import Homepage from './Pages/Homepage/Homepage';
import {
  Routes, Route
} from "react-router-dom";

function App() {
  return (
    <>
    
    <Routes>
    <Route path='/' element = {<Homepage/>}/>
    <Route path='/event' element = {<Eventpage/>}/>
    </Routes>
    </>
  );
}

export default App;
