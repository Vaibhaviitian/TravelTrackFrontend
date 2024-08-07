import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading";

const   CreatePosts = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [photo, setPhoto] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isLostAndFound, setIsLostAndFound] = useState(false);
  const user_id = localStorage.getItem("id");
  const navigate = useNavigate();
  const formdata = new FormData();

  formdata.append("title", title);
  formdata.append("message", message);
  formdata.append("photo", photo);
  formdata.append("user_id", user_id);
  formdata.append("lost", isLostAndFound);

  const handlePhotoChanges = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleLostAndFoundChange = (e) => {
    setIsLostAndFound(e.target.checked);
  };

  const getdata = async (event) => {
    try {
      event.preventDefault();
      setLoading(true);
      // console.log("Form submitted");
      let response = await axios.post(
        'https://traveltrackbackend-av1l.onrender.com/community/communityinside-done/creating-new-blog',
        formdata,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      response = await response.data;
      setLoading(false);
      toast.success("Post uploaded successfully");
      alert('Post uploaded successfully');
      navigate('/community');
    } catch (error) {
      console.log("Error in form submission: " + error);
    }
  };

  return (
    <>
      {isLoading ? (
        <>
        <Loading />
      </>
      ) : (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10">
          <h2 className="text-orange-500 text-2xl mb-6 text-center">Create Your Posts</h2>
          <form onSubmit={getdata}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-white text-sm font-bold mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 text-black rounded"
                placeholder="Enter title"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-white text-sm font-bold mb-2">
                Description
              </label>
              <textarea
                id="description"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 text-black rounded"
                placeholder="Enter description"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="files" className="block text-white text-sm font-bold mb-2">
                File/photo
              </label>
              <input
                type="file"
                onChange={handlePhotoChanges}
                id="files"
                className="w-full px-3 py-2 text-white rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lostAndFound" className="block text-white text-sm font-bold mb-2">
                Lost and Found
              </label>
              <input
                type="checkbox"
                id="lostAndFound"
                checked={isLostAndFound}
                onChange={handleLostAndFoundChange}
                className="mr-2"
              />
              <label htmlFor="lostAndFound" className="text-white">
                is this related to Lost and Found ?
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default CreatePosts;
