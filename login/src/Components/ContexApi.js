import React ,{useState,useEffect}from 'react'


export const ContextProvider = React.createContext();

function ContexApi(props) {

    const[uservalue,setUservalue] =useState([])

    useEffect(() => {
        const user=localStorage.getItem('user')
        if (user){
          setUservalue(user)
        }
      }, [])
    
    return (
        <ContextProvider.Provider value={{uservalue,setUservalue}}>
             {props.children}
         </ContextProvider.Provider>
    )
}

export default ContexApi
