import React ,{useContext}from 'react'
import '../Css/topbar.css'
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import {Navbar,Nav,NavDropdown,Image} from 'react-bootstrap'
import {ContextProvider} from '../Components/ContexApi'
import {useCookies} from 'react-cookie'

function HomeHead() {
    const {uservalue,setUservalue}=useContext(ContextProvider)
    const [token ,setToken,removeToken] = useCookies(['mytoken'])
    

    const LogoutBtn = () => {
        console.log("hello")
        localStorage.clear()
        removeToken('mytoken') 
       
      }
      console.log(uservalue)

    return (
        <div className='border border-gray rounded'>
            <div className="topbar ">
        <div className="topbarWrapper">
          <div className="topLeft">
            <span className="logo">kyvorgenomics</span>
          </div>
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
            <img src="https://image.shutterstock.com/image-photo/beautiful-natural-forest-dawn-background-600w-1914465238.jpg" alt="" className="topAvatar" />
            <NavDropdown style={{paddingRight:'100px'}} title={uservalue} id="collasible-nav-dropdown">
                <NavDropdown.Item>Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={LogoutBtn}>Logout</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            
          </div>
        </div>
      </div>
    
        </div>
    )
}

export default HomeHead
