import { useState } from "react";

export default function JobForm() {
    const [form, setForm] = useState({ name: "", email: "" });

    const submit = (e) => {
        e.preventDefault();

        if (!form.email.includes("@")) {
            alert("Invalid Email");
            return;
        }

        alert("Application Submitted!");
    };

    return (
        <div className="center-card">
            <h2>📝 Apply for Job</h2>

            <form onSubmit={submit}>
                <input
                    placeholder="Your Name"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />

                <input
                    placeholder="Your Email"
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}