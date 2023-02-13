import { useContext, useEffect } from "react";
import { UserContext } from "../../Context/userContext";

const useUserContext = () => {
  useEffect(() => {
    const cachedUser = JSON.parse(localStorage.getItem("user"));
    cachedUser && setUser(cachedUser);
  }, []);
  const { user, setUser } = useContext(UserContext);
  return { user, setUser };
};
export default useUserContext;
