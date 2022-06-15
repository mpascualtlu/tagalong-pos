import './App.css';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";

import Header from './shared/header/header';

import Home from './routes/home/home';
import Hostels from './routes/hostels/hostels';
import Review from './routes/review/review';
import Confirm from './routes/confirm/confirm';
import SignIn from './routes/auth/sign-in/sign-in';
import RequestNewPassword from './routes/auth/password-recovery/request-new-password/request-new-password';
import Register from './routes/auth/register/register';
import AdminHome from './routes/admin-home/admin-home';
import UserForm from './routes/users/user-form/user-form';
import Users from './routes/users/users';

import Dishes from './routes/dishes/dishes';
import DishForm from './routes/dishes/dish-form/dish-form';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="sign-in" element={<SignIn/>}></Route>
        <Route path="request-new-password" element={<RequestNewPassword/>}></Route>
        <Route path="register" element={<Register/>}></Route>
        <Route path="hostels" element={<Hostels/>}></Route>
        <Route path="review" element={<Review/>}></Route>
        <Route path="confirm" element={<Confirm/>}></Route>
        <Route path="admin-home" element={<AdminHome/>}></Route>

        <Route path="user-form" element={<UserForm/>}></Route>
        <Route path="user-form/:id" element={<UserForm/>}></Route>
        <Route path="users" element={<Users/>}></Route>

        <Route path="dishes" element={<Dishes/>}></Route>
        <Route path="dish-form" element={<DishForm/>}></Route>
        <Route path="dish-form/:id" element={<DishForm/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
