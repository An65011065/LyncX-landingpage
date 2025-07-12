import React from "react";

const AIAssistantCard: React.FC = () => {
    return (
        <>
            <style>{`
        .ai-card {
          height: 600px;
          width: 400px;
          border-radius: 24px;
          perspective: 2000px;
          position: relative;
          transform-style: preserve-3d;
        }
        
        .ai-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
          transform-origin: center center;
        }
        
        .ai-card:hover .ai-card-inner {
          transform: rotateY(180deg) translateZ(0);
        }
        
        .ai-card-front, .ai-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 24px;
          overflow: hidden;
          top: 0;
          left: 0;
          transform-style: preserve-3d;
        }
        
        .ai-card-front {
          background: linear-gradient(135deg, #fefcfb 0%, #f3f0ed 100%);
          color: #1a1a1a;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 0;
          position: relative;
          border: 2px solid #2d3436;
        }
        
        .ai-card-front::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(251, 146, 60, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.12) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .ai-card-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(251, 113, 133, 0.12) 0%, transparent 70%);
          transform: translate(-50%, -50%);
          animation: aiCardPulse 4s ease-in-out infinite;
        }
        
        @keyframes aiCardPulse {
          0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(0.8); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
        }
        
        .ai-card-content {
          position: relative;
          z-index: 2;
          padding: 3rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .ai-card-front h3 {
          font-size: 2.2rem;
          font-weight: 300;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          letter-spacing: -0.02em;
          opacity: 0.9;
          color: #1a1a1a;
        }
        
        .ai-card-front p {
          font-size: 1rem;
          opacity: 0.5;
          line-height: 1.6;
          font-weight: 300;
          letter-spacing: 0.01em;
          color: #1a1a1a;
        }
        
        .ai-card-accent {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, rgba(251, 113, 133, 0.7), transparent);
        }
        
        .ai-card-back {
          position: absolute;
          background: white;
          color: #1a1a1a;
          transform: rotateY(180deg) translateZ(1px);
          border: 2px solid #2d3436;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.06);
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding: 2rem;
          overflow-y: auto;
        }
        
        .ai-bubble-enter {
          animation: aiBubbleSlideIn 0.5s ease-out both;
        }
        
        @keyframes aiBubbleSlideIn {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
          }
          50% {
            transform: translateY(-2px) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .ai-message {
          width: fit-content;
          max-width: 280px;
          word-wrap: break-word;
          word-break: break-word;
          margin-bottom: 12px;
          line-height: 24px;
          padding: 12px 18px;
          border-radius: 25px;
          font-size: 14px;
        }
        
        .ai-message.user {
          align-self: flex-end;
          margin-left: auto;
          margin-right: 0;
          background-color: rgba(11, 147, 246, 0.1);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(11, 147, 246, 0.2);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
          color: #0a4174;
        }
        
        .ai-message.ai {
          align-self: flex-start;
          margin-left: 0;
          margin-right: auto;
          background-color: rgba(229, 229, 234, 0.1);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
          color: #2D3436;
        }
        
        .ai-conversation {
          display: flex;
          flex-direction: column;
          margin-bottom: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(229, 229, 234, 0.3);
        }
        
        .ai-conversation:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }
        
        @media (max-width: 768px) {
          .ai-card {
            width: 90%;
            height: 500px;
          }
          .ai-card-content {
            padding: 2rem;
          }
          .ai-card-front h3 {
            font-size: 1.8rem;
          }
          .ai-card-back {
            padding: 2rem;
          }
          .ai-message {
            font-size: 13px;
            max-width: 220px;
          }
        }
      `}</style>

            <div className="ai-card">
                <div className="ai-card-inner">
                    <div className="ai-card-front">
                        <div className="ai-card-glow"></div>
                        <div className="ai-card-content">
                            <div className="font-bold text-4xl mb-2">
                                AI Productivity Assistant
                            </div>
                            <p>
                                Understands your browsing patterns and helps you
                                improve productivity with intelligent insights
                                and gentle nudges toward better focus.
                            </p>
                        </div>
                        <div className="ai-card-accent"></div>
                    </div>
                    <div className="ai-card-back">
                        <div className="ai-conversation">
                            <div className="ai-message user ai-bubble-enter">
                                Should I buy the AirForces?
                            </div>
                            <div className="ai-message ai ai-bubble-enter">
                                You spent 40 minutes looking at 6 AirMaxes...
                                maybe your heart is swaying that way
                            </div>
                        </div>

                        <div className="ai-conversation">
                            <div className="ai-message user ai-bubble-enter">
                                Why did I feel so off today?
                            </div>
                            <div className="ai-message ai ai-bubble-enter">
                                You were up until 2:30am on YouTube, did 3 hours
                                of work in Replit but switched tabs 32 times to
                                choose songs on Spotify
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AIAssistantCard;
