import React from "react";
import "./AsideSearch.css";

const AsideSearch = () => {
  return (
    <aside className="aside-container">

      {/* Search Box */}
      <div className="aside-card search-box">
        <input
          type="text"
          placeholder="Search..."
        />
      </div>

      {/* Recent Posts */}
      <div className="aside-card">
        <h2>Recent Posts</h2>
        <hr />
        <ul>
          <li>How to start a Blog</li>
          <li>Top Web Development Tips</li>
          <li>Learning React Faster</li>
        </ul>
      </div>

      {/* Categories */}
      <div className="aside-card">
        <h2>Categories</h2>
        <hr />
        <ul>
          <li>Technology</li>
          <li>Design</li>
          <li>Programming</li>
        </ul>
      </div>

    </aside>
  );
};

export default AsideSearch;