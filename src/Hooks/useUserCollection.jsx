import API from "../Axios/axios";

const useUserCollection = () => {
  const login = (email, password) => {
    const credentials = {
      email,
      password,
    };
    API.post("/login", credentials).then((res) => {
      console.log(res);
    });
  };
  const signup = (email, password, username) => {
    const credentials = {
      email,
      password,
      name: username,
    };
    API.post("/signup", credentials).then((res) => {
      console.log(res);
    });
  };
  return { login, signup };
};

export default useUserCollection;
