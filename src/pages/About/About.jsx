import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      {/* Hero Section */}
      <section className="hero">
        <img
          className="hero-img"
          src="https://images.unsplash.com/photo-1518770660439-4636190af475"
          alt="technology"
        />
        <h1>Stories, Ideas & Inspiration</h1>
        <p>
          Welcome to a space where ideas are shared, knowledge is explored,
          and creativity finds its voice.
        </p>
      </section>

      {/* Technology Section */}
      <section className="blog-section">
        <div className="blog-content">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            alt="technology"
          />
          <div>
            <h2>The Power of Technology</h2>
            <p>
              Technology continues to reshape the way we live, work, and
              communicate. From artificial intelligence to cloud computing,
              modern innovations are transforming industries.
            </p>
          </div>
        </div>
      </section>

      {/* Programming Section */}
      <section className="blog-section">
        <div className="blog-content">
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
            alt="programming"
          />
          <div>
            <h2>Learning Programming</h2>
            <p>
              Programming is about solving problems and building solutions.
              Developers use creativity and logic to create applications
              that power modern digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Design Section */}
      <section className="blog-section">
        <div className="blog-content">
          <img
            src="https://images.unsplash.com/photo-1558655146-d09347e92766"
            alt="design"
          />
          <div>
            <h2>Creative Design Thinking</h2>
            <p>
              Design connects technology and people. A well-designed product
              provides intuitive experiences and meaningful interaction.
            </p>
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="blog-section">
        <div className="blog-content">
          <img
            src="https://images.pexels.com/photos/19931917/pexels-photo-19931917.jpeg"
            alt="lifestyle"
          />
          <div>
            <h2>Balanced Lifestyle</h2>
            <p>
              Success is not only about productivity. Maintaining balance,
              health, and mindfulness is important for long-term happiness.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;