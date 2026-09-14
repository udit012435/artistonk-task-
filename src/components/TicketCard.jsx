import React from 'react';
import Badge from './ui/Badge';
import { useTicketStore } from '../store/UseTicketStore';

export default function TicketCard({ ticket }) {
  const setSelectedTicket = useTicketStore((state) => state.setSelectedTicket);

  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50 transition">
      <td className="p-4 font-medium text-gray-800">{ticket.customer}</td>
      <td className="p-4 text-gray-600">{ticket.subject}</td>
      <td className="p-4">
        <Badge type="priority" value={ticket.priority} />
      </td>
      <td className="p-4 text-sm text-gray-500">
        {new Date(ticket.date).toLocaleDateString()}
      </td>
      <td className="p-4">
        <Badge type="status" value={ticket.status} />
      </td>
      <td className="p-4">
        <button 
          onClick={() => setSelectedTicket(ticket)}
          className="text-blue-600 hover:underline text-sm font-medium"
        >
          View Details
        </button>
      </td>
    </tr>
  );
}