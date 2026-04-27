import { useState } from "react";

export default function FeedbackForm() {
    const [text, setText] = useState("");

    const submit = (e) => {
        e.preventDefault();
        alert("Feedback: " + text);
        setText("");
    };

    return (
        <div className="center-card">
            <h2>💬 Feedback</h2>

            <form onSubmit={submit}>
                <textarea
                    placeholder="Write your feedback..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />

                <button>Send</button>
            </form>
        </div>
    );
}