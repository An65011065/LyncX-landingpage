import React from "react";

// Demo Components for Modular Section
const DemoFlowModal: React.FC = () => {
    const todayEvents = [
        { id: "1", time: "9:00 AM", title: "Team standup meeting" },
        { id: "2", time: "10:30 AM", title: "Call with Joseph" },
        { id: "3", time: "4:00 PM", title: "Finish reviewing John's PR" },
        { id: "4", time: "7:00 PM", title: "Dinner @tindia" },
    ];

    return (
        <div className="flow-demo-container">
            <div className="flow-demo-header">
                <div className="flow-demo-header-left">
                    <h1 className="flow-demo-title">What's next?</h1>
                </div>
                <div className="flow-demo-header-right">
                    <button className="flow-demo-minimize-btn">−</button>
                    <button className="flow-demo-close-btn">×</button>
                </div>
            </div>

            <div className="flow-demo-main-container">
                <div className="flow-demo-view-selector">
                    <button className="demo-view-btn">Yesterday</button>
                    <button className="demo-view-btn active">Today</button>
                    <button className="demo-view-btn">Tomorrow</button>
                </div>

                {todayEvents.map((event) => (
                    <div key={event.id} className="flow-demo-item">
                        <div className="demo-event-time">{event.time}</div>
                        <span className="demo-task-title">{event.title}</span>
                        <button className="demo-task-delete-btn">×</button>
                    </div>
                ))}

                <div className="flow-demo-add">
                    <span className="demo-add-icon">+</span>
                    <input
                        type="text"
                        placeholder="Add event for today..."
                        className="flow-demo-add-input"
                        readOnly
                    />
                    <input
                        type="text"
                        placeholder="9:00 AM"
                        className="flow-demo-time-input"
                        readOnly
                    />
                </div>
            </div>

            <style>{`
                .flow-demo-container {
                    width: 100%;
                    max-width: 320px;
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
                }
                
                @media (max-width: 640px) {
                    .flow-demo-container {
                        max-width: 280px;
                        margin: 0 auto;
                        transform: scale(0.95);
                    }
                }
                
                .flow-demo-header {
                    background: rgba(255, 251, 235, 0.98);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(205, 133, 63, 0.35);
                    border-radius: 12px;
                    padding: 12px 16px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    box-shadow: 0 8px 24px rgba(160, 82, 45, 0.15);
                    margin-bottom: 2px;
                }
                
                .flow-demo-title {
                    margin: 0;
                    font-size: 14px;
                    font-weight: 600;
                    color: rgba(101, 67, 33, 0.95);
                }
                
                .flow-demo-header-right {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                }
                
                .flow-demo-minimize-btn,
                .flow-demo-close-btn {
                    width: 24px;
                    height: 24px;
                    background: rgba(218, 165, 32, 0.12);
                    border: none;
                    border-radius: 6px;
                    color: rgba(160, 82, 45, 0.75);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 12px;
                    font-weight: bold;
                }
                
                .flow-demo-main-container {
                    background: rgba(255, 251, 235, 0.98);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(205, 133, 63, 0.35);
                    border-radius: 12px;
                    box-shadow: 0 8px 24px rgba(160, 82, 45, 0.15);
                }
                
                .flow-demo-view-selector {
                    display: flex;
                    background: rgba(218, 165, 32, 0.08);
                    border-bottom: 1px solid rgba(205, 133, 63, 0.1);
                    padding: 8px;
                    gap: 4px;
                }
                
                .demo-view-btn {
                    flex: 1;
                    padding: 6px 12px;
                    border: none;
                    border-radius: 6px;
                    background: transparent;
                    color: rgba(160, 82, 45, 0.7);
                    font-size: 12px;
                    font-weight: 600;
                    cursor: pointer;
                }
                
                .demo-view-btn.active {
                    background: rgba(218, 165, 32, 0.25);
                    color: rgba(101, 67, 33, 0.95);
                    box-shadow: 0 2px 4px rgba(160, 82, 45, 0.1);
                }
                
                .flow-demo-item {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 10px 16px;
                    border-bottom: 1px solid rgba(205, 133, 63, 0.1);
                }
                
                .demo-event-time {
                    font-size: 11px;
                    color: rgba(160, 82, 45, 0.8);
                    font-weight: 600;
                    min-width: 60px;
                    flex-shrink: 0;
                }
                
                .demo-task-title {
                    flex: 1;
                    font-size: 13px;
                    color: rgba(101, 67, 33, 0.95);
                    font-weight: 500;
                    line-height: 1.4;
                }
                
                .demo-task-delete-btn {
                    width: 20px;
                    height: 20px;
                    background: rgba(239, 68, 68, 0.1);
                    border: none;
                    border-radius: 6px;
                    color: rgba(239, 68, 68, 0.7);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 12px;
                    opacity: 0.7;
                }
                
                .flow-demo-add {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 12px 16px;
                    background: rgba(255, 248, 220, 0.6);
                    border-top: 1px solid rgba(205, 133, 63, 0.1);
                }
                
                .demo-add-icon {
                    color: rgba(160, 82, 45, 0.6);
                    font-size: 12px;
                    font-weight: bold;
                }
                
                .flow-demo-add-input {
                    flex: 1;
                    border: none;
                    outline: none;
                    background: none;
                    font-size: 13px;
                    color: rgba(101, 67, 33, 1);
                    font-weight: 500;
                }
                
                .flow-demo-time-input {
                    border: none;
                    outline: none;
                    background: rgba(218, 165, 32, 0.15);
                    color: rgba(101, 67, 33, 0.9);
                    font-size: 10px;
                    font-weight: 600;
                    padding: 4px 6px;
                    border-radius: 6px;
                    width: 60px;
                    text-align: center;
                }
            `}</style>
        </div>
    );
};

