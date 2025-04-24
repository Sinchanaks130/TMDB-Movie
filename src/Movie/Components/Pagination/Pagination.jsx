import React, { useState } from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, totalPages, handleNext, handlePrev, goToPage }) => {
  const [inputPage, setInputPage] = useState('');

  const handleInputChange = (e) => {
    setInputPage(e.target.value);
  };

  const handleJump = () => {
    const page = parseInt(inputPage);
    if (!isNaN(page) && page >= 1 && page <= totalPages) {
      goToPage(page);
      setInputPage('');
      window.scrollTo(0, 0); // Scroll to top after jump
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleJump();
  };

  const handleNextPage = () => {
    handleNext();
    window.scrollTo(0, 0); // Scroll to top when navigating to the next page
  };

  const handlePrevPage = () => {
    handlePrev();
    window.scrollTo(0, 0); // Scroll to top when navigating to the previous page
  };

  return (
    <div className="pagination">
      <button 
        onClick={handlePrevPage} 
        disabled={currentPage === 1} 
        className="pagination-button"
      >
        ⬅ Prev
      </button>

      <span className="pagination-info">
        Page {currentPage} / {500}
      </span>

      <button 
        onClick={handleNextPage} 
        disabled={currentPage === totalPages} 
        className="pagination-button"
      >
        Next ➡
      </button>

      <div className="pagination-jump">
        <input
          type="number"
          placeholder="Go to page..."
          value={inputPage}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          className="pagination-input"
          min="1"
          max={totalPages}
        />
        <button onClick={handleJump} className="pagination-go">
          Go
        </button>
      </div>
    </div>
  );
};

export default Pagination;
