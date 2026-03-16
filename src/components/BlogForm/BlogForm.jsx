import React, { useState } from "react";
import API from "../../data/axios";
import "./BlogForm.css";
const BlogForm = () => {

  const [formData, setFormData] = useState({
    caption: "",
    img: null,
    des: ""
  });

  const handleChange = (e) => {

    if (e.target.name === "img") {
      setFormData({
        ...formData,
        img: e.target.files[0]
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("caption", formData.caption);
    data.append("img", formData.img);
    data.append("des", formData.des);

    try {
      const res = await API.post("api/v1/blog/", data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      console.log(res.data);
      alert("Blog Post Created");

    } catch (err) {
      console.log(err.response?.data);
    }
  };

  return (
   <div className="blog-page">

  <div className="blog-container">

    <h2 className="blog-title">Create Blog Post</h2>

    <form onSubmit={handleSubmit} className="blog-form">

      <div>
        <label>Caption</label>
        <input
          type="text"
          name="caption"
          placeholder="Enter caption"
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Upload Image</label>
        <input
          type="file"
          name="img"
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Description</label>
        <textarea
          name="des"
          placeholder="Enter blog description"
          rows="4"
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="blog-button">
        Publish Blog
      </button>

    </form>

  </div>

</div>
  );
};

export default BlogForm;