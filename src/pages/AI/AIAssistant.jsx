import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Send, Mic, Sparkles, Target, Calendar, BookOpen, BarChart3, Lightbulb, Zap, MessageCircle } from 'lucide-react';

const AIAssistant = () => {
  const [messages, setMessages] = useState([
    { id: 1, type: 'ai', content: "Hello! I'm your AI Study Assistant. How can I help you today? I can help with study plans, quiz recommendations, or explaining concepts!" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const suggestions = [
    { icon: Target, title: "Create Study Plan", description: "Personalized weekly schedule" },
    { icon: Lightbulb, title: "Summarize Topic", description: "Get quick concept summaries" },
    { icon: BarChart3, title: "Quiz Me", description: "Test your knowledge" },
    { icon: Calendar, title: "Set Goals", description: "Learning milestones" }
  ];

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, { id: Date.now(), type: 'user', content: input }]);
    setInput('');
    setIsTyping(true);
    
    setTimeout(() => {
      const responses = [
        "That's a great question! Based on your learning progress, I recommend focusing on React hooks and state management this week.",
        "I've analyzed your study patterns. You're making excellent progress! Would you like me to generate a practice quiz?",
        "Here's a study tip: Break down complex topics into 25-minute focused sessions using the Pomodoro technique.",
        "Based on your goals, I've created a personalized study plan for you. Check your dashboard for details!"
      ];
      setMessages(prev => [...prev, { 
        id: Date.now(), 
        type: 'ai', 
        content: responses[Math.floor(Math.random() * responses.length)]
      }]);
      setIsTyping(false);
    }, 1500);
  };

  const startVoiceInput = () => {
    setIsListening(true);
    setTimeout(() => {
      setIsListening(false);
      setInput("Can you help me understand machine learning?");
    }, 2000);
  };

  return (
    <div className="min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
              <Brain className="w-6 h-6" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">
              AI Study <span className="gradient-text">Assistant</span>
            </h1>
          </div>
          <p className="text-gray-400">Your personalized AI tutor for smarter learning</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column - Suggestions */}
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-purple-400" />
                AI Suggestions
              </h2>
              <div className="space-y-3">
                {suggestions.map((suggestion, index) => (
                  <div key={index} className="glass rounded-xl p-4 cursor-pointer hover:bg-white/5 transition-all">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                        <suggestion.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">{suggestion.title}</h3>
                        <p className="text-xs text-gray-400">{suggestion.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Study Stats */}
            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold mb-3">Your Study Stats</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Weekly Goal</span>
                    <span>8/12 hours</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '66%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Quizzes Completed</span>
                    <span>12/20</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '60%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Chat Interface */}
          <div className="lg:col-span-2">
            <div className="glass rounded-2xl overflow-hidden h-[500px] flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-white/10 bg-white/5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-semibold">AI Assistant Active</span>
                  </div>
                </div>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                      <div className={`rounded-2xl p-3 ${
                        message.type === 'user' 
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                          : 'glass'
                      }`}>
                        <p className="text-sm">{message.content}</p>
                      </div>
                      <div className={`text-xs text-gray-400 mt-1 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                        {message.type === 'user' ? 'You' : 'AI Assistant'}
                      </div>
                    </div>
                    {message.type === 'ai' && (
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-2 order-0">
                        <Brain className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="glass rounded-2xl p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                        <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-white/10">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={startVoiceInput}
                    className={`p-3 rounded-xl transition-all duration-200 ${
                      isListening ? 'bg-red-500/20 text-red-400' : 'glass hover:bg-white/10'
                    }`}
                  >
                    <Mic className="w-5 h-5" />
                  </button>
                  
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask me anything about your studies..."
                    className="flex-1 glass rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  
                  <button
                    onClick={handleSend}
                    className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-lg transition-all"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="mt-3 text-center text-xs text-gray-400">
                  💡 Try: "Create a study schedule" or "Explain React hooks"
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;