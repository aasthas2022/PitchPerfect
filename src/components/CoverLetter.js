import React from 'react';
import './CoverLetter.css';
import { FaClipboard } from 'react-icons/fa';

function CoverLetter({ content }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(content);
    alert('Cover letter copied to clipboard!');
  };

  const formatContent = (text) => {
    const boldPattern = /\*\*(.*?)\*\*/g;
    const italicPattern = /\*(.*?)\*/g;
    const underlinePattern = /__(.*?)__/g;
    const bulletPattern = /(^|\n)\*\s(.*?)(?=\n|$)/g;

    let formattedText = text;
    formattedText = formattedText.replace(boldPattern, '<b>$1</b>');
    formattedText = formattedText.replace(italicPattern, '<i>$1</i>');
    formattedText = formattedText.replace(underlinePattern, '<u>$1</u>');

    // Wrap bullet points in <ul> and <li> tags
    formattedText = formattedText.replace(bulletPattern, '$1<li>$2</li>');
    formattedText = formattedText.replace(/(<li>.*<\/li>)+/g, '<ul>$&</ul>');

    return { __html: formattedText };
  };

  return (
    <div className="cover-letter-column">
      <label>Generated Cover Letter:</label>
      <div className="textarea-container">
        <div id="CoverLetter" dangerouslySetInnerHTML={formatContent(content)} className="formatted-content" />
        <div className="footer-icon">
          <button onClick={copyToClipboard} className="copy-icon">
            <FaClipboard />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CoverLetter;