const DemoNotepadModal: React.FC = () => {
    const sampleNote =
        "Thoughts on this climate tech article:\n\n- Really interesting take on carbon capture being overhyped\n- The 2030 timeline feels way too optimistic given current progress\n- Author is clearly pro-nuclear but makes solid points about baseload power\n- Need to fact-check that Sweden renewable energy stat (claimed 90%?)\n\nKey insight: \"technological solutions alone won't solve behavioral problems\"\n\nThis reminds me of that paper I bookmarked about consumer behavior vs policy changes...\n\nQuestions to explore:\n- What's the actual cost per ton for direct air capture?\n- How does this compare to the Nature study from last month?\n\nFollow up: look into that MIT research they cited";

    return (
        <div className="notepad-demo-modal">
            <div className="notepad-demo-header">
                <div className="notepad-demo-header-left">
                    <div className="demo-drag-handle">≡</div>
                    <div className="notepad-demo-icon">📝</div>
                    <h1 className="notepad-demo-title">Notes</h1>
                </div>
                <div className="notepad-demo-header-right">
                    <button className="notepad-demo-minimize-btn">−</button>
                    <button className="notepad-demo-close-btn">×</button>
                </div>
            </div>

            <div className="notepad-demo-domain-header">
                <div className="demo-domain-selector">
                    <h2 className="demo-domain-title">The Atlantic</h2>
                    <div className="demo-domain-count">7 notes</div>
                </div>
                <div className="demo-status-indicator">
                    <div className="demo-saved-icon">✓</div>
                </div>
            </div>

            <div className="notepad-demo-search-section">
                <div className="notepad-demo-search-wrapper">
                    <span className="demo-search-icon">🔍</span>
                    <input
                        type="text"
                        placeholder="Search notes..."
                        className="notepad-demo-search-input"
                        readOnly
                    />
                </div>
            </div>

            <div className="notepad-demo-tabs-section">
                <div className="demo-domain-tabs">
                    <button className="demo-domain-tab active">
                        theatlantic
                    </button>
                    <button className="demo-domain-tab">instagram</button>
                    <button className="demo-domain-tab">canva</button>
                </div>
            </div>

            <div className="notepad-demo-editor">
                <textarea
                    value={sampleNote}
                    className="notepad-demo-textarea"
                    readOnly
                />
            </div>

            <div className="notepad-demo-footer">
                <div className="demo-footer-stats">
                    <span className="demo-word-count">125 words</span>
                    <span className="demo-char-count">678 characters</span>
                </div>
                <div className="demo-footer-status">Saved</div>
            </div>

            <style>{`
                .notepad-demo-modal {
                    width: 100%;
                    max-width: 380px;
                    height: 500px;
                    background: rgba(255, 251, 235, 0.98);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(205, 133, 63, 0.35);
                    border-radius: 14px;
                    overflow: hidden;
                    box-shadow: 0 8px 24px rgba(160, 82, 45, 0.15);
                    display: flex;
                    flex-direction: column;
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
                }
                
                .notepad-demo-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 10px 16px;
                    border-bottom: 1px solid rgba(205, 133, 63, 0.35);
                }
                
                .notepad-demo-header-left {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                
                .demo-drag-handle {
                    color: rgba(160, 82, 45, 0.6);
                    font-size: 12px;
                }
                
                .notepad-demo-icon {
                    width: 22px;
                    height: 22px;
                    background: rgba(218, 165, 32, 0.15);
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 12px;
                }
                
                .notepad-demo-title {
                    margin: 0;
                    font-size: 14px;
                    font-weight: 600;
                    color: rgba(101, 67, 33, 0.9);
                }
                
                .notepad-demo-header-right {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                }
                
                .notepad-demo-minimize-btn,
                .notepad-demo-close-btn {
                    width: 26px;
                    height: 26px;
                    background: rgba(218, 165, 32, 0.12);
                    border: none;
                    border-radius: 6px;
                    color: rgba(160, 82, 45, 0.75);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 12px;
                }
                
                .notepad-demo-domain-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 12px 16px 8px;
                    background: rgba(218, 165, 32, 0.08);
                }
                
                .demo-domain-title {
                    margin: 0;
                    font-size: 16px;
                    font-weight: 700;
                    color: rgba(101, 67, 33, 0.9);
                }
                
                .demo-domain-count {
                    background: rgba(218, 165, 32, 0.15);
                    color: rgba(160, 82, 45, 0.8);
                    font-size: 10px;
                    font-weight: 600;
                    padding: 2px 6px;
                    border-radius: 6px;
                    margin-left: 8px;
                }
                
                .demo-saved-icon {
                    color: rgba(34, 197, 94, 0.8);
                    font-size: 14px;
                }
                
                .notepad-demo-search-section {
                    padding: 10px 16px;
                    background: rgba(218, 165, 32, 0.05);
                    border-bottom: 1px solid rgba(205, 133, 63, 0.1);
                }
                
                .notepad-demo-search-wrapper {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(255, 248, 220, 0.8);
                    border: 1px solid rgba(205, 133, 63, 0.2);
                    border-radius: 8px;
                    padding: 8px 10px;
                }
                
                .demo-search-icon {
                    font-size: 12px;
                }
                
                .notepad-demo-search-input {
                    flex: 1;
                    border: none;
                    outline: none;
                    background: none;
                    font-size: 13px;
                    color: rgba(101, 67, 33, 0.9);
                }
                
                .notepad-demo-tabs-section {
                    padding: 8px 16px;
                    background: rgba(218, 165, 32, 0.05);
                    border-bottom: 1px solid rgba(205, 133, 63, 0.1);
                }
                
                .demo-domain-tabs {
                    display: flex;
                    gap: 4px;
                }
                
                .demo-domain-tab {
                    padding: 6px 10px;
                    border: none;
                    background: rgba(255, 248, 220, 0.6);
                    border-radius: 6px;
                    font-size: 11px;
                    font-weight: 500;
                    color: rgba(160, 82, 45, 0.7);
                    cursor: pointer;
                }
                
                .demo-domain-tab.active {
                    background: rgba(218, 165, 32, 0.25);
                    color: rgba(101, 67, 33, 0.95);
                    font-weight: 600;
                    box-shadow: 0 2px 4px rgba(160, 82, 45, 0.1);
                }
                
                .notepad-demo-editor {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }
                
                .notepad-demo-textarea {
                    flex: 1;
                    background: rgba(255, 251, 235, 0.98);
                    border: none;
                    outline: none;
                    padding: 20px;
                    font-size: 14px;
                    line-height: 1.6;
                    color: rgba(101, 67, 33, 0.9);
                    resize: none;
                    font-family: "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace;
                }
                
                .notepad-demo-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 8px 16px;
                    background: rgba(218, 165, 32, 0.08);
                    border-top: 1px solid rgba(205, 133, 63, 0.1);
                }
                
                .demo-footer-stats {
                    display: flex;
                    gap: 12px;
                    font-size: 10px;
                    color: rgba(160, 82, 45, 0.6);
                    font-weight: 500;
                }
                
                .demo-footer-status {
                    font-size: 10px;
                    color: rgba(160, 82, 45, 0.7);
                    font-weight: 600;
                }
            `}</style>
        </div>
    );
};

