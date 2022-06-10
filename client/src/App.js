import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './routes/home/home';
import Header from './shared/header/header';
import Hostels from './routes/hostels/hostels';
import Review from './routes/review/review';
import Confirm from './routes/confirm/confirm';
import SignIn from './routes/sign-in/sign-in';
import Register from './routes/register/register';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="sign-in" element={<SignIn/>}></Route>
        <Route path="register" element={<Register/>}></Route>
        <Route path="hostels" element={<Hostels/>}></Route>
        <Route path="review" element={<Review/>}></Route>
        <Route path="confirm" element={<Confirm/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
