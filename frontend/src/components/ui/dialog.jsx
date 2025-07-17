import React from "react";

export function Dialog({ open, onOpenChange, children }) {
  if (!open) return null;
  return (
    <div className="modal show d-block" tabIndex="-1" style={{ background: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <button
            type="button"
            className="btn-close m-2 ms-auto"
            aria-label="Close"
            onClick={() => onOpenChange(false)}
          ></button>
          {children}
        </div>
      </div>
    </div>
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