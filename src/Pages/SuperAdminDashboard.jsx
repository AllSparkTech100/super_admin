// import React, { useState } from 'react';
// import {
//     Users,
//     Building2,
//     Settings,
//     Mail,
//     Shield,
//     UserCheck,
//     UserX,
//     Plus,
//     Search,
//     Filter,
//     MoreHorizontal,
//     Eye,
//     Edit,
//     Trash2,
//     CheckCircle,
//     XCircle,
//     Clock,
//     AlertCircle
// } from 'lucide-react';

// const SuperAdminDashboard = () => {
//     const [activeTab, setActiveTab] = useState('users');
//     const [searchTerm, setSearchTerm] = useState('');
//     const [filterStatus, setFilterStatus] = useState('all');
//     const [showModal, setShowModal] = useState(false);
//     const [modalType, setModalType] = useState('');
//     const [selectedUser, setSelectedUser] = useState(null);

//     // Mock data
//     const [users, setUsers] = useState([
//         {
//             id: 1,
//             name: 'John Doe',
//             email: 'john@example.com',
//             role: 'Teacher',
//             organization: 'Springfield Elementary',
//             status: 'approved',
//             registrationDate: '2024-01-15',
//             lastLogin: '2024-06-15',
//             inviteCode: 'EDU123456'
//         },
//         {
//             id: 2,
//             name: 'Jane Smith',
//             email: 'jane@university.edu',
//             role: 'Student',
//             organization: 'State University',
//             status: 'pending',
//             registrationDate: '2024-06-14',
//             lastLogin: null,
//             inviteCode: 'STU789012'
//         },
//         {
//             id: 3,
//             name: 'Bob Wilson',
//             email: 'bob@parent.com',
//             role: 'Parent',
//             organization: 'Individual',
//             status: 'rejected',
//             registrationDate: '2024-06-10',
//             lastLogin: '2024-06-11',
//             inviteCode: 'PAR345678'
//         }
//     ]);

//     const [organizations, setOrganizations] = useState([
//         {
//             id: 1,
//             name: 'Springfield Elementary',
//             type: 'Educational Institution',
//             adminEmail: 'admin@springfield.edu',
//             members: 45,
//             status: 'active',
//             createdDate: '2024-01-01',
//             inviteCode: 'SPR001'
//         },
//         {
//             id: 2,
//             name: 'State University',
//             type: 'Educational Institution',
//             adminEmail: 'admin@state.edu',
//             members: 1250,
//             status: 'active',
//             createdDate: '2024-02-15',
//             inviteCode: 'UNI002'
//         }
//     ]);

//     const stats = {
//         totalUsers: 1247,
//         pendingApprovals: 23,
//         activeOrganizations: 45,
//         totalInviteCodes: 156
//     };

//     const StatusBadge = ({ status }) => {
//         const statusConfig = {
//             approved: { color: 'bg-green-100 text-green-800', icon: CheckCircle },
//             pending: { color: 'bg-yellow-100 text-yellow-800', icon: Clock },
//             rejected: { color: 'bg-red-100 text-red-800', icon: XCircle },
//             active: { color: 'bg-green-100 text-green-800', icon: CheckCircle }
//         };

//         const config = statusConfig[status];
//         const Icon = config.icon;

//         return (
//             <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.color}`}>
//                 <Icon className="w-3 h-3 mr-1" />
//                 {status.charAt(0).toUpperCase() + status.slice(1)}
//             </span>
//         );
//     };

//     const handleUserAction = (action, user) => {
//         setSelectedUser(user);
//         setModalType(action);
//         setShowModal(true);
//     };

//     // const handleDeleteOrganization = (orgId) => {
//     //     setOrganizations(prevOrgs => prevOrgs.filter(org => org.id !== orgId));
//     // };

//     const handleCreateOrganization = (newOrg) => {
//         setOrganizations(prevOrgs => [...prevOrgs, newOrg]);
//         setShowModal(false);
//     };

