import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatWithCA from "./components/Chat-with-CA/ChatWithCA";
import Login from "./components/Login";
import Home from "./components/Home";
import Chat from "./components/Chat";
import FirstSignUp from "./components/FirstSignUp";
import UserList from "./components/Userlist";
import SuccessMessage from "./components/FirstSignUp/Success";
import UerSuccess from "./components/FirstSignUp/userSuccess";
import AdminPanel from "./components/AdminPanel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/chat-with-CA" element={<ChatWithCA />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<FirstSignUp />} />
        <Route path="/success" element={<SuccessMessage />} />
        <Route path="/userSuccess" element={<UerSuccess />} />
        <Route path="/users" element={<UserList />} />
        <Route path='/adminPanel' element={<AdminPanel/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
