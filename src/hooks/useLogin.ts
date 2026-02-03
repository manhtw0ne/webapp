import { useState } from "react";
import { authenticate } from "../services/auth-service";
import type { AuthRequest } from "../model/AuthRequest";
import {useNavigate} from "react-router-dom";
import { useAuthContext } from "./AuthContext";

export const useLogin = () => {
    const [error, setError] = useState<string>("");
    const [isLoading, setLoader] = useState<boolean>(false);
    const navigate = useNavigate();
    const {updateAuth} = useAuthContext();
    const login = (authRequest: AuthRequest) => {
        setLoader(true);
      authenticate(authRequest)
        .then((response) => {
            console.log(response);
            localStorage.setItem("user", JSON.stringify(response.data));
            updateAuth(true);
            navigate("/");
                })
        .catch((error) => {
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
            } else {

                setError(error.message)
            }
        })
        .finally(() => setLoader(false));
    
    }
    return {error, isLoading, login}
}
