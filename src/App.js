import './App.css';

import Testing from './img/Vector.svg';

import { BrowserRouter, Switch, Route, Routes, Router, Link } from "react-router-dom";

import Menu1 from './components/menu';
import DangNhap from './components/dangnhap';
import MainPage from './components/mainPage';

function App() {
  return (
    <>
      <DangNhap/>
      {/* <MainPage/> */}
    </>
  );
}

export default App;
