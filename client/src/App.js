import './App.css';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";

import Header from './shared/header/header';

import Home from './routes/home/home';
import Hostels from './routes/hostels/hostels';
import Review from './routes/review/review';
import Confirm from './routes/confirm/confirm';
import SignIn from './routes/sign-in/sign-in';
import Register from './routes/register/register';
import AdminHome from './routes/admin-home/admin-home';
import AddNewUser from './routes/add-new-user/add-new-user';
import Users from './routes/users/users';

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
        <Route path="admin-home" element={<AdminHome/>}></Route>
        <Route path="add-new-user" element={<AddNewUser/>}></Route>
        <Route path="users" element={<Users/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