//     const generateInviteCode = () => {
//         return Math.random().toString(36).substring(2, 8).toUpperCase();
//     };

//     const Modal = () => {
//         if (!showModal) return null;

//         return (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//                 <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
//                     <div className="flex justify-between items-center mb-4">
//                         <h3 className="text-lg font-semibold">
//                             {modalType === 'approve' && 'Approve User'}
//                             {modalType === 'reject' && 'Reject User'}
//                             {modalType === 'generate-code' && 'Generate Invite Code'}
//                             {modalType === 'create-org' && 'Create Organization'}
//                         </h3>
//                         <button
//                             //   onClick={() => setShowModal(false)}
//                             onClick={() => handleCreateOrganization({
//                                 id: organizations.length + 1,
//                                 name: 'New Org',
//                                 type: 'Educational Institution',
//                                 adminEmail: 'admin@neworg.com',
//                                 members: 0,
//                                 status: 'active',
//                                 createdDate: new Date().toISOString().split('T')[0],
//                                 inviteCode: generateInviteCode()
//                             })}
//                             className="text-gray-400 hover:text-gray-600"
//                         >
//                             <XCircle className="w-5 h-5" />
//                         </button>
//                     </div>

//                     {modalType === 'approve' && (
//                         <div>
//                             <p className="text-gray-600 mb-4">
//                                 Are you sure you want to approve {selectedUser?.name}?
//                             </p>
//                             <div className="flex space-x-3">
//                                 <button
//                                     className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
//                                     onClick={() => {
//                                         setUsers(users.map(u => u.id === selectedUser.id ? { ...u, status: 'approved' } : u));
//                                         setShowModal(false);
//                                     }}
//                                 >
//                                     Approve
//                                 </button>
//                                 <button
//                                     className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
//                                     onClick={() => setShowModal(false)}
//                                 >
//                                     Cancel
//                                 </button>
//                             </div>
//                         </div>
//                     )}

//                     {modalType === 'generate-code' && (
//                         <div>
//                             <div className="mb-4">
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     Code Type
//                                 </label>
//                                 <select className="w-full p-2 border border-gray-300 rounded-md">
//                                     <option>Educational Institution</option>
//                                     <option>Individual Learner</option>
//                                     <option>Teacher</option>
//                                     <option>Student</option>
//                                     <option>Parent</option>
//                                 </select>
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     Generated Code
//                                 </label>
//                                 <div className="flex">
//                                     <input
//                                         type="text"
//                                         value={generateInviteCode()}
//                                         className="flex-1 p-2 border border-gray-300 rounded-l-md bg-gray-50"
//                                         readOnly
//                                     />
//                                     <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700">
//                                         Copy
//                                     </button>
//                                 </div>
//                             </div>
//                             <button
//                                 className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
//                                 onClick={() => setShowModal(false)}
//                             >
//                                 Generate New Code
//                             </button>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         );
//     };

//     const filteredUsers = users.filter(user => {
//         const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             user.email.toLowerCase().includes(searchTerm.toLowerCase());
//         const matchesFilter = filterStatus === 'all' || user.status === filterStatus;
//         return matchesSearch && matchesFilter;
//     });

