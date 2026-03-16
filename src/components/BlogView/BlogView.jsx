import React, { useEffect, useState } from "react";
import API from "../../data/axios";
import "./BlogView.css";

const BlogView = () => {

  const [blog, setBlog] = useState([]);

  const BASE_URL = import.meta.env.VITE_API_BASE_URL_DEPLOY;

  useEffect(() => {
    API.get("/api/v1/blog/")
      .then((res) => {
        setBlog(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="blog-container">

      <h2 className="blog-title">Latest Blogs</h2>

      <div className="blog-grid">

        {blog.map((item) => {

          const imageUrl = item.img
            ? item.img.startsWith("http")
              ? item.img
              : `${BASE_URL}${item.img}`
            : "https://via.placeholder.com/400x250";

          return (
            <div className="blog-card" key={item.id}>

              <img
                src={imageUrl}
                alt={item.caption}
                className="blog-image"
              />

              <div className="blog-content">
                <h3>{item.caption}</h3>
                <p>{item.des}</p>
              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
};

export default BlogView;