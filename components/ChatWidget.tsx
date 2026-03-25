"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, HeartPulse, Loader2 } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { AnimatePresence, motion } from "framer-motion";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hi! I'm your Habito Health Ally. Have a question about building micro-habits or your baseline health?"
    }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, loading]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || loading) return;

    const newUserMsg: Message = { id: Date.now().toString(), role: "user", content: message };
    setMessages(prev => [...prev, newUserMsg]);
    setMessage("");
    setLoading(true);

    try {
      const ai = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || "");
      const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" });
      
      const systemPrompt = `
      You are Habito AI, a preventive health assistant for young urban professionals in India.
      Your goal is to answer questions about preventive health briefly and professionally.
      Tone: Calm, intelligent, non-judgmental, encouraging micro-habits rather than massive overhauls. 
      Keep your responses under 3 sentences. Never diagnose medical conditions.
      Refer to the platform "Habito" as your creator. 
      `;
      
      const prompt = `${systemPrompt}\n\nUser: ${newUserMsg.content}`;
      const result = await model.generateContent(prompt);
      const text = result.response.text();
      
      setMessages(prev => [...prev, { id: Date.now().toString(), role: "assistant", content: text || "Sorry, I couldn't generate a response." }]);
    } catch (err) {
      setMessages(prev => [...prev, { id: Date.now().toString(), role: "assistant", content: "Sorry, I'm having trouble connecting to my cognitive pathways right now. Make sure your API key is correctly configured." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 bg-habito-teal-primary text-white rounded-full shadow-2xl flex items-center justify-center z-50 transition-transform ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : ''}`}
      >
        <MessageCircle size={28} />
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 border-2 border-white rounded-full"></span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-6 right-6 w-[90vw] max-w-[380px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col z-50 overflow-hidden sm:bottom-8 sm:right-8 h-[550px] max-h-[85vh]"
          >
            <div className="bg-gradient-to-r from-habito-neutral-dark to-gray-800 p-4 flex justify-between items-center text-white">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-habito-teal-primary rounded-full flex items-center justify-center shadow-inner">
                  <HeartPulse size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-wide">Habito AI Ally</h3>
                  <p className="text-xs text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-1.5 animate-pulse shadow-[0_0_5px_rgba(74,222,128,0.5)]"></span>
                    Online
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-2 rounded-full"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-5 bg-[#F9FAFB]">
              <div className="text-center my-4">
                <span className="text-[10px] uppercase font-bold text-gray-400 bg-gray-100 px-3 py-1 rounded-full">Today</span>
              </div>
              {messages.map((msg) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={msg.id} 
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-6 h-6 rounded-full bg-habito-teal-primary shrink-0 flex items-center justify-center mr-2 mt-1 shadow-sm">
                      <HeartPulse size={12} className="text-white" />
                    </div>
                  )}
                  <div className={`max-w-[80%] rounded-[1.25rem] px-4 py-3.5 text-sm leading-relaxed ${
                    msg.role === "user" 
                    ? "bg-habito-teal-deep text-white rounded-tr-sm shadow-sm" 
                    : "bg-white border border-gray-100 text-gray-800 shadow-sm rounded-tl-sm"
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="w-6 h-6 rounded-full bg-habito-teal-primary shrink-0 flex items-center justify-center mr-2 mt-1 shadow-sm">
                    <HeartPulse size={12} className="text-white" />
                  </div>
                  <div className="bg-white border border-gray-100 text-gray-500 shadow-sm rounded-2xl rounded-tl-sm px-4 py-3 flex items-center space-x-2">
                    <Loader2 size={16} className="animate-spin text-habito-teal-primary" />
                    <span className="text-sm font-medium">Formulating response...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-white border-t border-gray-100">
              <form onSubmit={handleSend} className="relative flex items-center group">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask about your risk index..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-full pl-5 pr-12 py-3.5 text-sm focus:outline-none focus:border-habito-teal-primary/50 focus:bg-white transition-all shadow-sm"
                />
                <button
                  type="submit"
                  disabled={!message.trim() || loading}
                  className="absolute right-1.5 p-2 bg-habito-teal-primary text-white rounded-full hover:bg-habito-teal-deep transition-all disabled:opacity-50 disabled:hover:bg-habito-teal-primary transform hover:scale-105 active:scale-95 disabled:hover:scale-100 shadow-md"
                >
                  <Send size={16} className="translate-x-[1px] translate-y-[1px]" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
