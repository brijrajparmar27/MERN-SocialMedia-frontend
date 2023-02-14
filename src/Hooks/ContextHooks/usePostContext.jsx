import { useContext } from "react";
import { PostContext } from "../../Context/postContext";

const usePostContext = () => {
  const { posts, setPosts } = useContext(PostContext);
  return { posts, setPosts };
};

export default usePostContext;
