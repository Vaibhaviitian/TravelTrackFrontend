import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import axios from 'axios';

const Community = () => {
  const [carddata, setCardData] = useState([]);
  const id = String(localStorage.getItem('id'));

  const getcarddata = async () => {
    try {
      const response = await axios.get('https://traveltrackbackend-av1l.onrender.com/community/communityinside-done/show-all-blogs');
      const data = response.data;
      // console.log('Fetched data:', data);
      // console.log(data.Blogs[0]._id);
      if (data?.Blogs) {
        setCardData(data.Blogs);
      }
    } catch (error) {
      console.error('Error fetching card data:', error);
    }
  };

  useEffect(() => {
    getcarddata();
  }, []);

  useEffect(() => {
    // console.log('Updated carddata:', carddata);
  }, [carddata]);

  return (
    <div>
      {carddata.length > 0 ? (
        carddata.map((blog) => (
          <BlogCard 
            islost={blog?.laf}
            id={blog?._id}  // Passing the _id explicitly
            title={blog?.title}
            message={blog?.message}
            photo={blog?.photo}
            creatingtime={blog?.createdAt}
            user={blog?.user?.username}
            isuser={id === String(blog?.user?._id)} // Ensure both IDs are strings for comparison
          />
        ))
      ) : (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div
            className="spinner-border text-orange-500"
            role="status"
            style={{ width: "5rem", height: "5rem" }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Community;
