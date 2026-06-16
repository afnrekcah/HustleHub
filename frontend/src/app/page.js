"use client";
import { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@400;500&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: #0d0d0d;
    font-family: 'Syne', sans-serif;
    color: #f0ede6;
    min-height: 100vh;
  }

  .page {
    max-width: 860px;
    margin: 0 auto;
    padding: 60px 24px 100px;
  }

  /* ── Header ── */
  .header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    border-bottom: 1px solid #2a2a2a;
    padding-bottom: 32px;
    margin-bottom: 48px;
  }

  .header-left .eyebrow {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.18em;
    color: #c8f04a;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .header-left h1 {
    font-size: clamp(28px, 5vw, 42px);
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  .job-id-badge {
    font-family: 'DM Mono', monospace;
    font-size: 12px;
    background: #1a1a1a;
    border: 1px solid #2e2e2e;
    color: #888;
    padding: 6px 14px;
    border-radius: 4px;
    letter-spacing: 0.1em;
  }

  /* ── Detail Grid ── */
  .detail-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 48px;
  }

  @media (max-width: 560px) {
    .detail-grid { grid-template-columns: 1fr; }
  }

  .detail-card {
    background: #141414;
    border: 1px solid #222;
    border-radius: 10px;
    padding: 18px 22px;
    transition: border-color 0.2s;
  }

  .detail-card:hover { border-color: #c8f04a44; }

  .detail-card .label {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #555;
    margin-bottom: 6px;
  }

  .detail-card .value {
    font-size: 15px;
    font-weight: 600;
    color: #f0ede6;
  }

  .status-pill {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    background: #c8f04a18;
    border: 1px solid #c8f04a44;
    color: #c8f04a;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 600;
  }

  .status-pill::before {
    content: '';
    width: 7px; height: 7px;
    background: #c8f04a;
    border-radius: 50%;
    animation: pulse 1.8s infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }

  /* ── Section title ── */
  .section-title {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #444;
    margin-bottom: 20px;
  }

  /* ── Progress ── */
  .progress-wrap {
    margin-bottom: 48px;
  }

  .progress-steps {
    display: flex;
    align-items: center;
    gap: 0;
    overflow-x: auto;
    padding-bottom: 8px;
  }

  .step {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    min-width: 80px;
    position: relative;
  }

  .step:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 16px;
    left: 50%;
    width: 100%;
    height: 2px;
    background: #222;
    z-index: 0;
  }

  .step.done:not(:last-child)::after { background: #c8f04a; }

  .step-dot {
    width: 32px; height: 32px;
    border-radius: 50%;
    border: 2px solid #2a2a2a;
    background: #111;
    display: flex; align-items: center; justify-content: center;
    font-size: 13px;
    position: relative;
    z-index: 1;
    transition: all 0.25s;
  }

  .step.done .step-dot {
    background: #c8f04a;
    border-color: #c8f04a;
    color: #0d0d0d;
    font-size: 14px;
  }

  .step.active .step-dot {
    border-color: #c8f04a;
    box-shadow: 0 0 0 4px #c8f04a22;
  }

  .step-label {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    color: #444;
    margin-top: 8px;
    text-align: center;
    white-space: nowrap;
  }

  .step.done .step-label,
  .step.active .step-label { color: #c8f04a; }

  /* ── Update Status ── */
  .update-wrap {
    background: #141414;
    border: 1px solid #222;
    border-radius: 12px;
    padding: 28px;
    margin-bottom: 48px;
  }

  .update-wrap .section-title { margin-bottom: 16px; }

  .select-row {
    display: flex;
    gap: 12px;
    align-items: center;
    flex-wrap: wrap;
  }

  .styled-select {
    flex: 1;
    min-width: 180px;
    background: #0d0d0d;
    border: 1px solid #2e2e2e;
    color: #f0ede6;
    font-family: 'Syne', sans-serif;
    font-size: 14px;
    padding: 12px 16px;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    transition: border-color 0.2s;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23555' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 14px center;
    padding-right: 36px;
  }

  .styled-select:focus { border-color: #c8f04a; }

  .save-btn {
    background: #c8f04a;
    color: #0d0d0d;
    border: none;
    font-family: 'Syne', sans-serif;
    font-size: 14px;
    font-weight: 700;
    padding: 12px 28px;
    border-radius: 8px;
    cursor: pointer;
    letter-spacing: 0.02em;
    transition: background 0.2s, transform 0.1s;
    white-space: nowrap;
  }

  .save-btn:hover { background: #d9ff55; }
  .save-btn:active { transform: scale(0.97); }

  .saved-msg {
    font-family: 'DM Mono', monospace;
    font-size: 12px;
    color: #c8f04a;
    margin-top: 12px;
    opacity: 0;
    transition: opacity 0.3s;
  }
  .saved-msg.show { opacity: 1; }

  /* ── Timeline ── */
  .timeline { margin-bottom: 8px; }

  .tl-row {
    display: grid;
    grid-template-columns: 130px 1fr 1fr;
    gap: 0;
    border-bottom: 1px solid #1c1c1c;
    padding: 16px 0;
    align-items: center;
    transition: background 0.15s;
  }

  .tl-row:hover { background: #141414; }

  .tl-row.tl-head {
    border-bottom: 1px solid #2a2a2a;
    padding: 0 0 12px;
  }

  .tl-head span {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #444;
  }

  .tl-date {
    font-family: 'DM Mono', monospace;
    font-size: 12px;
    color: #555;
  }

  .tl-status {
    font-size: 13px;
    font-weight: 600;
    color: #c8f04a;
  }

  .tl-remark {
    font-size: 13px;
    color: #888;
  }
`;

const STEPS = ["Pending", "Accepted", "In Progress", "Submitted", "Completed"];

const TIMELINE = [
  { date: "01/08/2026", status: "Pending",     remark: "Job posted by client" },
  { date: "02/08/2026", status: "Accepted",    remark: "Freelancer accepted the job" },
  { date: "03/08/2026", status: "In Progress", remark: "Work has started" },
];

export default function JobTracking() {
  const [currentStatus, setCurrentStatus] = useState("In Progress");
  const [selectVal, setSelectVal]         = useState("In Progress");
  const [saved, setSaved]                 = useState(false);

  const currentIdx = STEPS.indexOf(currentStatus);

  function handleSave() {
    setCurrentStatus(selectVal);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <>
      <style>{styles}</style>
      <div className="page">

        {/* Header */}
        <header className="header">
          <div className="header-left">
            <p className="eyebrow">Freelance Platform</p>
            <h1>Job Tracking<br /></h1>
          </div>
          <span className="job-id-badge">#J001</span>
        </header>

        {/* Detail Grid */}
        <div className="detail-grid">
          {[
            { label: "Job Title",   value: "Website Development" },
            { label: "Client",      value: "John Doe" },
            { label: "Freelancer",  value: "Annabel" },
          ].map(({ label, value }) => (
            <div className="detail-card" key={label}>
              <p className="label">{label}</p>
              <p className="value">{value}</p>
            </div>
          ))}
          <div className="detail-card">
            <p className="label">Current Status</p>
            <span className="status-pill">{currentStatus}</span>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="progress-wrap">
          <p className="section-title">Job Progress</p>
          <div className="progress-steps">
            {STEPS.map((step, i) => {
              const cls = i < currentIdx ? "step done"
                        : i === currentIdx ? "step active"
                        : "step";
              return (
                <div className={cls} key={step}>
                  <div className="step-dot">
                    {i < currentIdx ? "✓" : i === currentIdx ? "●" : ""}
                  </div>
                  <span className="step-label">{step}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Update Status */}
        <div className="update-wrap">
          <p className="section-title">Update Job Status</p>
          <div className="select-row">
            <select
              className="styled-select"
              value={selectVal}
              onChange={e => setSelectVal(e.target.value)}
            >
              {[...STEPS, "Cancelled"].map(s => (
                <option key={s}>{s}</option>
              ))}
            </select>
            <button className="save-btn" onClick={handleSave}>
              Save Changes
            </button>
          </div>
          <p className={saved ? "saved-msg show" : "saved-msg"}>✓ Status updated successfully</p>
        </div>

        {/* Timeline */}
        <div className="timeline">
          <p className="section-title">Timeline</p>
          <div className="tl-row tl-head">
            <span>Date</span><span>Status</span><span>Remarks</span>
          </div>
          {TIMELINE.map((row, i) => (
            <div className="tl-row" key={i}>
              <span className="tl-date">{row.date}</span>
              <span className="tl-status">{row.status}</span>
              <span className="tl-remark">{row.remark}</span>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}
