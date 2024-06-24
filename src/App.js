import React, { useState } from 'react';
import InputForm from './components/InputForm';
import CoverLetter from './components/CoverLetter';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  const [resume, setResume] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [coverLetter, setCoverLetter] = useState('');

  const generateCoverLetter = async (resume, jobDescription) => {
    try {
      const response = await fetch('https://pitchperfect-backend.netlify.app/.netlify/functions/server/generateCoverLetter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ resume, jobDescription }),
      });
      const data = await response.json();
      setCoverLetter(data.coverLetter);
    } catch (error) {
      console.error('Error:', error);
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
          onSubmit={generateCoverLetter}
        />
        <CoverLetter content={coverLetter} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
