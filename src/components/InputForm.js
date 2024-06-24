import React from 'react';
import './InputForm.css';

function InputForm({ resume, setResume, jobDescription, setJobDescription, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(resume, jobDescription);
  };

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <div className="form-column">
        <label>Resume:</label>
        <textarea value={resume} onChange={(e) => setResume(e.target.value)} />
      </div>
      <div className="form-column">
        <label>Job Description:</label>
        <textarea value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} />
      </div>
      <div className="form-column">
        <button type="submit">Generate Cover Letter</button>
      </div>
    </form>
  );
}

export default InputForm;
