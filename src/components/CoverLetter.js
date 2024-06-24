import React from 'react';

function CoverLetter({ content }) {
  return (
    <div className="cover-letter-column">
      <label>Generated Cover Letter:</label>
      <textarea id= "CoverLetter" readOnly value={content} />
    </div>
  );
}

export default CoverLetter;
