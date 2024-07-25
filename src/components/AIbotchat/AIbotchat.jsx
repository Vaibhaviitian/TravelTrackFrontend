import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChatBotCard = () => {
//  alert("Data will not stored in history search anything")
  const Name = localStorage.getItem('user');
  let sname = Name[0];
  const [prompt, setPrompt] = useState("");
  const [submittedPrompt, setSubmittedPrompt] = useState("");
  const [ans, setAns] = useState("");

  const getaidata = async (e) => {
    toast.success("answer is generating , wait...");

    e.preventDefault();
    try {
      const data = {
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      };
      setSubmittedPrompt(prompt);
      let response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyD9K9wD-Y7NaHUe6ybtntQd6EX7CGcsBRc",
        data
      );
      
      if (!response) {
        console.log("Having error in getting ai data");
        toast.error("Having error in getting ai data");
      }
      console.log(response.data);
      response = response.data.candidates[0].content.parts[0].text;
      console.log(response);
      setAns(response);
      setPrompt("");
    } catch (error) {
      console.log(error);
      console.log(
        "Having error while getting data " + error.response.data.error.message
      );
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center bg-slate-300">
      <div className="h-96 w-fit flex flex-col bg-black  mt-10 mb-10 text-white">
        <div className="flex-grow overflow-auto p-6">
          <div className="max-w-2xl mx-auto bg-gray shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4">
              <div className="font-bold text-3xl mb-2 flex items-center justify-center text-orange-500">
                Hey,{Name} how can I assist you
              </div>
              <div>
                <div className="text-gray-300 mt-2 text-lg mb-4">
                  {submittedPrompt !== "" && (
                    <>
                      <div className="flex items-center justify-center bg-indigo-500 text-white rounded-full h-10 w-10">
                        {(sname).toUpperCase()}
                      </div>
                      <p>{submittedPrompt}</p>{" "}
                    </>
                  )}
                </div>
              </div>
              <div>
                <div className="text-gray-300 mt-2 text-lg mb-4">
                  {ans !== "" && (
                    <>
                      <div className="flex items-center justify-center rounded-full h-10 w-10">
                        <img
                          src="https://media.istockphoto.com/id/1473530524/photo/artificial-intelligence-and-future-technology-concept-with-glowing-digital-graphic-ai-sign-on.webp?b=1&s=170667a&w=0&k=20&c=TKww47awaFMx-yMc1FHew2KobVAUePjIBhhcWRSFINU="
                          alt="Answer"
                        />
                      </div>{" "}
                      <p>{ans}</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 bg-black-400 border-t shadow-lg">
          <form className="flex items-center max-w-lg mx-auto">
            <label className="sr-only" htmlFor="voice-search">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                >
                  <path
                    d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    stroke="currentColor"
                  ></path>
                </svg>
              </div>
              <input
                required
                placeholder="Search..."
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="voice-search"
                type="text"
                value={prompt}
                onChange={(e) => {
                  setPrompt(e.target.value);
                }}
              />
            </div>
            <button
              class="cursor-pointer ml-5 text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700 hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
              onClick={getaidata}
            >
              GO
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ChatBotCard;