//     return (
//         <div className="min-h-screen bg-gray-50">
//             {/* Header */}
          
          
//           {/* Stats Cards */}
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//                     <div className="bg-white p-6 rounded-lg shadow-sm">
//                         <div className="flex items-center">
//                             <Users className="w-8 h-8 text-blue-600" />
//                             <div className="ml-4">
//                                 <p className="text-sm font-medium text-gray-500">Total Users</p>
//                                 <p className="text-2xl font-semibold text-gray-900">{stats.totalUsers}</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="bg-white p-6 rounded-lg shadow-sm">
//                         <div className="flex items-center">
//                             <Clock className="w-8 h-8 text-yellow-600" />
//                             <div className="ml-4">
//                                 <p className="text-sm font-medium text-gray-500">Pending Approvals</p>
//                                 <p className="text-2xl font-semibold text-gray-900">{stats.pendingApprovals}</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="bg-white p-6 rounded-lg shadow-sm">
//                         <div className="flex items-center">
//                             <Building2 className="w-8 h-8 text-green-600" />
//                             <div className="ml-4">
//                                 <p className="text-sm font-medium text-gray-500">Active Organizations</p>
//                                 <p className="text-2xl font-semibold text-gray-900">{stats.activeOrganizations}</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="bg-white p-6 rounded-lg shadow-sm">
//                         <div className="flex items-center">
//                             <Settings className="w-8 h-8 text-purple-600" />
//                             <div className="ml-4">
//                                 <p className="text-sm font-medium text-gray-500">Invite Codes</p>
//                                 <p className="text-2xl font-semibold text-gray-900">{stats.totalInviteCodes}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Tabs */}
//                 <div className="border-b border-gray-200 mb-6">
//                     <nav className="-mb-px flex space-x-8">
//                         {[
//                             { id: 'users', name: 'User Management', icon: Users },
//                             { id: 'organizations', name: 'Organizations', icon: Building2 },
//                             { id: 'codes', name: 'Invite Codes', icon: Settings },
//                             { id: 'approvals', name: 'Pending Approvals', icon: UserCheck }
//                         ].map((tab) => (
//                             <button
//                                 key={tab.id}
//                                 onClick={() => setActiveTab(tab.id)}
//                                 className={`${activeTab === tab.id
//                                     ? 'border-blue-500 lg:cursor-pointer text-blue-600'
//                                     : 'border-transparent lg:cursor-pointer text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                                     } whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm flex items-center`}
//                             >
//                                 <tab.icon className="w-4 h-4 mr-2" />
//                                 {tab.name}
//                             </button>
//                         ))}
//                     </nav>
//                 </div>

//                 {/* Search and Filter */}
//                 <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
//                     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
//                         <div className="flex-1 max-w-lg">
//                             <div className="relative">
//                                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//                                 <input
//                                     type="text"
//                                     placeholder="Search users, organizations..."
//                                     className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                                     value={searchTerm}
//                                     onChange={(e) => setSearchTerm(e.target.value)}
//                                 />
//                             </div>
//                         </div>
//                         <div className="flex items-center space-x-3">
//                             <select
//                                 className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                                 value={filterStatus}
//                                 onChange={(e) => setFilterStatus(e.target.value)}
//                             >
//                                 <option value="all">All Status</option>
//                                 <option value="approved">Approved</option>
//                                 <option value="pending">Pending</option>
//                                 <option value="rejected">Rejected</option>
//                             </select>
//                             <button
//                                 className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center"
//                                 onClick={() => handleUserAction('generate-code', null)}
//                             >
//                                 <Plus className="w-4 h-4 mr-2" />
//                                 Generate Code
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Content */}
//                 {activeTab === 'users' && (
//                     <div className="bg-white rounded-lg shadow-sm overflow-hidden">
//                         <div className="overflow-x-auto">
//                             <table className="min-w-full divide-y divide-gray-200">
//                                 <thead className="bg-gray-50">
//                                     <tr>
//                                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                             User
//                                         </th>
//                                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                             Role
//                                         </th>
//                                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                             Organization
//                                         </th>
//                                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                             Status
//                                         </th>
//                                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                             Registration Date
//                                         </th>
//                                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                             Actions
//                                         </th>
//                                     </tr>
//                                 </thead>
//                                 <tbody className="bg-white divide-y divide-gray-200">
//                                     {filteredUsers.map((user) => (
//                                         <tr key={user.id} className="hover:bg-gray-50">
//                                             <td className="px-6 py-4 whitespace-nowrap">
//                                                 <div className="flex items-center">
//                                                     <div className="flex-shrink-0 h-10 w-10">
//                                                         <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
//                                                             <span className="text-sm font-medium text-gray-700">
//                                                                 {user.name.charAt(0)}
//                                                             </span>
//                                                         </div>
//                                                     </div>
//                                                     <div className="ml-4">
//                                                         <div className="text-sm font-medium text-gray-900">{user.name}</div>
//                                                         <div className="text-sm text-gray-500">{user.email}</div>
//                                                     </div>
//                                                 </div>
//                                             </td>
//                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                                                 {user.role}
//                                             </td>
//                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                                                 {user.organization}
//                                             </td>
//                                             <td className="px-6 py-4 whitespace-nowrap">
//                                                 <StatusBadge status={user.status} />
//                                             </td>
//                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                                 {user.registrationDate}
//                                             </td>
//                                             <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                                                 <div className="flex items-center space-x-2">
//                                                     {user.status === 'pending' && (
//                                                         <>
//                                                             <button
//                                                                 className="lg:cursor-pointer text-green-600 hover:text-green-900"
//                                                                 onClick={() => handleUserAction('approve', user)}
//                                                             >
//                                                                 <UserCheck className="w-4 h-4" />
//                                                             </button>
//                                                             <button
//                                                                 className="lg:cursor-pointer text-red-600 hover:text-red-900"
//                                                                 onClick={() => handleUserAction('reject', user)}
//                                                             >
//                                                                 <UserX className="w-4 h-4" />
//                                                             </button>
//                                                         </>
//                                                     )}
//                                                     <button className="lg:cursor-pointer text-blue-600 hover:text-blue-900">
//                                                         <Eye className="w-4 h-4" />
//                                                     </button>
//                                                     <button className="lg:cursor-pointer text-gray-600 hover:text-gray-900">
//                                                         <Edit className="w-4 h-4" />
//                                                     </button>
//                                                 </div>
//                                             </td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 )}

