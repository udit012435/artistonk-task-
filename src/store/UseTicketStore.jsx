import { create } from 'zustand';
import { initialTickets } from '../utils/mockData';

export const useTicketStore = create((set) => ({
  tickets: initialTickets,
  searchQuery: '',
  statusFilter: 'All',
  priorityFilter: 'All',
  selectedTicket: null,

  setSearchQuery: (query) => set({ searchQuery: query }),
  setStatusFilter: (status) => set({ statusFilter: status }),
  setPriorityFilter: (priority) => set({ priorityFilter: priority }),
  setSelectedTicket: (ticket) => set({ selectedTicket: ticket }),
  
  updateTicketStatus: (id, newStatus) => set((state) => ({
    tickets: state.tickets.map(ticket => 
      ticket.id === id ? { ...ticket, status: newStatus } : ticket
    ),
    selectedTicket: state.selectedTicket?.id === id 
      ? { ...state.selectedTicket, status: newStatus } 
      : state.selectedTicket
  })),
}));