import React, { useState } from 'react';
import InputForm from './components/InputForm';
import CoverLetter from './components/CoverLetter';
import Loader from './components/Loader';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  const [resume, setResume] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [companyMissionVisionCulture, setcompanyMissionVisionCulture] = useState('');
  const [additionalInfo, setadditionalInfo] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (resume, jobDescription, companyMissionVisionCulture, additionalInfo) => {
    setLoading(true);
    try {
      const response = await fetch('https://pitchperfect-backend.netlify.app/.netlify/functions/server/generateCoverLetter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ resume, jobDescription, companyMissionVisionCulture, additionalInfo }),
      });
      const data = await response.json();
      setCoverLetter(data.coverLetter);
    } catch (error) {
      console.error('Error fetching cover letter:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>PitchPerfect - Cover Letter Generator</h1>
      <div className="container">
        <InputForm
          resume={resume}
          setResume={setResume}
          jobDescription={jobDescription}
          setJobDescription={setJobDescription}
          companyMissionVisionCulture={companyMissionVisionCulture}
          setcompanyMissionVisionCulture={setcompanyMissionVisionCulture}
          additionalInfo={additionalInfo}
          setadditionalInfo={setadditionalInfo}
          onSubmit={handleSubmit}
        />
        <CoverLetter content={coverLetter} />
      </div>
      {loading && <Loader />}
      <Footer />
    </div>
  );
}

export default App;
