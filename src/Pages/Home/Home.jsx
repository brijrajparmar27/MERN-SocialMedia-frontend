import useUserCollection from "../../Hooks/useUserCollection";
import "./Home.css";

const Home = () => {
  const { logout } = useUserCollection();
  return (
    <div className="home" onClick={logout}>
      Home
    </div>
  );
};

export default Home;