const DemoTimebar: React.FC = () => {
    return (
        <div className="timebar-demo-container">
            <div className="timebar-demo stage-warning">
                <div className="timebar-demo-content">
                    <span className="timebar-demo-icon">⏱</span>
                    <span className="timebar-demo-domain">canva.com</span>
                    <span className="timebar-demo-time">15:23</span>
                    <button className="timebar-demo-close-btn">×</button>
                </div>
            </div>

            <style>{`
                .timebar-demo-container {
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
                }
                
                .timebar-demo {
                    backdrop-filter: blur(20px);
                    border-radius: 12px;
                    overflow: visible;
                    min-width: 180px;
                    height: 36px;
                }
                
                .timebar-demo.stage-warning {
                    background: rgba(225, 227, 184, 0.95);
                    border: 1px solid rgba(225, 227, 184, 0.4);
                    box-shadow: 0 8px 16px rgba(225, 227, 184, 0.15);
                }
                
                .timebar-demo-content {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 0 12px;
                    height: 100%;
                }
                
                .timebar-demo-icon {
                    flex-shrink: 0;
                    font-size: 12px;
                }
                
                .timebar-demo-domain {
                    flex: 1;
                    font-size: 11px;
                    font-weight: 600;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    color: rgba(101, 67, 33, 0.85);
                }
                
                .timebar-demo-time {
                    font-size: 12px;
                    font-weight: 700;
                    flex-shrink: 0;
                    color: rgba(101, 67, 33, 0.95);
                }
                
                .timebar-demo-close-btn {
                    width: 18px;
                    height: 18px;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    background: rgba(101, 67, 33, 0.1);
                    color: rgba(101, 67, 33, 0.7);
                    font-size: 10px;
                }
            `}</style>
        </div>
    );
};

const DemoAnalyticsModal: React.FC = () => {
    return (
        <div className="analytics-demo-container">
            <div className="analytics-demo-header">
                <div className="analytics-demo-icon">👁</div>
                <div className="analytics-demo-content">
                    <div className="analytics-demo-reading">5min read</div>
                    <div className="analytics-demo-progress">75% read</div>
                </div>
                <div className="analytics-demo-time">
                    <div className="analytics-demo-clock">🕒</div>
                    <div className="analytics-demo-spent">3:45</div>
                </div>
            </div>

            <style>{`
                .analytics-demo-container {
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
                }
                
                .analytics-demo-header {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    background: rgba(255, 251, 235, 0.98);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(205, 133, 63, 0.35);
                    border-radius: 12px;
                    padding: 10px 14px;
                    box-shadow: 0 4px 12px rgba(160, 82, 45, 0.15);
                    min-width: 200px;
                    max-width: 100%;
                }
                
                .analytics-demo-icon {
                    font-size: 16px;
                    flex-shrink: 0;
                }
                
                .analytics-demo-content {
                    flex: 1;
                    min-width: 0;
                }
                
                .analytics-demo-reading {
                    font-size: 11px;
                    font-weight: 600;
                    color: rgba(101, 67, 33, 0.9);
                    line-height: 1.2;
                }
                
                .analytics-demo-progress {
                    font-size: 10px;
                    color: rgba(160, 82, 45, 0.7);
                    font-weight: 500;
                    margin-top: 1px;
                }
                
                .analytics-demo-time {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    flex-shrink: 0;
                }
                
                .analytics-demo-clock {
                    font-size: 12px;
                }
                
                .analytics-demo-spent {
                    font-size: 11px;
                    font-weight: 600;
                    color: rgba(101, 67, 33, 0.85);
                    font-variant-numeric: tabular-nums;
                }
            `}</style>
        </div>
    );
};

