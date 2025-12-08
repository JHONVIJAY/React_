import { MessageCircle, X, Send, User, Bot } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Hello! Welcome to Ava Surfaces. How can I assist you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const chatRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickReplies = [
    'View Collections',
    'Book Consultation',
    'Pricing Information',
    'Showroom Locations'
  ];

  useEffect(() => {
    if (isOpen && chatRef.current) {
      gsap.from(chatRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: getBotResponse(messageText),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('collection') || lowerMessage.includes('tile')) {
      return 'We offer premium porcelain, ceramic, marble effect, and outdoor tile collections. Would you like to explore a specific collection?';
    } else if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      return 'Our pricing varies by collection and quantity. Please contact our sales team at sales@avasurfaces.com or call +1 (555) 123-4567 for a detailed quote.';
    } else if (lowerMessage.includes('consultation') || lowerMessage.includes('book')) {
      return 'I\'d be happy to help you book a consultation! Please visit our Contact page or call us at +1 (555) 123-4567 to schedule an appointment with our design experts.';
    } else if (lowerMessage.includes('showroom') || lowerMessage.includes('location')) {
      return 'Our flagship showroom is located at 123 Design Street, New York, NY 10001. We\'re open Monday-Friday 9am-6pm, Saturday 10am-4pm. Would you like directions?';
    } else {
      return 'Thank you for your message! For immediate assistance, please call us at +1 (555) 123-4567 or email info@avasurfaces.com. Our team is here to help!';
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 bg-[#C9A55C] text-white p-4 rounded-full shadow-2xl hover:bg-[#B89449] transition-all duration-300 group ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          ref={chatRef}
          className="fixed bottom-0 sm:bottom-6 right-0 sm:right-6 z-50 w-full sm:w-[95vw] sm:max-w-md bg-white sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden border-t sm:border border-gray-200"
          style={{ height: '60vh', maxHeight: '100vh' }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#C9A55C] to-[#B89449] text-white p-4 sm:p-6 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                <Bot className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold truncate">Ava Assistant</h3>
                <p className="text-xs text-white/80 truncate">Online • Typically replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-2 rounded-lg transition-colors flex-shrink-0"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 sm:gap-3 ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.sender === 'user' ? 'bg-gray-300' : 'bg-[#C9A55C]'
                }`}>
                  {message.sender === 'user' ? (
                    <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-700" />
                  ) : (
                    <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  )}
                </div>
                <div className={`max-w-[75%] ${message.sender === 'user' ? 'items-end' : 'items-start'} flex flex-col gap-1`}>
                  <div className={`px-3 sm:px-4 py-2 sm:py-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-[#C9A55C] text-white'
                      : 'bg-white border border-gray-200'
                  }`}>
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                  <span className="text-xs text-gray-400 px-2">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length <= 2 && (
            <div className="px-4 sm:px-6 py-3 bg-white border-t border-gray-100 flex-shrink-0">
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Quick Actions</p>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleSend(reply)}
                    className="px-3 py-1.5 text-xs border border-[#C9A55C] text-[#C9A55C] rounded-full hover:bg-[#C9A55C] hover:text-white transition-all"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-3 sm:p-4 bg-white border-t border-gray-200 flex-shrink-0 safe-bottom">
            <div className="flex gap-2 items-end">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#C9A55C] transition-colors text-sm"
              />
              <button
                onClick={() => handleSend()}
                disabled={!inputValue.trim()}
                className="bg-[#C9A55C] text-white p-2.5 sm:p-3 rounded-xl hover:bg-[#B89449] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                aria-label="Send message"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}