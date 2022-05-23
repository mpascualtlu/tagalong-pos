import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './routes/home/home';
import Header from './shared/header/header';
import Hostels from './routes/hostels/hostels';
import Review from './routes/review/review';
import Confirm from './routes/confirm/confirm';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="hostels" element={<Hostels/>}></Route>
        <Route path="review" element={<Review/>}></Route>
        <Route path="confirm" element={<Confirm/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