const DemoLimitModal: React.FC = () => {
    return (
        <div className="limit-demo-modal">
            <button className="limit-demo-close-btn">×</button>

            <div className="limit-demo-header">
                <div className="limit-demo-header-icon">⏰</div>
                <h1 className="limit-demo-modal-title">Daily Focus Time</h1>
                <p className="limit-demo-modal-subtitle">
                    Set a limit for youtube.com
                </p>
            </div>

            <div className="limit-demo-value-section">
                <div className="limit-demo-value-display">
                    <span className="limit-demo-value-number">2h</span>
                </div>
                <div className="limit-demo-value-description">
                    You'll get a reminder when you reach this limit
                </div>
            </div>

            <div className="limit-demo-slider-section">
                <div className="limit-demo-slider-container">
                    <div className="limit-demo-time-slider"></div>
                    <div className="limit-demo-slider-labels">
                        <span>Off</span>
                        <span>6 hours</span>
                    </div>
                </div>
            </div>

            <div className="limit-demo-action-section">
                <button className="limit-demo-save-button">
                    <span>⚡</span>
                    <span>Set Limit</span>
                </button>
            </div>

            <style>{`
                .limit-demo-modal {
                    position: relative;
                    width: 100%;
                    max-width: 320px;
                    height: 400px;
                    margin: 0 auto;
                    background: rgba(255, 251, 235, 0.98);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(205, 133, 63, 0.35);
                    border-radius: 16px;
                    padding: 24px;
                    box-shadow: 0 20px 40px rgba(160, 82, 45, 0.15);
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
                    display: flex;
                    flex-direction: column;
                }
                
                .limit-demo-close-btn {
                    position: absolute;
                    top: 16px;
                    right: 16px;
                    background: rgba(218, 165, 32, 0.12);
                    border: none;
                    border-radius: 8px;
                    width: 32px;
                    height: 32px;
                    cursor: pointer;
                    color: rgba(160, 82, 45, 0.75);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 16px;
                }
                
                .limit-demo-header {
                    text-align: center;
                    margin-bottom: 32px;
                }
                
                .limit-demo-header-icon {
                    width: 48px;
                    height: 48px;
                    border-radius: 12px;
                    background: rgba(218, 165, 32, 0.2);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 16px;
                    font-size: 20px;
                }
                
                .limit-demo-modal-title {
                    margin: 0 0 8px 0;
                    font-size: 20px;
                    font-weight: 600;
                    color: rgba(101, 67, 33, 0.95);
                    line-height: 1.2;
                }
                
                .limit-demo-modal-subtitle {
                    margin: 0;
                    font-size: 14px;
                    color: rgba(160, 82, 45, 0.7);
                    line-height: 1.4;
                }
                
                .limit-demo-value-section {
                    text-align: center;
                    margin-bottom: 32px;
                }
                
                .limit-demo-value-display {
                    display: inline-flex;
                    align-items: baseline;
                    gap: 6px;
                    background: rgba(218, 165, 32, 0.15);
                    padding: 16px 24px;
                    border-radius: 12px;
                    margin-bottom: 12px;
                    border: 1px solid rgba(205, 133, 63, 0.3);
                }
                
                .limit-demo-value-number {
                    font-size: 28px;
                    font-weight: 700;
                    color: rgba(101, 67, 33, 0.95);
                    line-height: 1;
                }
                
                .limit-demo-value-description {
                    font-size: 12px;
                    color: rgba(160, 82, 45, 0.6);
                    font-style: italic;
                }
                
                .limit-demo-slider-section {
                    margin-bottom: 32px;
                }
                
                .limit-demo-slider-container {
                    padding: 0 8px;
                }
                
                .limit-demo-time-slider {
                    width: 100%;
                    height: 8px;
                    border-radius: 4px;
                    background: linear-gradient(to right, rgba(218, 165, 32, 0.8) 0%, rgba(218, 165, 32, 0.8) 33%, rgba(218, 165, 32, 0.2) 33%, rgba(218, 165, 32, 0.2) 100%);
                    margin-bottom: 12px;
                    position: relative;
                }
                
                .limit-demo-time-slider::after {
                    content: '';
                    position: absolute;
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    background: rgba(218, 165, 32, 0.9);
                    border: 3px solid rgba(255, 251, 235, 0.9);
                    box-shadow: 0 2px 8px rgba(160, 82, 45, 0.2);
                    top: -8px;
                    left: calc(33% - 12px);
                }
                
                .limit-demo-slider-labels {
                    display: flex;
                    justify-content: space-between;
                    font-size: 12px;
                    color: rgba(160, 82, 45, 0.6);
                    font-weight: 500;
                }
                
                .limit-demo-action-section {
                    text-align: center;
                }
                
                .limit-demo-save-button {
                    background: linear-gradient(135deg, rgba(218, 165, 32, 0.9), rgba(205, 133, 63, 0.9));
                    border: none;
                    border-radius: 12px;
                    color: rgba(101, 67, 33, 0.95);
                    font-size: 14px;
                    font-weight: 600;
                    padding: 14px 32px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    justify-content: center;
                    margin: 0 auto;
                    box-shadow: 0 4px 12px rgba(160, 82, 45, 0.3);
                }
            `}</style>
        </div>
    );
};

