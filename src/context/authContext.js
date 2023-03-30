import { createContext,  useEffect, useReducer} from "react";


export const authContext = createContext()


const instialState = {
    email:'',
    token:''
}

export const reducer = (state , action) => {
    switch(action.type) {
        case 'signup' : return {
            email: action.payload.email,
            token:action.payload.token
        }
        case 'logout' : return {
            email:'',
            token:''
        }
        case 'set' : return {
            email : action.payload.email,
            token: action.payload.token
        }
    }
}


export function AuthContextProvider({children}){

 
 const [state , dispatch] = useReducer(reducer , instialState)
 useEffect(() => {
    // check user have token in localstorage
    const user = JSON.parse(localStorage.getItem('user'))

    // if user have token set state 
    if(user){
        dispatch({type:'set' , payload:{email:user.email , token:user.token}})
    }
 } , [])


 return (
  <authContext.Provider value={{dispatch , state}}>
     {children}
  </authContext.Provider>
 )
}
