import React, { useState, useEffect } from 'react';
import { Hash } from 'lucide-react';
import './TableModal.css';

interface TableModalProps {
  onConfirm: (tableNumber: string) => void;
}

export function TableModal({ onConfirm }: TableModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [tableValue, setTableValue] = useState('');

  useEffect(() => {
    const existingTable = localStorage.getItem('tableNumber');
    if (!existingTable) {
      setIsOpen(true);
    } else {
      onConfirm(existingTable);
    }
  }, [onConfirm]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tableValue.trim()) {
      localStorage.setItem('tableNumber', tableValue.trim());
      setIsOpen(false);
      onConfirm(tableValue.trim());
    }
  };

  if (!isOpen) return null;

  return (
    <div className="table-modal-overlay">
      <div className="table-modal">
        <div className="table-modal-icon">
          <Hash size={40} />
        </div>
        <h2 className="font-cormorant table-modal-title">Votre numéro de table ?</h2>
        <p className="font-inter table-modal-subtitle">Entrez le numéro inscrit sur votre table</p>
        
        <form onSubmit={handleSubmit} className="table-modal-form">
          <input
            type="text"
            className="table-modal-input font-inter"
            placeholder="ex : 5"
            value={tableValue}
            onChange={(e) => setTableValue(e.target.value)}
            autoFocus
          />
          <button type="submit" className="table-modal-submit font-inter">
            Confirmer la table
          </button>
        </form>
      </div>
    </div>
  );
}
