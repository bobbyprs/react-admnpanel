import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'

const CSRFToken = () => {
    const [csrftoken, setcsrftoken] = useState('');

    const getCookie = (name) => {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            let cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                let cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
        console.log(Cookies.get('mytoken'))
    // useEffect(() => {
    // //     const fetchData = async () => {
    // //         return fetch('http://127.0.0.1:8000/csftoken/',{
    // //             'method':'get',
    // //             headers:{
    // //                 'Content-Type':'application/json',
    // //             },
    // //         })
            
    
    // //    .then(res => console.log(res))
  
    // //    .catch(error =>console.error(error))
    // //     }

    // //     fetchData();
        
    // // }, []);
    // console.log(csrftoken)
    return (
        <input type='hidden' name='csrfmiddlewaretoken' value={'OSafKcCjkTaACXPPBOiY2WGITTbnPCzrR7KkaiNIeQBIRMlUREunRGSvYTzSJLS6'} />
    );
};

export default CSRFToken;