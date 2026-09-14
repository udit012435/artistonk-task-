import React from 'react';
import DashboardStats from './components/DashboardStats';
import TicketFilters from './components/TicketFilters';
import TicketList from './components/TicketList';
import TicketDetailsModal from './components/TicketDetailsModal';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Customer Support Dashboard</h1>
        
        <DashboardStats />
        <TicketFilters />
        <TicketList />
      </div>

      <TicketDetailsModal />
    </div>
  );
}
