import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../../data/axios";
import "./Technology.css";

const Technology = () => {

  const { id } = useParams();
  const [post, setPost] = useState(null);

  const BASE_URL = import.meta.env.VITE_API_BASE_URL_DEPLOY;

  useEffect(() => {
    API.get(`/api/v1/tech/${id}/`)
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!post) return <h2 className="loading">Loading...</h2>;

  const imageUrl = post.img
    ? post.img.startsWith("http")
      ? post.img
      : `${BASE_URL}${post.img}`
    : "https://via.placeholder.com/800x400";

  return (
    <div className="post-container">

      <h1 className="post-title">{post.caption}</h1>

      <img
        className="post-image"
        src={imageUrl}
        alt={post.caption}
      />

      <p className="post-description">{post.des}</p>

    </div>
  );
};

export default Technology;