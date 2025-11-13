import React, { useState } from "react";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "👋 Welcome to PalEnable Solutions!", sender: "bot" },
    { text: "We empower organizations with smart, scalable technology — from Salesforce to Web and App development.", sender: "bot" },
    { text: "How can we assist you today?", sender: "bot" },
  ]);
  const [mode, setMode] = useState("initial");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentFlow, setCurrentFlow] = useState(null);

  const toggleChatbot = () => setIsOpen(!isOpen);

  // Question flows
  const flows = {
    salesforce: [
      {
        question: "Are you currently using Salesforce or planning to start fresh?",
        options: ["🆕 Starting Fresh", "🔄 Migrating from Another System", "⚙️ Optimize Existing Setup"],
      },
      {
        question: "What kind of Salesforce solution do you need?",
        options: ["Sales Cloud", "Service Cloud", "Marketing Cloud", "Custom Solution"],
      },
      {
        question: "How many users or departments will use Salesforce in your organization?",
        options: ["1-10", "11-50", "51-200", "200+"],
      },
      {
        question: "Would you like to book a free consultation with our Salesforce expert?",
        options: ["Yes, please", "Not now"],
      },
    ],
    it_solutions: [
      {
        question: "Could you tell us a little about your organization or project?",
        options: ["Startup / Business", "NGO / Non-profit", "Educational Institute", "Other"],
      },
      {
        question: "What kind of IT solution are you looking for?",
        options: [
          "End-to-End Digital Transformation",
          "Web Development",
          "App Development",
          "ERP / HR Management System",
          "Data & Analytics / Dashboard Solution",
          "NGO Support System (Donor, Volunteer, Impact Management)"
        ],
      },
      {
        question: "Do you want cloud-based or on-premise deployment?",
        options: ["Cloud-based", "On-Premise", "Hybrid"],
      },
      {
        question: "Would you like to schedule a project demo?",
        options: ["Yes, please", "Not now"],
      },
    ],
    web: [
      {
        question: "What type of website are you looking to build?",
        options: [
          "Company / Portfolio Website",
          "E-commerce Platform",
          "NGO or Social Impact Site",
          "Custom Web Application"
        ],
      },
      {
        question: "Do you already have content and branding ready?",
        options: ["Yes, ready", "Some content ready", "No, need help"],
      },
      {
        question: "What’s your preferred timeline for launch?",
        options: ["1 month", "2-3 months", "4-6 months", "6+ months"],
      },
      {
        question: "Would you like our team to share a few recent website samples?",
        options: ["Yes, please", "Not now"],
      },
    ],
    app: [
      {
        question: "Are you looking for Android, iOS, or cross-platform app development?",
        options: ["📱 Android", "🍏 iOS", "⚡ Cross-Platform (Flutter, React Native)"],
      },
      {
        question: "What’s the main purpose of your app?",
        options: [
          "E-commerce or Booking",
          "Community / Learning",
          "Internal Management App",
          "AI / Automation Based",
          "Gaming App",
        ],
      },
      {
        question: "Do you already have a backend or API setup?",
        options: ["Yes, ready", "Some backend ready", "No, need help"],
      },
      {
        question: "Would you like a project estimate or strategy session?",
        options: ["Yes, please", "Not now"],
      },
    ],
    talk: [
      {
        question: "May I have your name and organization name?",
        options: ["Provide details"],
      },
      {
        question: "Please share your email or WhatsApp number for follow-up.",
        options: ["Provide contact"],
      },
      {
        question: "When is the best time for our consultant to reach you?",
        options: ["Morning", "Afternoon", "Evening"],
      },
      {
        question: "Would you like to receive updates on our latest projects & case studies?",
        options: ["Yes, please", "Not now"],
      },
    ],
  };

  const handleAnswerClick = (answer) => {
    const newMessages = [...messages, { text: answer, sender: "user" }];
    setMessages(newMessages);

    setTimeout(() => {
      setMessages([...newMessages, { text: "Thanks for your response!", sender: "bot" }]);

      const flow = flows[currentFlow];
      if (questionIndex < flow.length - 1) {
        setQuestionIndex(questionIndex + 1);
      } else {
        setMode("initial");
        setQuestionIndex(0);
        setCurrentFlow(null);
      }
    }, 800);
  };

  const startFlow = (flowName) => {
    setCurrentFlow(flowName);
    setMode("questions");
    setQuestionIndex(0);
  }; 

  return (
    <div className="chatbot-widget">
      <button className="chatbot-toggle-btn" onClick={toggleChatbot}>
        <i className="bx bx-message-rounded-dots"></i>
      </button>

      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h3>PalEnable Chat</h3>
            <button onClick={toggleChatbot} className="close-btn">
              <i className="bx bx-x"></i>
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chatbot-suggestions">
            {mode === "initial" && (
              <>
                <button onClick={() => startFlow("salesforce")}>⚙️ Salesforce Implementation Services</button>
                <button onClick={() => startFlow("it_solutions")}>💻 IT Solutions for my Business / NGO</button>
                <button onClick={() => startFlow("web")}>🌐 Web Development</button>
                <button onClick={() => startFlow("app")}>📱 Mobile App Development</button>
                <button onClick={() => startFlow("talk")}>💬 Talk to our Team</button>
              </>
            )}

            {mode === "questions" && currentFlow && (
              <>
                <div style={{ marginBottom: "8px", fontWeight: "bold" }}>
                  {flows[currentFlow][questionIndex].question}
                </div>
                {flows[currentFlow][questionIndex].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswerClick(opt)}
                  >
                    {opt}
                  </button>
                ))}
              </>
            )}
          </div>
        </div>
      )}

      <style>{`
        .chatbot-widget { 
        position: fixed; 
        bottom: 30px; 
        right: 30px; 
        z-index: 1000; 
        }
        .chatbot-toggle-btn { 
        width: 60px; 
        height: 60px;
         background: #43A5FE; 
         border: none; 
         border-radius: 50%; 
         display: flex; 
         align-items: center; 
         justify-content: center;
          cursor: pointer; 
          }
        .chatbot-toggle-btn i { 
        font-size: 24px; 
        color: white; 
        }
        .chatbot-container {
         position: absolute; 
         bottom: 80px; 
         right: 0; 
         width: 350px; 
         height: 500px; 
         background-color: white;
          border-radius: 10px; 
          box-shadow: 0 5px 15px rgba(0,0,0,0.2); 
          display: flex;
           flex-direction: column;
           overflow: hidden; }
        .chatbot-header { background-color: #43A5FE; color: white; padding: 15px; display: flex; justify-content: space-between; align-items: center; }
        .chatbot-header h3 { margin: 0; font-size: 18px; }
        .close-btn { background: none; border: none; color: white; font-size: 16px; cursor: pointer; }
        .chatbot-messages { flex: 1; padding: 15px; overflow-y: auto; display: flex; flex-direction: column; background-color: #f9f9f9; }
        .message { max-width: 80%; padding: 10px 15px; margin-bottom: 10px; border-radius: 18px; word-break: break-word; }
        .message.bot { background-color: white; align-self: flex-start; border-bottom-left-radius: 5px; border: 1px solid #e0e0e0; color: #333; }
        .message.user { background-color: #43A5FE; color: white; align-self: flex-end; border-bottom-right-radius: 5px; }
        .chatbot-suggestions { padding: 8px 12px; border-top: 1px solid #e0e0e0; background-color: white; display: flex; flex-direction: column; }
        .chatbot-suggestions button { background-color: #43A5FE; color: white; border: none; border-radius: 18px; padding: 2px 5px; cursor: pointer; margin-bottom: 5px; margin-right: 5px; }
        .chatbot-suggestions button:hover { opacity: 0.9; }
      `}</style>
    </div>
  );
};

export default ChatbotWidget;
