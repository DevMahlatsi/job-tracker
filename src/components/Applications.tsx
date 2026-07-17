export default function Applications() {
  return(
    <>
      <p>
        <table border={1}>
          <thead>
            <tr>
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
          <tbody>
            <tr>
              <td>BBD</td>
              <td>Graduate Programme</td>
              <td>Rejected</td>
              <td>17-07-2026</td>
              <td>Atleast they don't take long to respond</td>
              <td>Applied | Interview | Offer | Rejected | Trash</td>
            </tr>
          </tbody>
          <tfoot>
            
          </tfoot>
        </table>
      </p>
    </>
  );
}