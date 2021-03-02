import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useHeader } from "../component/Header";

function ProductDetail() {
  const [post, setPost] = useState({});
  let history = useHistory();
  let params = useParams();
  console.log(params.postId);

  useEffect(() => {
    async function GetPostById() {
      let results = await fetch("http://127.0.0.1:8000/posts/" + params.postId);
      let post = await results.json();
      console.log(post);
      setPost(post.data);
    }
    GetPostById();
  }, []);

  function handleBackClick() {
    history.push("/home");
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "linen",
        minWidth: "100vh",
      }}
    >
      <useHeader />
      <div className="Post-item">
        <h3>{post.title}</h3>
        <h4>{post.content}</h4>
      </div>
    </div>
  );
}

export default ProductDetail;
