import { useState } from "react";
import JobCard from "./JobCard";

export default function JobList({ jobs }) {
    const [search, setSearch] = useState("");

    const filtered = jobs.filter((job) =>
        job.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h2>Available Jobs</h2>

            <input
                placeholder="Search jobs..."
                onChange={(e) => setSearch(e.target.value)}
            />

            {filtered.map((job) => (
                <JobCard key={job.id} job={job} />
            ))}
        </div>
    );
}