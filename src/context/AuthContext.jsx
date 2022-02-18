import { createContext, useContext } from 'react'

    const authContext = createContext();

    //esta es la funcion que va hacer de hook y colocarlos en todas los componentes

    export const useAuth = () => {
        const context = useContext(authContext);
        return context;
    }

    export function AuthProvider ({children}) {
        const user = {
            login: true,
        }
        return <authContext.Provider value={{user}}>{children}</authContext.Provider>
    }
export default AuthProvider;


