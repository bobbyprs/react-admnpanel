import React,{useContext, useEffect, useState} from 'react'
import {ContextProvider} from '../Components/ContexApi'
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import {useCookies} from 'react-cookie'
import { Link } from "react-router-dom";
import '../Css/sidebar.css'
import {Navbar,Nav,NavDropdown,Image} from 'react-bootstrap'
import Sidebar from '../Headers/Sidebar'
import { useTable } from 'react-table'
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from './DataTable';
import '../Css/sidebar.css'


function Users() {
    const {uservalue,setUservalue}=useContext(ContextProvider)
    const [token ,setToken,removeToken] = useCookies(['mytoken'])
    const[user,setuser] = useState([])
    const[q,serQ] = useState('')
   
    useEffect(()=>{
        const staff = localStorage.getItem('staff_status')
        const superuser = localStorage.getItem('super_user')
         if(token['mytoken']){
             if(superuser == 'false'){
                 window.location.href ='/staff'
             }
         }
         
     })

    useEffect(() => {
        if(!token['mytoken']) {
            window.location.href = '/'
            localStorage.clear()
        }
    }, [token])

    useEffect(()=>{
     async function getUser(){
     const userdata =  await fetch('http://127.0.0.1:8000/user/staff/',{
            'method':'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token['mytoken']}`
            }
        })
       .then(res =>res.json())
       .then(res =>{
           setuser(res)  
        })
       .catch(error =>console.error(error))
     }
       getUser() 
       
    },[])

    const insertedInformation =(newuser) =>{
        const new_user=[...user, newuser]
        setuser(new_user)
        try {
            alert('sucessfully updated')
        }
        catch(err) {
            document.getElementById("demo").innerHTML = err.message;
        }
    }
    const updatedInformations =(users,index)=>{
        const new_user=[...user.slice(0,index),users,...user.slice(index+1)]
        setuser(new_user)
    }
    const deletedInformations =(deluser) =>{
        const new_user = user.filter(userdata =>{
            if(userdata.id == deluser.id){
                return false
            }
            return true;
        })
        setuser(new_user)
        console.log(new_user)
    }

    return (
      
        <div className='cointainer'>
            {/* <div className='cointainer'style={{marginTop:'10px',marginBottom:'160px'}}>
            <Sidebar/><br/>
            </div>   */}
            <div className='content'style={{maxWidth:'80%',padding:'auto',margin:'auto',position:''}}>

            <DataTable users={user} insertedInformation={insertedInformation} updatedInformation={updatedInformations} deletedInformations={deletedInformations}/>

            </div> 
        </div>
    )
}

export default Users