const DemoYouTubePlayer: React.FC = () => {
    return (
        <div className="youtube-demo-container">
            <div className="youtube-demo-player">
                <button className="youtube-demo-minimize-btn">−</button>
                <button className="youtube-demo-close-btn">×</button>

                <div className="youtube-demo-header">
                    <div className="youtube-demo-video-title">
                        YT: Rolling In the Deep
                    </div>
                </div>

                <div className="youtube-demo-video">
                    <div className="youtube-demo-thumbnail">
                        <div className="youtube-demo-play-overlay">▶</div>
                        <div className="youtube-demo-duration">3:21</div>
                    </div>
                </div>
            </div>

            <style>{`
                .youtube-demo-container {
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
                    display: flex;
                    justify-content: center;
                }
                
                .youtube-demo-player {
                    position: relative;
                    background: rgba(255, 251, 235, 0.98);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(205, 133, 63, 0.35);
                    border-radius: 14px;
                    padding: 16px;
                    box-shadow: 0 8px 24px rgba(160, 82, 45, 0.15);
                    width: 100%;
                    max-width: 320px;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                
                .youtube-demo-minimize-btn {
                    position: absolute;
                    top: 12px;
                    right: 44px;
                    width: 24px;
                    height: 24px;
                    background: rgba(218, 165, 32, 0.12);
                    border: none;
                    border-radius: 6px;
                    color: rgba(160, 82, 45, 0.75);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 12px;
                    font-weight: bold;
                    transition: all 0.2s ease;
                }
                
                .youtube-demo-close-btn {
                    position: absolute;
                    top: 12px;
                    right: 16px;
                    width: 24px;
                    height: 24px;
                    background: rgba(218, 165, 32, 0.12);
                    border: none;
                    border-radius: 6px;
                    color: rgba(160, 82, 45, 0.75);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 12px;
                    font-weight: bold;
                    transition: all 0.2s ease;
                }
                
                .youtube-demo-minimize-btn:hover,
                .youtube-demo-close-btn:hover {
                    background: rgba(218, 165, 32, 0.25);
                    color: rgba(160, 82, 45, 1);
                    transform: scale(1.05);
                }
                
                .youtube-demo-header {
                    display: flex;
                    align-items: center;
                    padding-right: 80px;
                    margin-top: 0px;
                }
                
                .youtube-demo-video-title {
                    font-size: 14px;
                    font-weight: 600;
                    color: rgba(101, 67, 33, 0.95);
                    line-height: 1.2;
                    flex: 1;
                }
                
                .youtube-demo-video {
                    position: relative;
                    width: 100%;
                    height: 162px;
                    border-radius: 8px;
                    overflow: hidden;
                    background: linear-gradient(135deg, rgba(218, 165, 32, 0.3), rgba(205, 133, 63, 0.5));
                }
                
                .youtube-demo-thumbnail {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(135deg, rgba(218, 165, 32, 0.6), rgba(205, 133, 63, 0.8));
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .youtube-demo-play-overlay {
                    color: rgba(255, 251, 235, 0.9);
                    font-size: 32px;
                    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
                }
                
                .youtube-demo-duration {
                    position: absolute;
                    bottom: 8px;
                    right: 8px;
                    background: rgba(0, 0, 0, 0.8);
                    color: white;
                    padding: 2px 6px;
                    border-radius: 4px;
                    font-size: 11px;
                    font-weight: 600;
                    font-variant-numeric: tabular-nums;
                }
            `}</style>
        </div>
    );
};

