import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Navbar from './Headers/Navbar';
import React, { Component }  from 'react';
import {useCookies} from 'react-cookie'
import Register from './Components/Register';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import HomePage from './Components/HomePage';
import Users from './Components/Users';
import StaffHome from './Components/StaffHome';
import Profile from './Components/Profile';
import Sidebar from './Headers/Sidebar'
import HomeHead from './Headers/HomeHead';

function App() {
  const [token , setToken,removeToken] = useCookies(['mytoken'])
 const username = localStorage.getItem('userId')
 console.log(token)
  return (
  <div>
     
    <BrowserRouter>
    <div className='cointainer'style={{marginTop:'10px',marginBottom:'60px'}}>
       {/* {username ?  <Sidebar/>:<Navbar/>} <br/> */}<Sidebar/><br/>
     </div>
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route path='/Home' component={HomePage}/>
      <Route path='/users' component={Users}/>
      <Route path='/staff' component={StaffHome}/>
      <Route path='/profile' component={Profile}/>
    </Switch>
    </BrowserRouter>
  </div>
  );
}
export default App;
