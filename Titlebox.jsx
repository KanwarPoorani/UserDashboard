import React from 'react'

const Titlebox = () => {
  return (
    <div className="w-[90%] mx-auto bg-[#253D90] rounded-xl p-7  flex justify-between items-center shadow-md">
      {/* Left Section - Avatar & Info */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow">
          <img
            src="https://i.pravatar.cc/100?img=3 "
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* User Info */}
        <div>
          <h2 className="text-white text-xl font-bold">Kanwar Lal</h2>
          <p className="text-white text-sm opacity-90">
            Front-end Developer
          </p>
        </div>
      </div>

      {/* Right Section - Button + Arrow */}
      <div className="flex items-center gap-4">
        <button className="bg-[#FFC107] hover:bg-[#e0a800] transition-all text-black px-6 py-2 rounded-md font-medium shadow">
          Edit Profile
        </button>

        {/* Arrow Image */}
        {/* <img
          src="/arrow.png"
          alt="Arrow"
          className="w-12 h-12 animate-bounce"
        /> */}
      </div>
    </div>
  )
}

export default Titlebox;
