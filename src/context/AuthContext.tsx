import { createContext, useEffect, useState } from "react";

interface AuthContextType {
    isAuthenticated: boolean;
    updatedAuth: (flag: boolean) => void;
}

export const AuthContext = createContext<AuthContextType ! undefined>(
    undefined
);

export const AuthContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const [isAuthenticated, setAuthenticated] = useState<boolean>(false);
    const updateAuth = (flag: boolean) => {
        setAuthenticated(flag);
    };

    useEffect(() => {
        const authObject = localStorage.getItem("user");
        if (authObject) {
            setAuthenticated(true);
        }
    }, []);
    
    return (
        <AutheContext.Provider value={{isAuthenticated, updateAuth}}>{children}
        </AutheContext.Provider>
    )
}