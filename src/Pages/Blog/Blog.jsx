import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import BlogSpotlight from "../../Components/BlogSpotlight/BlogSpotlight";
import RecentBlog from "../../Components/RecentBlog/RecentBlog";
import Articles from "../../Components/Articles/Articles";

function Blog() {
  return (
    <div className="blog">
      <Header />
      <BlogSpotlight />
      <RecentBlog />
      <Articles />
      <Footer />
    </div>
  );
}

export default Blog;
