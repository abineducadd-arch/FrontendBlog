import React, { useEffect, useState } from "react";
import API from "../../data/axios";
import './BlogView.css'

const BlogView = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    API.get("api/v1/blog/")
      .then((res) => setBlog(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="blog-container">

      <h2 className="blog-title">Latest Blogs</h2>

      <div className="blog-grid">

        {blog.map((item) => (
          <div className="blog-card" key={item.id}>

            <img
              src={item.img}
              alt={item.caption}
              className="blog-image"
            />

            <div className="blog-content">
              <h3>{item.caption}</h3>
              <p>{item.des}</p>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default BlogView;