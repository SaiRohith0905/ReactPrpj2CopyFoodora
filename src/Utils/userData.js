import { createContext } from "react";


const userData = createContext({
    loginDetails : {
        userName : '',
        userEmail : ''
    }
})

export default userData