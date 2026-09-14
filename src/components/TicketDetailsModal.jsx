import React from 'react';
import { useTicketStore } from '../store/UseTicketStore';
import Badge from './ui/Badge';

export default function TicketDetailsModal() {
  const { selectedTicket, setSelectedTicket, updateTicketStatus } = useTicketStore();

  if (!selectedTicket) return null;

  return (
    // <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div className="fixed inset-0 backdrop-blur-md bg-white/30 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg overflow-hidden">
        <div className="flex justify-between items-center bg-gray-100 p-4 border-b">
          <h2 className="text-lg font-bold text-gray-800">Ticket Details: {selectedTicket.id}</h2>
          <button onClick={() => setSelectedTicket(null)} className="text-gray-500 hover:text-gray-800 text-2xl leading-none">
            &times;
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <p className="text-sm text-gray-500">Customer Name</p>
            <p className="font-medium text-gray-800">{selectedTicket.customer}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Issue / Subject</p>
            <p className="font-medium text-gray-800">{selectedTicket.subject}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Priority</p>
              <Badge type="priority" value={selectedTicket.priority} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Created Date</p>
              <p className="font-medium text-sm">{new Date(selectedTicket.date).toLocaleString()}</p>
            </div>
          </div>
          <div className="pt-4 border-t mt-4">
            <label className="block text-sm text-gray-700 font-medium mb-2">Update Status</label>
            <select 
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-blue-500"
              value={selectedTicket.status}
              onChange={(e) => updateTicketStatus(selectedTicket.id, e.target.value)}
            >
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}