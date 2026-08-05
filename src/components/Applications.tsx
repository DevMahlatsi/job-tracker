import { supabase } from "../supabase-client.ts";
import { useEffect, useState } from "react";

// Define your type
type JobApplication = {
  id: number
  company: string
  role: string
  status: string
  date: string
  notes: string
  user_id: string
  created_at: string
}

export default function Applications() {

  const [applications, setApplications] = useState<JobApplication[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)


  useEffect(() => {
    async function fetchApplications() {
      try {
        // 1. Get current user
        const { data: { user } } = await supabase.auth.getUser()

        if (!user) {
          setError('Please log in')
          setLoading(false)
          return
        }

        const { data, error } = await supabase
            .from('job_application')
            .select('*')
            .eq('user_id', user.id)

        if (error) {
          setError(error.message)
        } else {
          setApplications(data || [])
        }
      } catch (err) {
        setError('Something went wrong')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchApplications()
  }, [])


  if (loading) {
    return <p>Loading applications...</p>
  }


  if (error) {
    return <p>Error: {error}</p>
  }

  return (
      <>
        <p>
          <table className="my-table">
            <thead className="my-thead">
            <tr className="my-tr">
              <th>Company</th>
              <th>Role</th>
              <th>Status</th>
              <th>Date</th>
              <th>Notes</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody className="my-tbody">
            {applications.map((app) => (
                <tr className="my-tr" key={app.id}>
                  <td>{app.company_name}</td>
                  <td>{app.role}</td>
                  <td>{app.status}</td>
                  <td>{app.date_applied}</td>
                  <td>{app.notes}</td>
                  <td>🗑️|🖊️</td>
                </tr>
            ))}
            {applications.length === 0 && (
                <tr>
                  <td colSpan={6} style={{ textAlign: 'center' }}>
                    No applications found
                  </td>
                </tr>
            )}
            </tbody>
            <tfoot>
            <tr>
              <td colSpan={6}>
                <h6>Total: {applications.length} applications</h6>

              </td>
            </tr>
            </tfoot>
          </table>
        </p>
      </>
  );
}