import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import useUserContext from "./Hooks/ContextHooks/useUserContext";
import Auth from "./Pages/Auth/Auth";
import Home from "./Pages/Home/Home";

function App() {
  const { user } = useUserContext();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/auth" />} />
        <Route path="/auth" element={user ? <Navigate to="/" /> : <Auth />} />
      </Routes>
    </div>
  );
}

export default App;
