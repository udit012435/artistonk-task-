import React, { useMemo } from 'react';
import { useTicketStore } from '../store/UseTicketStore';

export default function DashboardStats() {
  const tickets = useTicketStore((state) => state.tickets);

  const stats = useMemo(() => ({
    total: tickets.length,
    open: tickets.filter(t => t.status === 'Open').length,
    inProgress: tickets.filter(t => t.status === 'In Progress').length,
    resolved: tickets.filter(t => t.status === 'Resolved').length,
  }), [tickets]);

  const statCards = [
    { label: 'Total Tickets', count: stats.total, color: 'bg-blue-100 text-blue-700' },
    { label: 'Open', count: stats.open, color: 'bg-red-100 text-red-700' },
    { label: 'In Progress', count: stats.inProgress, color: 'bg-yellow-100 text-yellow-700' },
    { label: 'Resolved', count: stats.resolved, color: 'bg-green-100 text-green-700' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {statCards.map(stat => (
        <div key={stat.label} className={`p-4 rounded-lg shadow-sm border ${stat.color}`}>
          <h3 className="text-sm font-semibold uppercase">{stat.label}</h3>
          <p className="text-3xl font-bold mt-2">{stat.count}</p>
        </div>
      ))}
    </div>
  );
}