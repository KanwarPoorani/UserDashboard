import React from "react";

const actions = [
  "Apply for Leave",
  "KPI Goals",
  "Take Appraisal",
  "View Payslip",
  "Update Profile",
  "Events",
];

// mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8

const QuickActions = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Quick Actions
      </h2>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-8">
        {actions.map((action, index) => (
          <button
            key={index}
            className="px-11 py-2 bg-white rounded-full shadow hover:bg-[#253D90] hover:text-white transition-all duration-300 ease-in-out"
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
