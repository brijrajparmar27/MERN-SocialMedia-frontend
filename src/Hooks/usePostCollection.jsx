import API from "../Axios/axios";
import usePostContext from "./ContextHooks/usePostContext";

const usePostCollection = () => {
  const { setPosts } = usePostContext();
  const getAllPosts = () => {
    console.log("get all posts");
    API.get("/files").then((res) => {
      setPosts(res.data);
    });
  };
  const makePost = (formdata) => {
    API.post("/files", formdata).then((res) => {
      console.log(res.data);
      getAllPosts();
    });
  };
  return { getAllPosts, makePost };
};
export default usePostCollection;
