import { useEffect } from "react";
import API from "../../Axios/axios";
import usePostContext from "../../Hooks/ContextHooks/usePostContext";
import useUserContext from "../../Hooks/ContextHooks/useUserContext";
import usePostCollection from "../../Hooks/usePostCollection";
import useUserCollection from "../../Hooks/useUserCollection";
import "./Home.css";

const Home = () => {
  const { logout } = useUserCollection();
  const { user } = useUserContext();
  const { getAllPosts, makePost } = usePostCollection();
  const { posts, setPosts } = usePostContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("Image", e.target.image.files[0]);
    formdata.append("hasImage", true);
    formdata.append("caption", "hello world");
    formdata.append("createdBy", user._id);
    makePost(formdata);
    console.log(e.target.image.files[0]);
  };
  useEffect(() => {
    getAllPosts();
  }, []);
  return (
    <div className="home">
      <div className="header">
        <h1 onClick={logout}>Home</h1>
        <form onSubmit={handleSubmit}>
          <input type="file" name="image" id="image" />
          <input type="submit" value="submit" />
        </form>
      </div>

      <div className="posts_contain">
        {posts &&
          posts.map((each) => {
            return (
              <div className="post" key={each._id}>
                <img
                  src={`http://localhost:6010/files/image/${each._id}`}
                  alt={each.caption}
                />
                <p>{each.caption}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
