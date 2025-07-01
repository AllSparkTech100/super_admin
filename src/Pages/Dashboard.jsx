import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Users, Target, Calendar, TrendingUp, TrendingDown, BarChart3, FileText, Bell, Settings, ChevronDown } from 'lucide-react';
import { Profile_Img } from "../lib/Images";

const Dashboard = () => {
  // Get admin name from localStorage or fallback
  const [adminName, setAdminName] = useState('Admin');
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState('');

  useEffect(() => {
    // Example: get user name from localStorage or auth context
    const storedName = localStorage.getItem('adminName');
    setAdminName(storedName || 'Admin');
  }, []);
  // Pie chart data sets for animation
  const pieDataSets = [
    [
      { name: 'Sales', value: 40, color: '#34A853' },
      { name: 'Engagement', value: 25, color: '#EA4335' },
      { name: 'Performance', value: 20, color: '#FBC02D' },
      { name: 'Productivity', value: 10, color: '#4285F4' },
      { name: 'Others', value: 5, color: '#A0AEC0' }
    ],
    [
      { name: 'Sales', value: 30, color: '#34A853' },
      { name: 'Engagement', value: 30, color: '#EA4335' },
      { name: 'Performance', value: 25, color: '#FBC02D' },
      { name: 'Productivity', value: 10, color: '#4285F4' },
      { name: 'Others', value: 5, color: '#A0AEC0' }
    ],
    [
      { name: 'Sales', value: 35, color: '#34A853' },
      { name: 'Engagement', value: 20, color: '#EA4335' },
      { name: 'Performance', value: 25, color: '#FBC02D' },
      { name: 'Productivity', value: 15, color: '#4285F4' },
      { name: 'Others', value: 5, color: '#A0AEC0' }
    ]
  ];

  const [pieIndex, setPieIndex] = useState(0);
  const chartData = pieDataSets[pieIndex];

  // Cycle through pie chart data every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPieIndex(prev => (prev + 1) % pieDataSets.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [pieDataSets.length]);

  const stats = [
    {
      title: 'Total Users',
      value: '1245',
      subtitle: 'Admin user account 243',
      icon: Users,
      color: 'bg-blue-50 text-blue-600',
      trend: 'up'
    },
    {
      title: 'Active Courses',
      value: '320',
      subtitle: 'Course publish 180',
      icon: Target,
      color: 'bg-green-50 text-green-600',
      trend: 'up'
    },
    {
      title: 'Course Schedule',
      value: '12',
      subtitle: 'Batch for schedule course',
      icon: Calendar,
      color: 'bg-yellow-50 text-yellow-600',
      trend: 'up'
    },
    {
      title: 'System Uptime',
      value: '99.9%',
      subtitle: 'System uptime for this month',
      icon: TrendingUp,
      color: 'bg-purple-50 text-purple-600',
      trend: 'up'
    },
    {
      title: 'Daily Login',
      value: '530',
      subtitle: 'New user join based on login',
      icon: BarChart3,
      color: 'bg-teal-50 text-teal-600',
      trend: 'up'
    },
    {
      title: 'Feedback',
      value: '25',
      subtitle: 'User submit our service',
      icon: FileText,
      color: 'bg-red-50 text-red-600',
      trend: 'down'
    }
  ];

  return (
    <main className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <div className="text-xs text-gray-500">Page/Student Portal</div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        </div>
        {/* Search bar and profile */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <form
            className="flex items-center bg-white border border-gray-300 rounded-full px-2 py-1 w-full max-w-xs"
            onSubmit={e => {
              e.preventDefault();
              setSearchResult(search);
            }}
          >
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="bg-transparent outline-none px-2 py-1 flex-1 text-sm"
            />
            <button type="submit" className="text-gray-500 px-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
              </svg>
            </button>
          </form>
          {/* Profile */}
          <div className="flex items-center gap-2">
            {/* <span className="hidden sm:block text-sm text-gray-700 font-medium">{adminName}</span> */}
            <img
              src={Profile_Img}
              loading='lazy'
              alt="Profile"
              className="w-8 h-8 rounded-full border border-gray-200 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Welcome and Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <div>
          <span className="text-sm text-gray-700">Welcome back,</span>
          <span className="block text-lg font-bold text-blue-700">{adminName}</span>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-2">
            <FileText className="w-4 h-4" />
            <span>Check Report</span>
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center gap-2">
            <Settings className="w-4 h-4" />
            <span>Quick Actions</span>
          </button>
        </div>
      </div>

      {/* Search Result (optional) */}
      {searchResult && (
        <div className="mb-4 text-sm text-gray-600">Search result for: <span className="font-semibold">{searchResult}</span></div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.subtitle}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <IconComponent className="w-6 h-6" />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                {stat.trend === 'up' ? (
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                )}
                <span className={`text-xs font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.trend === 'up' ? '+12%' : '-5%'}
                </span>
                <span className="text-xs text-gray-500 ml-1">from last month</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Animated Pie Chart Section with labels inside each section */}
      <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm mt-6 flex flex-col items-center">
        <div className="w-full flex flex-col items-center">
          <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={0}
                  outerRadius={180}
                  label={({ cx, cy, midAngle, innerRadius, outerRadius, index }) => {
                    const RADIAN = Math.PI / 180;
                    const radius = innerRadius + (outerRadius - innerRadius) * 0.7;
                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                    const y = cy + radius * Math.sin(-midAngle * RADIAN);
                    return (
                      <text
                        x={x}
                        y={y}
                        fill="#222"
                        textAnchor={x > cx ? 'start' : 'end'}
                        dominantBaseline="central"
                        fontSize={20}
                        fontWeight="bold"
                      >
                        {chartData[index].value}%\n<tspan fontSize={14} fontWeight="normal">{chartData[index].name}</tspan>
                      </text>
                    );
                  }}
                  labelLine={false}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 text-center text-xs text-gray-600">Category Distribution of Reports Generated</div>
        </div>
      </div>
    </main>
    // </div>
  );
};

export default Dashboard;