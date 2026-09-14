import React from 'react';
import { useTicketStore } from '../store/UseTicketStore';
import TicketCard from './TicketCard';

export default function TicketList() {
  const { tickets, searchQuery, statusFilter, priorityFilter } = useTicketStore();

  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = ticket.customer.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          ticket.subject.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'All' || ticket.status === statusFilter;
    const matchesPriority = priorityFilter === 'All' || ticket.priority === priorityFilter;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  if (filteredTickets.length === 0) {
    return <div className="p-10 text-center bg-white rounded-lg border text-gray-500">No tickets found.</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden overflow-x-auto">
      <table className="w-full text-left border-collapse min-w-[600px]">
        <thead>
          <tr className="bg-gray-100 border-b border-gray-200 text-sm text-gray-600">
            <th className="p-4">Customer</th>
            <th className="p-4">Issue</th>
            <th className="p-4">Priority</th>
            <th className="p-4">Created Date</th>
            <th className="p-4">Status</th>
            <th className="p-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredTickets.map(ticket => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </tbody>
      </table>
    </div>
  );
}