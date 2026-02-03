import {Profile} from "../model/Profile"

export const usesignout = () => {
    const {isAuthenticated, updateAuth} = useAuthContext();
    const [error, setError] = useState<string>("");
    const [isLoading, setLoader] = useState<boolean>(false);

    const logout = () => {
        setLoader(true);
      signout()
        .then((response) => {
          if (response && response.status === 204) {
            localStorage.clear();
            updateAuth(false);
        }
        })
        .catch((error) => console.log(error.message ))
        .finally(() => setLoader(false));
    }
    return {logout}
}