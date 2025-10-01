import React from "react";

const Cards = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Available Leave Days */}
        <div className="bg-white rounded-xl shadow p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Available Leave Days</h2>
            <button className="text-gray-400 hover:text-gray-600">⋮</button>
          </div>

          {[
            { label: "Annual Leave", used: 10, total: 60 },
            { label: "Sick Leave", used: 0, total: 10 },
            { label: "Compassionate Leave", used: 8, total: 15 },
          ].map((leave, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>{leave.label}</span>
                <span>
                  {leave.used} of {leave.total} day(s)
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#253D90] h-2 rounded-full"
                  style={{
                    width: `${(leave.used / leave.total) * 100}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* To-dos */}
        <div className="bg-white rounded-xl shadow p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">To-dos</h2>
            <button className="text-gray-400 hover:text-gray-600">⋮</button>
          </div>
          <div className="space-y-3">
            {[
              "Complete Onboarding Document Upload",
              "Follow up on clients on documents",
              "Design wireframes for LMS",
              "Create case study for next IT project",
              "Follow up on clients on documents",
            ].map((task, index) => (
              <div
                key={index}
                className="bg-[#EAF4FB] rounded-lg px-4 py-2 flex justify-between items-center shadow-sm"
              >
                <span className="text-gray-700 text-sm">{task}</span>
                <button className="text-gray-500">▼</button>
              </div>
            ))}
          </div>
        </div>

        {/* Announcements */}
        <div className="bg-white rounded-xl shadow p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Announcement(s)</h2>
            <button className="text-gray-400 hover:text-gray-600">⋮</button>
          </div>
          <div className="space-y-3">
            {[
              "Welcome Saron - We have a new staff joining us",
              "Sendforth for Project Manager: Kindly gather at the meeting hall",
              "Marriage Alert",
              "Office Space Update",
            ].map((announcement, index) => (
              <div
                key={index}
                className="bg-[#EAF4FB] rounded-lg px-4 py-2 flex justify-between items-center shadow-sm"
              >
                <span className="text-gray-700 text-sm">{announcement}</span>
                <button className="text-gray-500">▼</button>
              </div>
            ))}
          </div>
        </div>

        {/* April Pay Slip Breakdown */}
        <div className="bg-white rounded-xl shadow p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">April Pay slip breakdown</h2>
            <button className="text-gray-400 hover:text-gray-600">⋮</button>
          </div>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#EAF4FB]">
                <th className="p-2 text-left">Earnings</th>
                <th className="p-2 text-right">Amount</th>
                <th className="p-2 text-right">Deductions</th>
                <th className="p-2 text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Basic Wage", "150,000", "-30,000", "120,000"],
                ["Tax", "15,000", "-3,000", "12,000"],
                ["Pension", "15,000", "-3,000", "12,000"],
                ["Total Earnings", "150,000", "-36,000", "114,000"],
              ].map((row, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  {row.map((cell, i) => (
                    <td
                      key={i}
                      className={`p-2 ${i === 0 ? "text-left" : "text-right"
                        }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cards;
