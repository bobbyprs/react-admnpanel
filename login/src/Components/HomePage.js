import React,{useEffect} from 'react'
import {useCookies} from 'react-cookie'
import {Navbar,Nav,NavDropdown,Image} from 'react-bootstrap'
import HomeHead from '../Headers/HomeHead'
import Sidebar from '../Headers/Sidebar'
import Chart from './Chart'
import WidgetLg from '../Components/WidgetLg'
import WidgetSm from '../Components/ WidgetSm'
import FeaturedInfo from './FeaturedInfo'
import {userData} from '../Datadummy/dummyData'
import '../Css/homepage.css'

function HomePage() {

    const [token ,setToken,removeToken] = useCookies(['mytoken'])

    useEffect(() => {
        if(!token['mytoken']) {
            window.location.href = '/'
           
        }
    }, [token])

    useEffect(()=>{
       const staff = localStorage.getItem('staff_status')
       const superuser = localStorage.getItem('super_user')
        if(token['mytoken']){
            if(superuser == 'false'){
                window.location.href ='/staff'
            }
        }
        
    })

    return (
        <div className='coinatiner'>
        <div className="home">
        <FeaturedInfo/>
        <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
        <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
        </div>
      </div>
                   
        </div>
    )
}

export default HomePage











































     {/* <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
            <Navbar.Brand href="#home"><Image src='https://www.kyvorgenomics.com/images/logo_1.png'style={{width:'80px',height:'50px'}}></Image></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <NavDropdown style={{paddingRight:'100px'}} title="User" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar> */}