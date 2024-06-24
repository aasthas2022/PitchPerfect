export const generateCoverLetter = async (resume, jobDescription) => {
    const response = await fetch('https://pitchperfect-backend.netlify.app/.netlify/functions/server/generateCoverLetter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ resume, jobDescription }),
    });
    if (!response.ok) {
      throw new Error('Failed to generate cover letter');
    }
    return response.json();
  };
  