import { useEffect, useState } from "react";
import { BlogList } from "../../components";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleDelete = (id) =>{
      const newblogs = blogs.filter(blog => blog.id !== id);
      setBlogs(newblogs);
    }

    useEffect(() =>{
      fetch('http://localhost:8000/blogss')
        .then(res =>{
          if(!res.ok){
            throw Error("Couldn't fetch the error")
          }
          return res.json();
        })
        .then(data =>{
          setBlogs(data);
          setIsLoading(false);
          setError(null);
        })
        .catch(err => {
          setError(err.message);
          setIsLoading(false);
        })
    }, []);

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && 
            <BlogList 
            blogs = {blogs}
            title = "All Blogs"
            handleDelete = {handleDelete}
            />}
        </div>
     );
}
 
export default Home;