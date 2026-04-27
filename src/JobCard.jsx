export default function JobCard({ job }) {
  return (
    <div className="card">
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <p>{job.location}</p>

      <button className="apply-btn" onClick={() => alert("Applied to " + job.title)}>
        Apply
      </button>
    </div>
  );
}