import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import JobList from "./JobList";
import JobForm from "./JobForm";
import FeedbackForm from "./FeedbackForm";
import { jobs } from "./data";
import Footer from "./Footer";

function Home() {
  return (
    <div className="center-card" style={{ marginBottom: "120px" }}>
      <h2>🎓 University Job Fair Portal</h2>
      <p>
        Welcome! Explore jobs, apply easily, and share your feedback.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<JobList jobs={jobs} />} />
          <Route path="/apply" element={<JobForm />} />
          <Route path="/feedback" element={<FeedbackForm />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}