import React, { useState } from "react";

function Fvd() {
    const [ischeck,setIschceck]= useState(false);
  return (
    <div>
      {ischeck ? (
        <>
          <div class="bg-gradient-to-r from-purple-500 to-indigo-500 text-black p-8 rounded-lg shadow-lg flex items-center justify-between">
            <div>
              <h2 class="text-2xl font-bold mb-2">
                Thank You for Joining us as a Travel Agent!
              </h2>
              <p class="text-lg mb-4" style={{ fontWeight: "bolder" }}>
                We are grateful to have you as a part of our platform. Your
                dedication and expertise help travelers have incredible
                experiences. Keep up the great work, and let's continue to
                create unforgettable journeys together!
              </p>
              <div className="flex items-center justify-between">
                <Link
                  class="bg-white text-purple-500 font-bold py-2 px-4 rounded hover:bg-gray-100 transition duration-300 mr-3"
                  to="/mytrips"
                >
                  Manage Your Trips
                </Link>
                <Link
                  class="bg-white text-purple-500 font-bold py-2 mr-10 px-4 rounded hover:bg-gray-100 transition duration-300"
                  to="/createtrip"
                >
                  Create more trips to enhance user travel experiences.
                </Link>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1553073520-80b5ad5ec870?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbW11bml0eSUyMHN1cHBvc3J0fGVufDB8fDB8fHww"
                alt="Grateful Agent"
                style={{ objectFit: "cover" }}
                className="w-max h-48 rounded-3xl"
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div class="bg-gradient-to-r from-blue-500 to-green-500 text-black p-8 rounded-lg shadow-lg flex items-center justify-between">
            <div>
              <h2 class="text-2xl font-bold mb-2">
                Become a Verified Travel Agent
              </h2>
              <p class="text-lg mb-4" style={{ fontWeight: "bolder" }}>
                Join our platform as a verified travel agent and gain exclusive
                access to create and manage trips. Enjoy the benefits of
                enhanced credibility and trust from travelers. Get verified
                today and start earning with our paid agent program!!
              </p>
              <div>
                {" "}
                <NavLink
                  class="bg-white text-blue-500 font-bold py-2 px-4 rounded hover:bg-gray-100 transition duration-300"
                  to="/agentverification-via-OTP"
                >
                  <button class="inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-[#46311f] hover:bg-white hover:text-[#7747FF] focus:text-[#7747FF] focus:bg-gray-200 text-gray-50 font-bold leading-loose transition duration-200">
                    Get Verified Now
                  </button>
                </NavLink>
              </div>
            </div>
            <div>
              <img
                src="https://media.istockphoto.com/id/1332358775/photo/young-couple-shaking-hands-deal-contract-real-estate-investment-business-agreement-agent.webp?b=1&s=170667a&w=0&k=20&c=VqF0JlBFzgCd8gn8lDW7yAEhlPO9RpI0g1Lx2k_Z-j8="
                alt="Travel Agent"
                class="max-w-96 h-48 rounded-3xl shadow-lg"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Fvd;
