import React from 'react';
import { useTicketStore } from '../store/UseTicketStore';

export default function TicketFilters() {
  const { searchQuery, statusFilter, priorityFilter, setSearchQuery, setStatusFilter, setPriorityFilter } = useTicketStore();

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <input 
        type="text" 
        placeholder="Search customer or issue..." 
        className="flex-1 border border-gray-300 p-2 rounded-md focus:outline-blue-500"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <select 
        className="border border-gray-300 p-2 rounded-md bg-white"
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="All">All Statuses</option>
        <option value="Open">Open</option>
        <option value="In Progress">In Progress</option>
        <option value="Resolved">Resolved</option>
      </select>
      <select 
        className="border border-gray-300 p-2 rounded-md bg-white"
        value={priorityFilter}
        onChange={(e) => setPriorityFilter(e.target.value)}
      >
        <option value="All">All Priorities</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
    </div>
  );
}