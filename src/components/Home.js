import React, { useState } from 'react';
import '../style/Home.css';
import KafkaComponent from './KafkaComponent';

function Home() {
  const [showKafkaComponent, setShowKafkaComponent] = useState(false);

  const handleFeatureOneClick = () => {
    setShowKafkaComponent(true);
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Our App</h1>
        <p>Your solution to all things awesome</p>
        <button>Get Started</button>
      </section>
      
      {/* Features Section */}
      <section className="features">
        <h2>Our Features</h2>
        <div className="feature-cards">
          <div className="feature-card" onClick={handleFeatureOneClick}>
            <img src="feature1.png" alt="Feature 1" />
            <h3>Feature One</h3>
            <p>Brief description of Feature One.</p>
          </div>
          <div className="feature-card">
            <img src="feature2.png" alt="Feature 2" />
            <h3>Feature Two</h3>
            <p>Brief description of Feature Two.</p>
          </div>
          <div className="feature-card">
            <img src="feature3.png" alt="Feature 3" />
            <h3>Feature Three</h3>
            <p>Brief description of Feature Three.</p>
          </div>
        </div>
      </section>

      {/* Conditional Rendering of KafkaComponent */}
      {showKafkaComponent && <KafkaComponent />}

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"This app changed my life!"</p>
            <p>- User One</p>
          </div>
          <div className="testimonial-card">
            <p>"A must-have tool for everyone."</p>
            <p>- User Two</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default Home;
