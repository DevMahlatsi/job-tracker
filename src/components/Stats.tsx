import { useState } from "react";

export default function Stats() {

      const [stats, setStats] = useState({
        total: 0,
        applied: 0,
        interview: 0,
        offer: 0,
        rejected: 0
      });
      const statuses = [
        { key: "total", label: "Total" },
        { key: "applied", label: "Applied" },
        { key: "interview", label: "Interview" },
        { key: "offer", label: "Offer" },
        { key: "rejected", label: "Rejected" }
      ] as const;
  return (
    <>
      <ul className="stats-bar"> 
        {statuses.map(item => (
          <li key={item.key}><span>{item.label}: </span><span>{stats[item.key]}</span></li>
        ))}
        
        
      </ul>
    </>
  )
};
