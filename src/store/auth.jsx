import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const  AuthProvider = ({ children }) =>{

    const storetokenInLS = (servertoken) => {
return localStorage.setItem( 'auth-token', servertoken);
    }
    return <AuthContext.Provider value={{storetokenInLS}}>
{children}
</AuthContext.Provider>
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext) ;
    if (!authContextValue) {
        throw  new Error('useAuth used outside of  the Provider');
    }
    return authContextValue;
  }