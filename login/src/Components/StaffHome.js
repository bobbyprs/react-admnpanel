import React ,{useEffect, useState} from 'react'
import {useCookies} from 'react-cookie'
import Sidebar from '../Headers/Sidebar'
import DataTable from './DataTable'

function StaffHome() {
        
    const [token ,setToken,removeToken] = useCookies(['mytoken'])
    const [update,setUpdate] = useState()
    useEffect(() => {
        if(!token['mytoken']) {
            window.location.href = '/'
           
        }
    }, [token])

    useEffect(()=>{
        const staff = localStorage.getItem('staff_status')
        const superuser = localStorage.getItem('super_user')
         if(token['mytoken']){
             if(superuser == 'true'){
                 window.location.href ='/home'
             }
         }
     })
     
       
      useEffect(async ()=>{
        try {
            const res = await fetch(`https://reqres.in/api/users?page=2/`, {
                'method': 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    
                },     
            });
            const res_1 = await res.json();
            console.log(res_1.data)
            return setUpdate(res_1.data);
        } catch (error) {
            return console.error(error);
        }
      })

      console.log(update)


    return (
        <div className='cointainer'>
             {/* <div className='cointainer'style={{marginTop:'10px',marginBottom:'160px'}}>
            <Sidebar/><br/>
            </div> */}
            <div className='content'style={{maxWidth:'80%',padding:'auto',margin:'auto',position:''}}>
            <DataTable/>
            </div>
           
            {/* {update ? <div>{ update && update.data.map((item)=>{
                    return (
                        <div>
                            {item.email}
                        </div>
                    )
                })}</div>:''
               
            } */}

        </div>
    )
}

export default StaffHome
