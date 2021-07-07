import Cookies from 'js-cookie'


export class APIService{

    static LoginUser(body) {

        return fetch('http://127.0.0.1:8000/login/', {
          'method':'POST',
          headers: {
              'Content-Type':'application/json',
            }, 
            body:JSON.stringify(body)
  
        }).then(resp => {
            console.log(resp)
            return resp.json()
        })
          .catch(error =>{
              console.log(error)
              throw error
          })
      }

      static RegisterUser(body) {

        return fetch('http://127.0.0.1:8000/user/users/', {
          'method':'POST',
          headers: {
              'Content-Type':'application/json',
              
            }, 
            body:JSON.stringify(body)
  
        }).then(resp =>{return resp.json()})
        .catch(error =>{
            console.log(error)
            throw error
        })
      }

      static async  InsertUser(body,token){
        
        const res = await fetch(
            `http://127.0.0.1:8000/user/staff/`, {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`,
            
            },
            body: JSON.stringify(body)
        }
        )
            return await res.json()
        
        
    }
    

     static async UpdateArticle(id,body ,token){
        
        const res = await fetch(
            `http://127.0.0.1:8000/user/staff/${id}/`, {
            'method': 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`,
                
            },
            body: JSON.stringify(body)
        }
        )
        return await res.json()
        }

        static async DeleteArticle(id,token){
            
        
            return fetch(
                `http://127.0.0.1:8000/user/staff/${id}/`, {
                'method': 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`,
                   
                }, 
            })
            .then((res)=>res.json())
            .catch(error => console.log(error))
            }


        static async GetUrl(body){
            const userdata =  await fetch('http://127.0.0.1:8000/json/',{
                'method':'POST',
                headers:{
                    'Content-Type':'application/json',
                    
                },
                body: JSON.stringify(body)
            })
    
           .then(res =>{return res.json()})
           
           .catch(error =>console.error(error))
        }

    
}