//                 {activeTab === 'organizations' && (
//                     <div className="bg-white rounded-lg shadow-sm overflow-hidden">
//                         <div className="overflow-x-auto">
//                             <table className="min-w-full divide-y divide-gray-200">
//                                 <thead className="bg-gray-50">
//                                     <tr>
//                                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                             Organization
//                                         </th>
//                                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                             Type
//                                         </th>
//                                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                             Admin
//                                         </th>
//                                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                             Members
//                                         </th>
//                                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                             Status
//                                         </th>
//                                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                             Actions
//                                         </th>
//                                     </tr>
//                                 </thead>
//                                 <tbody className="bg-white divide-y divide-gray-200">
//                                     {organizations.map((org) => (
//                                         <tr key={org.id} className="hover:bg-gray-50">
//                                             <td className="px-6 py-4 whitespace-nowrap">
//                                                 <div className="flex items-center">
//                                                     <Building2 className="w-8 h-8 text-gray-400 mr-3" />
//                                                     <div>
//                                                         <div className="text-sm font-medium text-gray-900">{org.name}</div>
//                                                         <div className="text-sm text-gray-500">Code: {org.inviteCode}</div>
//                                                     </div>
//                                                 </div>
//                                             </td>
//                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                                                 {org.type}
//                                             </td>
//                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                                                 {org.adminEmail}
//                                             </td>
//                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                                                 {org.members}
//                                             </td>
//                                             <td className="px-6 py-4 whitespace-nowrap">
//                                                 <StatusBadge status={org.status} />
//                                             </td>
//                                             <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                                                 <div className="flex items-center space-x-2">
//                                                     <button className="text-blue-600 hover:text-blue-900">
//                                                         <Eye className="w-4 h-4" />
//                                                     </button>
//                                                     <button className="text-gray-600 hover:text-gray-900">
//                                                         <Edit className="w-4 h-4" />
//                                                     </button>
//                                                     <button className="text-red-600 hover:text-red-900">
//                                                         <Trash2 className="w-4 h-4" />
//                                                     </button>
//                                                 </div>
//                                             </td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 )}
//             </div>

//             <Modal />
//         </div>
//     );
// };

// export default SuperAdminDashboard;