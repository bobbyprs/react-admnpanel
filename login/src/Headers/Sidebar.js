import React,{useContext} from 'react'
import {ContextProvider} from '../Components/ContexApi'
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import {useCookies} from 'react-cookie'
import { Link } from "react-router-dom";
import '../Css/sidebar.css'
import {Navbar,Nav,NavDropdown,Image} from 'react-bootstrap'
import Chart from '../Components/Chart';
import '../Css/custom.module.css'

function Sidebar() {

  const {uservalue,setUservalue}=useContext(ContextProvider)

    const [token ,setToken,removeToken] = useCookies(['mytoken'])
    
    const superuser = localStorage.getItem('super_user') 
    const username =  localStorage.getItem('user')
    console.log(superuser)
    console.log(superuser)
    const LogoutBtn = () => {
        console.log("hello")
        localStorage.clear()
        removeToken('mytoken') 
        localStorage.clear()
    }
     

    return (
        <div class="wrapper">
    
        <nav id="sidebar">
            <div id="dismiss">
                <i class="fas fa-arrow-left"></i>
            </div>

            <div class="sidebar-header">
                {superuser=='true'? <h3>Admin Panel</h3>:<h3>Staff Panel</h3>}
            </div>

            <ul class="list-unstyled components">
                <p>Dash Board</p>
                <li >
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" id='head' style={{textDecoration:'none'}}>
                    <i style={{marginRight:'5px'}} class="fas fa-home"></i>
                        Home
                        </a>
                    <ul class="collapse list-unstyled" id="homeSubmenu">
                        <li>      
                      {
                          superuser=='true'? <div id ="onclick"> <Link  style={{textDecoration:'none',}}to='/home' id='head'>Home</Link></div>:<div id ="onclick"> <Link  style={{textDecoration:'none',}}to='/staff' id='head'>Home</Link></div>
                      }                  
                        </li>
                        <li>
                        <div id ="onclick">
                            <Link style={{textDecoration:'none'}}id='head'>Home 2</Link>
                        </div>    
                        </li>
                        <li>
                            <div id="onclick">
                             <Link style={{textDecoration:'none'}}id='head'>Home 3</Link>
                            </div> 
                        </li>
                    </ul>
                </li>
                <li>
                    <Link  id='head' style={{textDecoration:'none'}}>
                    <i style={{marginRight:'5px'}} class="fas fa-briefcase"></i>
                        About</Link>
                    
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false"id='head'style={{textDecoration:'none'}}>
                    <i style={{marginRight:'5px'}} class="fas fa-copy"></i>
                        Pages
                        </a>
                    <ul class="collapse list-unstyled" id="pageSubmenu">
                        <li>
                        <div id="onclick">
                            <Link href="#" style={{textDecoration:'none'}}id='head'>Page 1</Link>
                        </div>
                        </li>
                        <li>
                        <div id="onclick">
                            <Link to='' style={{textDecoration:'none'}} id='head'>Page 2</Link>
                        </div>
                        </li>
                        <li>
                            <div id="onclick">
                            <Link to='' style={{textDecoration:'none'}} id='head'>Page 3</Link>
                            </div> 
                        </li>
                    </ul>
                </li>
                <li>
                    {superuser =='true' ?
                        <div id="onclick"><Link to='/users' id='head' style={{textDecoration:'none'}}>
                             <i style={{marginRight:'5px'}} class="fas fa-user"></i>
                            Users
                            </Link></div> :<div id="onclick"><Link to='/' id='head' style={{textDecoration:'none'}}>
                            <i style={{marginRight:'5px'}} class="fas fa-question"></i>
                            Logs</Link></div> 
                    }
                  
                </li>
                <li>
                    <Link to='/' id='head'style={{textDecoration:'none'}}>
                    <i style={{marginRight:'5px'}} class="fas fa-paper-plane"></i>   
                        Contact
                        </Link>
                </li>
            </ul>

            <ul class="list-unstyled CTAs">
                <li>
                    <Link id="onclick" to='/profile'class="download">Profile</Link>
                </li>
                <li>
                    <Link  onClick={LogoutBtn} class="article">Logout</Link>
                </li>
            </ul>
        </nav>

        <div id="content">

            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed">
                <div class="container-fluid">

               { token && token['mytoken'] ?
                        <button type="button" id="sidebarCollapse" style={{display:'flex'}} class="btn btn-primary">
                        
                        <span>kyvorgenomics</span>
                    </button>:<div><h2>kyvorgenomics</h2> </div>
               }
                    
                
            {token && token['mytoken'] ?

                  
                    <div className="topRight">
            <div className="topbarIconContainer">
              <NotificationsNone />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Language />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Settings />
            </div>
            <Nav>
            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" className="topAvatar" />
            <div style={{paddingTop:'5px',paddingLeft:'2px'}}><span>{username}</span></div>
            </Nav>
            
          </div>:<div></div>}
        </div>
                   
              
            </nav>        
        </div>        
    </div>
    )
}

export default Sidebar
