import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    isOpen && (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <button className="close-button" onClick={onClose}>Close</button>
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
