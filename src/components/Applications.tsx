export default function Applications() {
    const applicationList = [
  {
    company: "BBD",
    role: "Software Graduate Programme",
    status: "rejected",
    date: "14-07-2026",
    notes: "At least they don't take long to respond."
  },
  {
    company: "Standard Bank",
    role: "Graduate Software Engineer",
    status: "interview",
    date: "16-07-2026",
    notes: "Technical interview scheduled for next week."
  },
  {
    company: "Capitec",
    role: "Software Developer Graduate",
    status: "pending",
    date: "17-07-2026",
    notes: "Application submitted successfully."
  },
  {
    company: "FNB",
    role: "Graduate Programme",
    status: "assessment",
    date: "18-07-2026",
    notes: "Completed online coding assessment."
  },
  {
    company: "Nedbank",
    role: "Junior Java Developer",
    status: "offer",
    date: "19-07-2026",
    notes: "Offer received. Reviewing contract."
  },
  {
    company: "Discovery",
    role: "Graduate Developer",
    status: "rejected",
    date: "20-07-2026",
    notes: "Application unsuccessful after assessment."
  },
  {
    company: "Vodacom",
    role: "Technology Graduate Programme",
    status: "review",
    date: "21-07-2026",
    notes: "Recruiter viewed application."
  },
  {
    company: "MTN",
    role: "Software Engineer Intern",
    status: "pending",
    date: "22-07-2026",
    notes: "Waiting for recruiter feedback."
  },
  {
    company: "Amazon",
    role: "Software Development Engineer Graduate",
    status: "assessment",
    date: "23-07-2026",
    notes: "OA invitation received."
  },
  {
    company: "DVT",
    role: "Graduate Developer",
    status: "interview",
    date: "24-07-2026",
    notes: "HR interview completed."
  },
  {
    company: "Derivco",
    role: "Graduate Software Engineer",
    status: "review",
    date: "25-07-2026",
    notes: "Application under review."
  },
  {
    company: "Microsoft",
    role: "Software Engineer Intern",
    status: "accepted",
    date: "26-07-2026",
    notes: "Accepted the internship offer."
  }
] as const;

    
  return(
    <>
      <p>
        <table className="my-table">
          <thead className="my-thead">
            <tr className="my-tr">
              <th>
                Company
              </th>
              <th>
                Role
              </th>
              <th>
                Status
              </th>
              <th>
                Date
              </th>
              <th>
                Notes
              </th>
              <th>
                Actions
              </th>
              
            </tr>
          </thead>
          <tbody className="my-tbody">
            {applicationList.map( item => (
                <tr className="my-tr" key={item.company}>
                  <td>{item.company}</td>
                  <td>{item.role}</td>
                  <td>{item.status}</td>
                  <td>{item.date}</td>
                  <td>{item.notes}</td>
                  <td>🗑️|🖊️</td>
                  
                </tr>
            ))}
          </tbody>
          <tfoot>
            <h6>Then here we supposed to add pagination stats and stuff and then maybe a button on the right side to go to the next page.</h6>
          </tfoot>
        </table>
      </p>
    </>
  );
}