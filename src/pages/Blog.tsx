import BlogCommponet from "@/components/Blog";
import { Helmet } from "react-helmet";
const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>Blog - CodeX Africa</title>
        <meta
          name="description"
          content="Dive into our blog to explore articles, insights, and updates on technology trends, business strategies, and digital innovation."
        />
      </Helmet>
      <BlogCommponet />
    </div>
  );
};

export default Blog;
