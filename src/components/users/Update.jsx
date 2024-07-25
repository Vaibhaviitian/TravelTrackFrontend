import React, { useState } from "react";
import "./Update.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Update() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setfullName] = useState("");
  const editto = localStorage.getItem("Editto");
  const navigate = useNavigate();

  const handlebutton = async () => {
    console.log("aagaye");

    const id = localStorage.getItem("id");
    if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
      console.error("Invalid id:", id);
      toast.error("Invalid ID");
      alert("Invalid ID");
      return;
    }

    try {
      let response;

     if (editto === "Username") {
        console.log("Entered into username");
        response = await axios.post(
          "http://localhost:3000/user/editedTo/username",
          {
            username,
            id,
          }
        );
        toast.success("Edited Username successfully");
        alert("Edited Username successfully");
      } else if (editto === "Email") {
        console.log("Entered into email");
        console.log("NEW Email  is"+email);
        response = await axios.post(
          "http://localhost:3000/user/editedTo/email",
          {
            email,
            id,
          }
        );
        toast.success("Edited Email successfully");
        alert("Edited Email successfully");
      } else {
        console.log("Entered into email");
        console.log("NEW Email  is"+email);
        response = await axios.post(
          "http://localhost:3000/user/editedTo/fullName",
          {
            fullName,
            id,
          }
        );
        toast.success("Edited fullName successfully");
        alert("Edited fullName successfully");
      }

      if (response) {
        // console.log("Updated data:", response.data.loggedInUser);
        localStorage.setItem("userData", JSON.stringify(response.data.loggedInUser));
        navigate("/dashboard");
      } else {
        console.log("Not getting response for ", editto);
      }
    } catch (error) {
      console.error("Error while updating:", error);
      const er = error.response?.data?.message;
      toast.error(er || `An error occurred while updating ${editto}. Please try again.`);
      alert(er || `An error occurred while updating ${editto}. Please try again.`);
    }
  };
  const renderInput = () => {
    if (editto === "Email") {
      return (
        <input
          type="email"
          placeholder="Email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      );
    } else if(editto=='Username'){
      return (
        <input
          type="text"
          placeholder={editto}
          className="input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      );
    }
    else{
      return (
        <input
          type="text"
          placeholder={editto}
          className="input"
          value={fullName}
          onChange={(e) => setfullName(e.target.value)}
        />
      );
    }
  };

  return (
    <div className="main">
      <div className="text">
        <h1 className="h1">Enter your new {editto} ----</h1>
        {renderInput()}
      </div>
      <div className="submit">
        <button
          type="submit"
          className="bg-orange-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded"
          onClick={handlebutton}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Update;
