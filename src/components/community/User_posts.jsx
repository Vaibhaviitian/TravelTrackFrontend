import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "./BlogCard.jsx";
import { useNavigate } from "react-router-dom";

const Userposts = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const getuserposts = async () => {
    try {
      let id = localStorage.getItem("id");
      let username = localStorage.getItem("user");
      setUser(username);

      if (!id) {
        console.log("not getting the id in showing user personal blogs");
        return;
      }

      let response = await axios.get(
        `https://traveltrackbackend-av1l.onrender.com/community/communityinside-done/user-blogs/${id}`
      );

      const user = response.data.data;
      const blogs = user.blogs;

      if (!blogs) {
        console.log("Having error in blogs fetching of user");
        return;
      }

      setPosts(blogs);
    } catch (error) {
      console.log("Having error in getting user personal blogs " + error);
    }
  };

  useEffect(() => {
    getuserposts();
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  const handleCreatePost = () => {
    // Placeholder for navigation logic to create post page
    console.log("Navigate to create post page");
    navigate("/create-posts");
  };

  return (
    <>
      {" "}
      
        {posts.length > 0 ? (
          posts.map((post) => (
            <BlogCard
              id={post?._id} // Ensure a unique key is provided
              title={post?.title}
              message={post?.message}
              photo={post?.photo}
              creatingtime={post?.createdAt}
              user={user}
            />
          ))
        ) : (
          <div className="min-h-screen flex flex-col items-center justify-center bg-black">
             <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">No User Blogs Available</h1>
            <p className="text-lg mb-8">
              Create your first post and share your thoughts with the community!
            </p>
            <button
              className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
              onClick={handleCreatePost}
            >
              Create Your First Post
            </button>
          </div>
          </div>
        )}
    </>
  );
};

export default Userposts;
