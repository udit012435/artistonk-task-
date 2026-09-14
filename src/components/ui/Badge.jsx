import React from 'react';

export default function Badge({ type, value }) {
  let styles = "px-2 py-1 text-xs font-semibold rounded-full ";
  
  if (type === 'priority') {
    if (value === 'High') styles += 'bg-red-100 text-red-700';
    else if (value === 'Medium') styles += 'bg-orange-100 text-orange-700';
    else styles += 'bg-green-100 text-green-700';
  } else if (type === 'status') {
    if (value === 'Open') styles += 'bg-red-50 text-red-600 border border-red-200';
    else if (value === 'In Progress') styles += 'bg-yellow-50 text-yellow-600 border border-yellow-200';
    else styles += 'bg-green-50 text-green-600 border border-green-200';
  }

  return <span className={styles}>{value}</span>;
}