import React from "react";

export function Dialog({ open, onOpenChange, children }) {
  if (!open) return null;
  return (
    <>
      <div className="custom-modal-overlay" />
      <div className="custom-modal-viewport">
        <div className="modal-content">
          {children}
        </div>
      </div>
    </>
  );
}

export function DialogContent({ children, className }) {
  return <div className={className}>{children}</div>;
}

export function DialogHeader({ children }) {
  return <div className="modal-header">{children}</div>;
}

export function DialogTitle({ children, className }) {
  return <h5 className={className}>{children}</h5>;
}

export function DialogDescription({ children, className }) {
  return <div className={className}>{children}</div>;
}

export function DialogTrigger({ children }) {
  return <>{children}</>;
}