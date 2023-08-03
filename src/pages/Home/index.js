import { useEffect, useState } from "react";
import { BlogList } from "../../components";
import useFetch from "../../customHooks/useFetch";

const Home = () => {
    const {data: blogs, isLoading, error} = useFetch("http://localhost:8000/blogs")

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && 
            <BlogList 
            blogs = {blogs}
            title = "All Blogs"
            // handleDelete = {handleDelete}
            />}

        </div>
     );
}
 
export default Home;