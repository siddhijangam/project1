import React from "react";
import "./BlogDetail.css";

const BlogDetail = () => {
  return (
    <div className="blog-container">
      {/* Hero Section */}
      <div className="blog-hero">
        <h1  style={{ fontSize: "48px", fontWeight: "bold", color: "white" }}>Company insights</h1>
        <p style={{color:"white"}}>Home | Blog</p>
      </div>

      <div className="blog-main">
        {/* Left Blog Posts */}
        <div className="blog-posts">
          {/* Post 1 */}
          <div className="post-card">
            <img src="https://preview.colorlib.com/theme/courses/assets/img/blog/single_blog_1.png.webp" alt="blog" />
            <div className="date-badge">
              <span>15</span>
              <small>Jan</small>
            </div>
            <h3>Google inks pact for new 35-storey office</h3>
            <p>
              That dominion stars lights dominion divide years for fourth have don't stars is that he
              earth it first without heaven in place seed it second morning saying.
            </p>
            <div className="post-meta">
              <span>Travel, Lifestyle</span> | <span>03 Comments</span>
            </div>
          </div>

          {/* Post 2 */}
          <div className="post-card">
            <img src="https://preview.colorlib.com/theme/courses/assets/img/blog/single_blog_2.png.webp" alt="blog" />
            <div className="date-badge">
              <span>15</span>
              <small>Jan</small>
            </div>
            
            <h3>Google inks pact for new 35-storey office</h3>
            <p>
              That dominion stars lights dominion divide years for fourth have don't stars is that he
              earth it first without heaven in place seed it second morning saying.
            </p>
            <div className="post-meta">
              <span>Travel, Lifestyle</span> | <span>03 Comments</span>
            </div>
          </div>

         
          {/* Post 3 */}
<div className="post-card">
  <img src="https://preview.colorlib.com/theme/courses/assets/img/blog/single_blog_3.png.webp" alt="blog" />
  <div className="date-badge">
    <span>15</span>
    <small>Jan</small>
  </div>
  <h3>Climatic change is affecting lives</h3>
  <p>
    That dominion stars lights dominion divide years for fourth have don't stars is that he
    earth it first without heaven in place seed it second morning saying.
  </p>
  <div className="post-meta">
    <span>Environment, Nature</span> | <span>05 Comments</span>
  </div>
</div>

{/* Post 4 */}
<div className="post-card">
  <img src="https://preview.colorlib.com/theme/courses/assets/img/blog/single_blog_4.png.webp" alt="blog" />
  <div className="date-badge">
    <span>15</span>
    <small>Jan</small>
  </div>
  <h3>Education opens up a new chapter of life</h3>
  <p>
    That dominion stars lights dominion divide years for fourth have don't stars is that he
    earth it first without heaven in place seed it second morning saying.
  </p>
  <div className="post-meta">
    <span>Education, Study</span> | <span>02 Comments</span>
  </div>
</div>

{/* Post 5 */}
<div className="post-card">
  <img src="https://preview.colorlib.com/theme/courses/assets/img/blog/single_blog_5.png.webp" alt="blog" />
  <div className="date-badge">
    <span>15</span>
    <small>Jan</small>
  </div>
  <h3>New research in Artificial Intelligence</h3>
  <p>
    That dominion stars lights dominion divide years for fourth have don't stars is that he
    earth it first without heaven in place seed it second morning saying.
  </p>
  <div className="post-meta">
    <span>Technology, AI</span> | <span>07 Comments</span>
  </div>
</div>

          
        </div>

        {/* Right Sidebar */}
        <div className="blog-sidebar">
          {/* Search */}
          <div className="sidebar-widget">
            <input type="text" placeholder="Search Keyword" />
            <button>Search</button>
          </div>

          {/* Categories */}
          <div className="sidebar-widget">
            <h4>Category</h4><hr />
            <ul>
              <li>Restaurant food (37)</li>< hr />
              <li>Travel news (10)</li><hr />
              <li>Modern technology (03)</li><hr />
              <li>Product (11)</li><hr />
              <li>Inspiration (21)</li> <hr />
              <li>Health Care (09)</li><hr />
            </ul>
          </div>

          {/* Recent Posts */}
         
<div className="sidebar-widget">
  <h4>Recent Post</h4>
  <ul className="recent-posts">
    <li>
      <img src="https://preview.colorlib.com/theme/courses/assets/img/post/post_1.png.webp" alt="post1" />
      <div>
        From life was you fish... <br />
        <small>January 12, 2019</small>
      </div>
    </li>
    <li>
      <img src="https://preview.colorlib.com/theme/courses/assets/img/post/post_2.png.webp" alt="post2" />
      <div>
        The Amazing Hubble <br />
        <small>02 Hours ago</small>
      </div>
    </li>
    <li>
      <img src="https://preview.colorlib.com/theme/courses/assets/img/post/post_3.png.webp" alt="post3" />
      <div>
        Astronomy Or Astrology <br />
        <small>03 Hours ago</small>
      </div>
    </li>
    <li>
      <img src="https://preview.colorlib.com/theme/courses/assets/img/post/post_4.png.webp" alt="post4" />
      <div>
        Asteroids telescope <br />
        <small>01 Hours ago</small>
      </div>
    </li>
  </ul>
</div>
<div className="sidebar-widget">
  <h4>Tag Clouds</h4>
  <div className="tag-clouds">
    <a href="#">Project</a>
    <a href="#">Love</a>
    <a href="#">Technology</a>
    <a href="#">Travel</a>
    <a href="#">Restaurant</a>
    <a href="#">Lifestyle</a>
    <a href="#">Design</a>
    <a href="#">Illustration</a>
    <a href="#">Project</a>
    <a href="#">Love</a>
    <a href="#">Technology</a>
  </div>
</div>

{/* Instagram Feeds */}
<div className="sidebar-widget">
  <h4>Instagram Feeds</h4>
  <div className="instagram-feeds">
    <img src="https://preview.colorlib.com/theme/courses/assets/img/post/post_5.png.webp" alt="insta1" />
    <img src="https://preview.colorlib.com/theme/courses/assets/img/post/post_6.png.webp" alt="insta2" />
    <img src="https://preview.colorlib.com/theme/courses/assets/img/post/post_7.png.webp" alt="insta3" />
    <img src="https://preview.colorlib.com/theme/courses/assets/img/post/post_8.png.webp" alt="insta4" />
    <img src="https://preview.colorlib.com/theme/courses/assets/img/post/post_9.png.webp" alt="insta5" />
    <img src="https://preview.colorlib.com/theme/courses/assets/img/post/post_10.png.webp" alt="insta6" />
  </div>
</div>

{/* Newsletter */}
<div className="sidebar-widget">
  <h4>Newsletter</h4>
  <p>Subscribe to our newsletter and get updates directly to your inbox.</p>
  <input type="email" placeholder="Enter email" />
  <button>Subscribe</button>
</div>


        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
