import "./PostCard.css";
import HighLights from "../../HighLights/HighLights";
import { useState, useEffect } from "react";
import API from "../../../data/axios";

const PostCard = () => {

  const [blog, setBlog] = useState([]);

  useEffect(() => {
    API.get("/api/v1/blog/")
      .then((res) => {
        // fix here
        setBlog(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>

      <h2>Latest Blog</h2>
      <hr />

      <div className="card-gallery">

        {blog.map((item) => (
          <div key={item.id} className="card">

            <img
              src={`${import.meta.env.VITE_API_BASE_URL_DEPLOY}${item.img}`}
              alt={item.caption}
            />

            <h3>{item.caption}</h3>

            <p>{item.des}</p>

            <button>Read More</button>

          </div>
        ))}

      </div>

      <HighLights />

    </div>
  );
};

export default PostCard;