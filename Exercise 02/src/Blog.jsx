const Header = () => {
  return (
    <header>
      <h1>Full React tutorials sponsered by Dugsiiye</h1>
    </header>
  );
};

const Post = () => {
  return (
    <article>
      <h2>Post Title</h2>
      <p>This is the content of the blog post.</p>
    </article>
  );
};

const Footer = () => {
  return <footer>&copy; 2025 My Blog</footer>;
};

const Blog = ()=> {
    return (
        <div>
            <Header />
            <Post />
            <Footer />
        </div>
    );
};

export default Blog;