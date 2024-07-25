import React from "react";

function USerlist({ username, email, avatar }) {
  console.log("Userlist Props:", username, email, avatar); // Debugging: Check if props are logged

  return (
    <div className="flex items-center p-3 w-96 h-28 bg-white rounded-md shadow-lg">
      <img
        src={avatar}
        className="w-10 h-10 rounded-full mr-4"
        alt={username}
      />

      <section className="block border-l border-gray-300 m-3">
        <div className="pl-3">
          <h3 className="text-gray-600 font-semibold text-sm">{email}</h3>
          <h3 className="bg-clip-text text-transparent bg-gradient-to-l from-[#005BC4] to-[#27272A] text-lg font-bold">
            {username}
          </h3>
        </div>
      </section>
    </div>
  );
}

export default USerlist;
