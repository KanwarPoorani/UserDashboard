import React from 'react';

const Leavepage = () => {
  const leaveHistory = [
    {
      id: 1,
      name: 'Abenexer kebede',
      duration: 5,
      startDate: '22/04/2022',
      endDate: '28/04/2022',
      type: 'Sick',
      reason: 'Personal'
    },
    {
      id: 2,
      name: 'Abenexer kebede',
      duration: 7,
      startDate: '22/04/2022',
      endDate: '30/04/2022',
      type: 'Exam',
      reason: 'Examination'
    },
    {
      id: 3,
      name: 'Abenexer kebede',
      duration: 120,
      startDate: '22/04/2022',
      endDate: '28/06/2022',
      type: 'Maternity',
      reason: 'Child Care'
    },
    {
      id: 4,
      name: 'Abenexer kebede',
      duration: 5,
      startDate: '22/04/2022',
      endDate: '28/04/2022',
      type: 'Sick',
      reason: 'Personal'
    },
    {
      id: 5,
      name: 'Abenexer kebede',
      duration: 5,
      startDate: '22/04/2022',
      endDate: '28/04/2022',
      type: 'Sick',
      reason: 'Personal'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold mb-6">6.0</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Leave Application</h2>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Annual Leave</h3>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Apply
          </button>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Sick Leave</h3>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Apply
          </button>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Maternity Leave</h3>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Apply
          </button>
        </div>
      </div>

      <hr className="border-gray-300 my-6" />

      <div>
        <h2 className="text-2xl font-semibold mb-4">Leave History</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Name(s)</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Duration(s)</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Start Date</th>
                <th className="border border-gray-300 px-4 py-2 text-left">End Date</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Reason(s)</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {leaveHistory.map((item) => (
                <tr key={item.id}>
                  <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.duration}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.startDate}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.endDate}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.type}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.reason}</td>
                  <td className="border border-gray-300 px-4 py-2">Actions</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leavepage;