const DemoClipboardManager: React.FC = () => {
    const clipboardItems = [
        {
            id: "1",
            content: "clip16@rtrel.com",
            type: "text",
            timestamp: "",
            preview: "clip16@rtel.com",
        },
        {
            id: "2",
            content: "https://arxiv.org/abs/2508.15726",
            type: "text",
            timestamp: "",
            preview: "https://arxiv.org/abs/2508.15726",
        },
        {
            id: "3",
            content: "rgba(255, 251, 235, 0.98)",
            type: "text",
            timestamp: "",
            preview: "rgba(255, 251, 235, 0.98)",
        },
        {
            id: "4",
            content: "https://docs.google.com/spreadsheets/d/1abc123",
            type: "text",
            timestamp: "",
            preview: "https://docs.google.com/spreadsheets/d/1abc123",
        },
    ];

    return (
        <div className="clipboard-demo-container">
            <div className="clipboard-demo-modal">
                <button className="clipboard-demo-minimize-btn">−</button>
                <button className="clipboard-demo-close-btn">×</button>

                <div className="clipboard-demo-header">
                    <div className="clipboard-demo-header-left">
                        <div className="clipboard-demo-icon">📋</div>
                        <h1 className="clipboard-demo-title">Clipboard</h1>
                    </div>
                </div>

                <div className="clipboard-demo-search">
                    <span className="clipboard-demo-search-icon">🔍</span>
                    <input
                        type="text"
                        placeholder="Search clipboard..."
                        className="clipboard-demo-search-input"
                        readOnly
                    />
                </div>

                <div className="clipboard-demo-items">
                    {clipboardItems.map((item) => (
                        <div key={item.id} className="clipboard-demo-item">
                            <div className="clipboard-demo-preview">
                                {item.preview}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="clipboard-demo-footer">
                    <button className="clipboard-demo-copy-all-btn">
                        Copy All
                    </button>
                    <button className="clipboard-demo-clear-btn">
                        Clear All
                    </button>
                </div>
            </div>

            <style>{`
                .clipboard-demo-container {
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
                    display: flex;
                    justify-content: center;
                }
                
                .clipboard-demo-modal {
                    position: relative;
                    width: 100%;
                    max-width: 320px;
                    background: rgba(255, 251, 235, 0.98);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(205, 133, 63, 0.35);
                    border-radius: 14px;
                    overflow: hidden;
                    box-shadow: 0 8px 24px rgba(160, 82, 45, 0.15);
                    display: flex;
                    flex-direction: column;
                }
                
                .clipboard-demo-minimize-btn {
                    position: absolute;
                    top: 16px;
                    right: 48px;
                    width: 24px;
                    height: 24px;
                    background: rgba(218, 165, 32, 0.12);
                    border: none;
                    border-radius: 6px;
                    color: rgba(160, 82, 45, 0.75);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 12px;
                    font-weight: bold;
                    transition: all 0.2s ease;
                    z-index: 10;
                }
                
                .clipboard-demo-close-btn {
                    position: absolute;
                    top: 16px;
                    right: 16px;
                    width: 24px;
                    height: 24px;
                    background: rgba(218, 165, 32, 0.12);
                    border: none;
                    border-radius: 6px;
                    color: rgba(160, 82, 45, 0.75);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 12px;
                    font-weight: bold;
                    transition: all 0.2s ease;
                    z-index: 10;
                }
                
                .clipboard-demo-minimize-btn:hover,
                .clipboard-demo-close-btn:hover {
                    background: rgba(218, 165, 32, 0.25);
                    color: rgba(160, 82, 45, 1);
                    transform: scale(1.05);
                }
                
                .clipboard-demo-header {
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    padding: 12px 16px;
                    border-bottom: 1px solid rgba(205, 133, 63, 0.2);
                }
                
                .clipboard-demo-header-left {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                
                .clipboard-demo-icon {
                    width: 24px;
                    height: 24px;
                    background: rgba(218, 165, 32, 0.15);
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 12px;
                }
                
                .clipboard-demo-title {
                    margin: 0;
                    font-size: 16px;
                    font-weight: 600;
                    color: rgba(101, 67, 33, 0.95);
                }
                
                .clipboard-demo-count {
                    background: rgba(218, 165, 32, 0.15);
                    color: rgba(160, 82, 45, 0.8);
                    font-size: 11px;
                    font-weight: 600;
                    padding: 4px 8px;
                    border-radius: 8px;
                }
                
                .clipboard-demo-search {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 16px;
                    background: rgba(218, 165, 32, 0.05);
                    border-bottom: 1px solid rgba(205, 133, 63, 0.1);
                }
                
                .clipboard-demo-search-icon {
                    font-size: 12px;
                    opacity: 0.6;
                }
                
                .clipboard-demo-search-input {
                    flex: 1;
                    border: none;
                    outline: none;
                    background: none;
                    font-size: 13px;
                    color: rgba(101, 67, 33, 0.9);
                    placeholder: rgba(160, 82, 45, 0.5);
                }
                
                .clipboard-demo-items {
                    flex: 1;
                    max-height: 160px;
                    overflow-y: auto;
                }
                
                .clipboard-demo-item {
                    padding: 2px 16px;
                    border-bottom: 1px solid rgba(205, 133, 63, 0.1);
                }
                
                .clipboard-demo-item:hover {
                    background: rgba(218, 165, 32, 0.05);
                }
                
                .clipboard-demo-preview {
                    font-size: 11px;
                    color: rgba(101, 67, 33, 0.8);
                    line-height: 1.2;
                    font-family: "SF Mono", Monaco, "Cascadia Code", monospace;
                    background: rgba(218, 165, 32, 0.08);
                    padding: 4px 6px;
                    border-radius: 6px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }
                
                .clipboard-demo-preview:hover {
                    background: rgba(218, 165, 32, 0.12);
                }
                
                .clipboard-demo-footer {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 8px 16px;
                    background: rgba(218, 165, 32, 0.08);
                    border-top: 1px solid rgba(205, 133, 63, 0.1);
                    gap: 8px;
                }
                
                .clipboard-demo-copy-all-btn {
                    font-size: 11px;
                    font-weight: 600;
                    padding: 4px 8px;
                    border: none;
                    background: rgba(218, 165, 32, 0.15);
                    color: rgba(160, 82, 45, 0.8);
                    border-radius: 5px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }
                
                .clipboard-demo-copy-all-btn:hover {
                    background: rgba(218, 165, 32, 0.25);
                    transform: scale(1.05);
                }
                
                .clipboard-demo-clear-btn {
                    font-size: 11px;
                    font-weight: 600;
                    padding: 4px 8px;
                    border: none;
                    background: rgba(239, 68, 68, 0.1);
                    color: rgba(239, 68, 68, 0.8);
                    border-radius: 5px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }
                
                .clipboard-demo-clear-btn:hover {
                    background: rgba(239, 68, 68, 0.2);
                    transform: scale(1.05);
                }
            `}</style>
        </div>
    );
};

const DemoHoverNavbar: React.FC = () => {
    const navItems = [
        { icon: "📸", label: "Screenshot" },
        { icon: "📊", label: "Analytics" },
        { icon: "📅", label: "Flow" },
        { icon: "🎯", label: "Explore" },
        { icon: "📝", label: "Notes" },
        { icon: "⏱", label: "Timer" },
        { icon: "🛡", label: "Limits" },
    ];

    return (
        <div className="hover-navbar-demo">
            <div className="hover-navbar-demo-container">
                <div className="hover-navbar-demo-content">
                    {navItems.slice(0, 2).map((item, index) => (
                        <div key={index} className="hover-navbar-demo-item">
                            <span className="demo-nav-icon">{item.icon}</span>
                        </div>
                    ))}

                    <div className="hover-navbar-demo-separator"></div>

                    {navItems.slice(2, 5).map((item, index) => (
                        <div key={index} className="hover-navbar-demo-item">
                            <span className="demo-nav-icon">{item.icon}</span>
                        </div>
                    ))}

                    <div className="hover-navbar-demo-separator"></div>

                    {navItems.slice(5).map((item, index) => (
                        <div key={index} className="hover-navbar-demo-item">
                            <span className="demo-nav-icon">{item.icon}</span>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .hover-navbar-demo {
                    height: 400px;
                    display: flex;
                    align-items: center;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
                }
                
                .hover-navbar-demo-container {
                    width: 52px;
                    height: auto;
                    max-height: 350px;
                    background: rgba(255, 255, 255, 0.9);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(0, 0, 0, 0.1);
                    border-radius: 0 12px 12px 0;
                    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
                    display: flex;
                    flex-direction: column;
                    padding: 16px 0;
                    align-items: center;
                    gap: 8px;
                }
                
                @media (max-width: 768px) {
                    .hover-navbar-demo-container {
                        width: 44px;
                        max-height: 300px;
                        padding: 12px 0;
                        gap: 6px;
                    }
                    
                    .hover-navbar-demo-item {
                        width: 32px !important;
                        height: 32px !important;
                    }
                    
                    .demo-nav-icon {
                        font-size: 14px !important;
                    }
                }
                
                .hover-navbar-demo-content {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    width: 100%;
                    align-items: center;
                }
                
                .hover-navbar-demo-item {
                    width: 36px;
                    height: 36px;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    background: transparent;
                    transition: background 0.2s ease;
                }
                
                .hover-navbar-demo-item:hover {
                    background: rgba(0, 0, 0, 0.1);
                }
                
                .demo-nav-icon {
                    font-size: 16px;
                    opacity: 0.8;
                }
                
                .hover-navbar-demo-separator {
                    width: 20px;
                    height: 1px;
                    background: rgba(0, 0, 0, 0.2);
                    align-self: center;
                }
            `}</style>
        </div>
    );
};

const ModularSection: React.FC = () => {
    const [isVisible, setIsVisible] = React.useState(false);
    const [visibleComponents, setVisibleComponents] = React.useState<
        Set<string>
    >(new Set());
    const [showNavbar, setShowNavbar] = React.useState(false);
    const sectionRef = React.useRef<HTMLElement>(null);

    React.useEffect(() => {
        const isMobile = window.innerWidth < 768;
        const observer = new IntersectionObserver(
            ([entry]) => {
                console.log(
                    "ModularDemo intersection:",
                    entry.isIntersecting,
                    "mobile:",
                    isMobile,
                );
                setIsVisible(entry.isIntersecting);
                if (entry.isIntersecting) {
                    // Show navbar
                    setShowNavbar(true);

                    // Hide navbar after 1 second on mobile
                    if (isMobile) {
                        setTimeout(() => {
                            console.log(
                                "Hiding navbar on mobile after 1 second",
                            );
                            setShowNavbar(false);
                        }, 1000);
                    }
                    // Stagger component animations
                    const components = [
                        "flow",
                        "notes",
                        "youtube",
                        "timebar",
                        "analytics",
                        "limit",
                        "clipboard",
                    ];
                    components.forEach((component, index) => {
                        setTimeout(() => {
                            setVisibleComponents((prev) => {
                                const newSet = new Set([...prev, component]);
                                console.log(
                                    "Adding component:",
                                    component,
                                    "total visible:",
                                    newSet.size,
                                );
                                return newSet;
                            });
                        }, index * (isMobile ? 100 : 200)); // Faster on mobile
                    });
                } else {
                    // Reset animations when scrolling away
                    setVisibleComponents(new Set());
                    setShowNavbar(false);
                }
            },
            {
                threshold: isMobile ? 0.1 : 0.3,
                rootMargin: isMobile
                    ? "0px 0px -50px 0px"
                    : "0px 0px -100px 0px",
            },
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="min-h-screen flex items-center justify-center relative bg-[var(--bg)] py-8 sm:py-16"
        >
            {/* Hover Navbar - Positioned on far left, animated on scroll */}
            <div
                className={`fixed left-0 top-1/2 transform -translate-y-1/2 z-10 transition-all duration-700 ease-out ${
                    isVisible && showNavbar
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-full opacity-0"
                }`}
            >
                <DemoHoverNavbar />
            </div>

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-6 text-[var(--text)]">
                        Not a fan of{" "}
                        <span className="font-semibold text-[var(--accent-color)]">
                            typing?
                        </span>
                    </h2>
                    <p className="text-lg sm:text-xl text-[var(--muted-text)] max-w-3xl mx-auto leading-relaxed px-4">
                        Use the sidebar to open tools on any website.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
                    {/* Left Column */}
                    <div className="space-y-6 lg:col-span-1">
                        <div className="text-center">
                            <h3 className="text-lg font-semibold text-[var(--text)] mb-4">
                                Calendar & Notes
                            </h3>
                        </div>

                        <div className="flex flex-col items-center space-y-6">
                            <div
                                className={`w-full max-w-sm transition-opacity duration-700 ${
                                    visibleComponents.has("flow")
                                        ? "opacity-100"
                                        : "opacity-0"
                                }`}
                            >
                                <DemoFlowModal />
                            </div>
                            <div
                                className={`w-full max-w-sm transition-opacity duration-700 ${
                                    visibleComponents.has("notes")
                                        ? "opacity-100"
                                        : "opacity-0"
                                }`}
                            >
                                <DemoNotepadModal />
                            </div>
                        </div>
                    </div>

                    {/* Center Column */}
                    <div className="space-y-6 lg:col-span-1">
                        <div className="text-center">
                            <h3 className="text-lg font-semibold text-[var(--text)] mb-4">
                                Quick Access
                            </h3>
                        </div>

                        <div className="flex flex-col items-center space-y-6 sm:space-y-8">
                            <div
                                className={`w-full max-w-sm transition-opacity duration-700 ${
                                    visibleComponents.has("youtube")
                                        ? "opacity-100"
                                        : "opacity-0"
                                }`}
                            >
                                <DemoYouTubePlayer />
                            </div>
                            <div className="space-y-6 w-full max-w-sm">
                                <div>
                                    <div className="text-center">
                                        <h4 className="text-base font-semibold text-[var(--text)] mb-4">
                                            Timers and Page Analytics
                                        </h4>
                                    </div>
                                    <div
                                        className={`transition-opacity duration-700 space-y-2 ${
                                            visibleComponents.has("timebar")
                                                ? "opacity-100"
                                                : "opacity-0"
                                        }`}
                                    >
                                        <DemoTimebar />
                                        <DemoAnalyticsModal />
                                    </div>
                                </div>
                            </div>

                            {/* Descriptive Text Container - Always visible */}
                            <div className="w-full max-w-sm mx-auto mt-6 sm:mt-8">
                                <div className="text-center py-6 sm:py-8 px-4 sm:px-6 bg-gradient-to-br from-[var(--bg)] to-[rgba(255,251,235,0.5)] rounded-2xl border border-[rgba(205,133,63,0.2)]">
                                    <h4 className="text-lg sm:text-xl font-semibold text-[var(--text)] mb-3 leading-tight">
                                        Works on every website
                                    </h4>
                                    <p className="text-sm text-[var(--muted-text)] leading-relaxed">
                                        •
                                        <span className="font-medium text-[var(--accent-color)]">
                                            {" "}
                                            Draggable
                                        </span>{" "}
                                        •
                                        <span className="font-medium text-[var(--accent-color)]">
                                            {" "}
                                            Lightweight
                                        </span>{" "}
                                        •
                                        <span className="font-medium text-[var(--accent-color)]">
                                            {" "}
                                            Unobtrusive
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6 lg:col-span-1">
                        <div className="text-center">
                            <h3 className="text-lg font-semibold text-[var(--text)] mb-4">
                                Focus Tools
                            </h3>
                        </div>

                        <div className="flex flex-col items-center space-y-10 sm:space-y-14">
                            <div
                                className={`w-full max-w-sm transition-opacity duration-700 ${
                                    visibleComponents.has("limit")
                                        ? "opacity-100"
                                        : "opacity-0"
                                }`}
                            >
                                <DemoLimitModal />
                            </div>
                            <div
                                className={`w-full max-w-sm transition-opacity duration-700 ${
                                    visibleComponents.has("clipboard")
                                        ? "opacity-100"
                                        : "opacity-0"
                                }`}
                            >
                                <DemoClipboardManager />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-16">
                    <p className="text-lg text-[var(--muted-text)]">
                        Don't want any overhead? You can{" "}
                        <span className="font-medium text-[var(--accent-color)]">
                            disable all visual components and use the command
                            bar.
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ModularSection;
