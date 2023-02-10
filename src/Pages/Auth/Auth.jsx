import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import social1 from "../../assets/Images/social1.jpg";
import social2 from "../../assets/Images/social2.jpg";
import social3 from "../../assets/Images/social3.jpg";
import social4 from "../../assets/Images/social4.jpg";
import loader from "../../assets/loader.svg";
import "./Auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [Image, setImage] = useState(social1);
  let counter = 0;

  const ImgArr = [social1, social2, social3, social4];

  useEffect(() => {
    // setInterval(() => {
    //   if (counter > 3) {
    //     counter = 0;
    //   }
    //   setImage(ImgArr[counter]);
    //   console.log(Image);
    //   counter++;
    // }, 2000);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let email = e.target.email.value.trim();
    let password = e.target.password.value.trim();
    if (isLogin) {
      if (isLogin && email.length > 0 && password.length > 0) {
        console.log(email, password);
      } else {
        console.log("cannot be empty");
      }
    } else {
      let username = e.target.username.value.trim();
      if (email.length > 0 && password.length > 0 && username.length > 0) {
        console.log(email, password, username);
      } else {
        console.log("cannot be empty");
      }
    }
  };

  return (
    <div className="auth">
      <div
        className="left_section"
        style={{ backgroundImage: `url("${Image}")` }}
      >
        <img src={logo} className="logo_img" />
      </div>
      <div className="right_section">
        <h1 className="app_title">The Social</h1>
        <div className="right_content">
          <div className="title_contain">
            <h1>{isLogin ? "Login" : "Sign up"}</h1>
            <p>{isLogin ? "Welcome back" : "Lets get you started."}</p>
          </div>
          <div className="form_contain">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="email textbox"
                placeholder="Email"
                name="email"
              />
              <input
                type="password"
                className="password textbox"
                placeholder="Password"
                name="password"
              />
              {!isLogin && (
                <input
                  type="text"
                  className="username textbox"
                  placeholder="Username"
                  name="username"
                />
              )}
              <button type="submit" className="submit_btn">
                {false ? (
                  <img src={loader} className="loader" alt="loading" />
                ) : isLogin ? (
                  "Login"
                ) : (
                  "Sign up"
                )}
              </button>
            </form>
            <p
              className="redirect"
              onClick={() => {
                setIsLogin((prev) => !prev);
              }}
            >
              {isLogin
                ? "Dont have an account? Signup"
                : "Already have an account? Login"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Auth;
