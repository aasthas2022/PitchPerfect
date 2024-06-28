import React from 'react';
import './InputForm.css';

function InputForm({ resume, setResume, jobDescription, setJobDescription, companyMissionVisionCulture, setcompanyMissionVisionCulture, additionalInfo, setadditionalInfo, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(resume, jobDescription, companyMissionVisionCulture, additionalInfo);
  };

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <div className="form-row">
        <div className="form-column">
          <label>Resume (Required):</label>
          <textarea value={resume} onChange={(e) => setResume(e.target.value)} />
        </div>
        <div className="form-column">
          <label>Job Description (Required):</label>
          <textarea value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-column">
          <label>Company Mission, Vision or Culture (Optional):</label>
          <textarea value={companyMissionVisionCulture} onChange={(e) => setcompanyMissionVisionCulture(e.target.value)} />
        </div>
        <div className="form-column">
          <label>Additional details for your cover letter (Optional):</label>
          <textarea value={additionalInfo} onChange={(e) => setadditionalInfo(e.target.value)} />
        </div>
      </div>
      <div className="button-wrapper">
        <button type="submit">Generate Cover Letter</button>
      </div>
    </form>
  );
}

export default InputForm;
