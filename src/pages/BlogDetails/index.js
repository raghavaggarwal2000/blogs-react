import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../../customHooks/useFetch";
import RouteConstants from "../../routes/RouteConstants";

const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog, error, isLoading} = useFetch(`http://localhost:8000/blogs/${id}`);
    const history = useHistory();

    const handleDelete= ()=>{
      fetch(`http://localhost:8000/blogs/${id}`,{
        method: "DELETE"
      })
      .then(() =>{
        history.push(RouteConstants.HOME);
      })
    }

    return (
        <div className="blog-details">
          { isLoading && <div>Loading...</div> }
          { error && <div>{ error }</div> }
          { blog && (
            <article>
              <h2>{ blog.title }</h2>
              <p>Written by { blog.author }</p>
              <div>{ blog.body }</div>
              <button onClick={handleDelete}>Delete</button>
            </article>
          )}
        </div>
      );
    }
 
export default BlogDetails;