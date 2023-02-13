import API from "../Axios/axios";
import useUserContext from "../Hooks/ContextHooks/useUserContext";

const useUserCollection = () => {
  const { setUser } = useUserContext();

  const login = (email, password) => {
    const credentials = {
      email,
      password,
    };
    API.post("/login", credentials).then((res) => {
      console.log(res.data);
      setUser(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));
    });
  };

  const signup = (email, password, username) => {
    const credentials = {
      email,
      password,
      name: username,
    };
    API.post("/signup", credentials).then((res) => {
      console.log(res.data);
      setUser(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));
    });
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return { login, signup, logout };
};

export default useUserCollection;
