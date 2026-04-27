import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar">
            <h2>Job Fair Portal</h2>

            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/jobs">Jobs</Link>
                <Link to="/apply">Apply</Link>
                <Link to="/feedback">Feedback</Link>
            </div>
        </div>
    );
}