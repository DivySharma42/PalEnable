import { useEffect, useState } from 'react';

export default function ContactSubmissions() {
  const [rows] = useState([]);
  // const [status, setStatus] = useState('Loading submissions...');

  useEffect(() => {
    // const loadSubmissions = async () => {
    //   try {
    //     const response = await fetch('http://localhost:3001/api/contact/submissions');
    //     const data = await response.json();
    //     if (!response.ok) {
    //       throw new Error(data.message || 'Failed to fetch data');
    //     }
    //     setRows(data.data || []);
    //     setStatus(null); 
    //   } catch (error) {
    //     setStatus(`Error: ${error.message}`);
    //   }
    // };

    // loadSubmissions();
  }, []); 

  // if (status) {
  //   return <p>{status}</p>;
  // }

  // if (rows.length === 0) {
  //   return <p>No submissions yet.</p>;
  // }

  return (
    <div className="submissions-table-container" style={{ marginTop: '40px',visibility:'collapse' }}>
      <h3>Contact Form Submissions</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.id}>
              <td>{new Date(row.timestamp).toLocaleString()}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.subject}</td>
              <td>{row.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
