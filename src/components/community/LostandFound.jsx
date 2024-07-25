import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard.jsx";

const LostandFound = () => {
  const [lostposts, setlostposts] = useState([]);
  const [error, setError] = useState(null);
  let id = localStorage.getItem('id');
  id = String(id);

  const getdata = async () => {
    try {
      let response = await axios.get(
        "https://traveltrackbackend-av1l.onrender.com/community/communityinside-done/show-all-blogs"
      );
      response = response.data;
      // console.log("API Response:", response);
      let blogs = response?.Blogs;
      // console.log("Blogs:", blogs);
      setlostposts(blogs);
      // setIslostpost(response?.laf);
    } catch (error) {
      console.log("Error fetching data:", error);
      setError(error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  useEffect(() => {
    // console.log("Getting lost and found posts ", lostposts);
  }, [lostposts]);

  return (
    <>
      {error ? (
        <div>Error: {error.message}</div>
      ) : lostposts.length > 0 ? (
        lostposts.map((post) => (
          post?.laf ? (
            <BlogCard
              key={post?._id}
              id={post?._id}
              islost={post?.laf}
              title={post?.title}
              message={post?.message}
              photo={post?.photo}
              creatingtime={post?.createdAt}
              user={post?.user?.username}
              isuser={id === String(post?.user?._id)}
            />
          ) : (
            <></>
          )
        ))
      ) : (
        <></>
      )}
    </>
  );
};

export default LostandFound;
