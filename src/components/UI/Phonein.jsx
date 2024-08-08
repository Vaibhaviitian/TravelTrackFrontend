import React, { useState } from "react";
import "./phonein.css";
import axios from 'axios'

function Phonein() {
  const [phonenumber, setPhonenumber] = useState("");
  const handleotp = async (event) => {
    event.preventDefault();
    const response = await axios.post('http://localhost:3000/user/generate-otp',{
      phonenumber
    })
    console.log(response);
  };
  return (
    <>
      <div class="form-container">
        <form class="form">
          <div class="form-group">
            <label for="email">Your mobile number </label>
            <input
              required="true"
              name="number"
              value={phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
              type="tel"
            />
          </div>
          <div class="form-group">
            <label for="textarea">
              Tell us how you can help us by becoming an agent (**optionl**)
            </label>
            <textarea required="" id="textarea" name="textarea" />
          </div>
          <button type="submit" onClick={handleotp} class="form-submit-btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Phonein;
