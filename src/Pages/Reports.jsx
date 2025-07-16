import React from 'react';

const reports = [
  { sn: '01', name: 'Monthly Sales Report', status: 'Completed', date: '01-Jan-2025 12:00 PM', action: 'View' },
  { sn: '01', name: 'User Engagement Report', status: 'Completed', date: '15-Dec-2024 10:45 AM', action: 'View' },
  { sn: '01', name: 'Pending Task Summary', status: 'Pending', date: '05-Dec-2024 09:30 AM', action: 'Retry' },
  { sn: '01', name: 'Performance Insights', status: 'Failed', date: '20-Nov-2024 03:15 PM', action: 'Retry' },
  { sn: '01', name: 'User Engagement Report', status: 'Completed', date: '15-Dec-2024 10:45 AM', action: 'View' },
  { sn: '01', name: 'Pending Task Summary', status: 'Pending', date: '05-Dec-2024 09:30 AM', action: 'Retry' },
  { sn: '01', name: 'Performance Insights', status: 'Failed', date: '20-Nov-2024 03:15 PM', action: 'Retry' },
];

const statusColor = {
  Completed: 'text-green-600',
  Pending: 'text-yellow-500',
  Failed: 'text-red-500',
};

function Reports() {
  return (
    <div className="min-h-screen bg-[#f5f8fe] px-2 sm:px-4 py-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <div>
            <div className="text-xs text-gray-500">Page/Admin Portal</div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Report Overview</h1>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <form className="flex items-center bg-white border border-gray-300 rounded-full px-2 py-1 w-full max-w-xs">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none px-2 py-1 flex-1 text-sm"
              />
              <button type="submit" className="text-gray-500 px-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
                </svg>
              </button>
            </form>
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Profile"
              className="w-8 h-8 rounded-full border border-gray-200 object-cover"
            />
          </div>
        </div>

        <div className="text-sm text-blue-700 font-semibold mb-2 cursor-pointer">Detailed Reports Overview</div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b text-gray-600">
                <th className="py-3 px-2">SN</th>
                <th className="py-3 px-2">Report Name</th>
                <th className="py-3 px-2">Status</th>
                <th className="py-3 px-2">Date/Time</th>
                <th className="py-3 px-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report, idx) => (
                <tr key={idx} className="border-b last:border-b-0 hover:bg-gray-50">
                  <td className="py-2 px-2 font-mono text-xs">{report.sn}</td>
                  <td className="py-2 px-2 whitespace-nowrap">{report.name}</td>
                  <td className={`py-2 px-2 font-semibold ${statusColor[report.status]}`}>{report.status}</td>
                  <td className="py-2 px-2 whitespace-nowrap">{report.date}</td>
                  <td className="py-2 px-2">
                    {report.action === 'View' ? (
                      <button className="text-blue-700 hover:underline">View</button>
                    ) : (
                      <button className="text-yellow-600 hover:underline">Retry</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <button className="px-2 py-1 rounded hover:bg-gray-200 disabled:opacity-50" disabled>{'<'}</button>
          <span className="text-sm font-medium">1 of 20</span>
          <button className="px-2 py-1 rounded hover:bg-gray-200">{'>'}</button>
        </div>
      </div>
    </div>
  );
}

export default Reports;