import React from 'react';
import './CoverLetter.css';
import { FaClipboard } from 'react-icons/fa';

function CoverLetter({ content }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(content);
    alert('Cover letter copied to clipboard!');
  };

  return (
    <div className="cover-letter-column">
      <label>Generated Cover Letter:</label>
      <div className="textarea-container">
        <textarea id="CoverLetter" readOnly value={content} />
        <button onClick={copyToClipboard} className="copy-icon">
          <FaClipboard />
        </button>
      </div>
    </div>
  );
}

export default CoverLetter;
