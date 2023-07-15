import React from "react";

export function ExplorerWindow() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p>Exploder</p>
      </div>
      <div className="window_ok_button">
        <section className="field-row" style={{ justifyContent: 'flex-end' }}>
          <button aria-label="OK">OK</button>
        </section>
      </div>
    </>
  );
}