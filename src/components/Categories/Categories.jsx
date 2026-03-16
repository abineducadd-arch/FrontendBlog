import React, { useState, useEffect } from "react";
import API from "../../data/axios";
import "./Categories.css";
import { useNavigate } from "react-router-dom";

const Categories = () => {

  const navigate = useNavigate();

  const [tech, setTech] = useState([]);
  const [lifeStyle, setLifeStyle] = useState([]);
  const [design, setDesign] = useState([]);
  const [programming, setProgramming] = useState([]);

  useEffect(() => {

    API.get("/api/v1/tech/")
      .then((res) => setTech(res.data.results))
      .catch((err) => console.log(err));

    API.get("/api/v1/design/")
      .then((res) => setDesign(res.data.results))
      .catch((err) => console.log(err));

    API.get("/api/v1/programming/")
      .then((res) => setProgramming(res.data.results))
      .catch((err) => console.log(err));

    API.get("/api/v1/lifestyle/")
      .then((res) => setLifeStyle(res.data.results))
      .catch((err) => console.log(err));

  }, []);

  const handleSelectTech = (id) => {
    navigate(`/categories/tech/${id}`);
  };

  const handleSelectDesign = (id) => {
    navigate(`/categories/design/${id}`);
  };

  const handleSelectProgram = (id) => {
    navigate(`/categories/programming/${id}`);
  };

  const handleSelectLifestyle = (id) => {
    navigate(`/categories/lifestyle/${id}`);
  };

  return (
    <div className="categories-container">

      <h2>Technology</h2>
      <div className="post-grid">
        {tech.map((item) => (
          <div onClick={() => handleSelectTech(item.id)} className="post-card" key={item.id}>
            <h3>{item.caption}</h3>

            <img
              src={`${API.defaults.baseURL}${item.img}`}
              alt={item.caption}
            />

            <p>{item.des}</p>
          </div>
        ))}
      </div>

      <h2>Design</h2>
      <div className="post-grid">
        {design.map((item) => (
          <div onClick={() => handleSelectDesign(item.id)} className="post-card" key={item.id}>
            <h3>{item.caption}</h3>

            <img
              src={`${API.defaults.baseURL}${item.img}`}
              alt={item.caption}
            />

            <p>{item.des}</p>
          </div>
        ))}
      </div>

      <h2>Programming</h2>
      <div className="post-grid">
        {programming.map((item) => (
          <div onClick={() => handleSelectProgram(item.id)} className="post-card" key={item.id}>
            <h3>{item.caption}</h3>

            <img
              src={`${API.defaults.baseURL}${item.img}`}
              alt={item.caption}
            />

            <p>{item.des}</p>
          </div>
        ))}
      </div>

      <h2>Lifestyle</h2>
      <div className="post-grid">
        {lifeStyle.map((item) => (
          <div onClick={() => handleSelectLifestyle(item.id)} className="post-card" key={item.id}>
            <h3>{item.caption}</h3>

            <img
              src={`${API.defaults.baseURL}${item.img}`}
              alt={item.caption}
            />

            <p>{item.des}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Categories;