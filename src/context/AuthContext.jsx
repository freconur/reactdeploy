import { createContext, useContext } from 'react'
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'


const auth = getAuth(app);

    const authContext = createContext();

    //esta es la funcion que va hacer de hook y colocarlos en todas los componentes

    export const useAuth = () => {
        const context = useContext(authContext);
        return context;
    }

    export function AuthProvider ({children}) {
        
        const create = ( email, password ) => {
            createUserWithEmailAndPassword(auth, email, password)
        }
        return <authContext.Provider value={{create}}>{children}</authContext.Provider>
    }
export default AuthProvider;


