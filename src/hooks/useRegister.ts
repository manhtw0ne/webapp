import {Profile} from "../model/Profile"

export const useRegister = () => {
    const [error, setError] = useState<string>("");
    const [isLoading, setLoader] = useState<boolean>(false);
    const signup = (profile: Profile) => {
        setLoader(true);
      createProfile(profile)
        .then((response) => {
          if (response && response.status === 201) {
            resetForm();
          }
        })
        .catch((error) => console.log(error))
        .finally(() => setLoader(false));
    
    }
}