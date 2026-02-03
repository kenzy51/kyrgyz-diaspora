"use client";

import { useChat } from "@ai-sdk/react";
import { useState } from "react";
import { Send, Bot, User, Sparkles, RefreshCcw } from "lucide-react";
import { DefaultChatTransport } from "ai"; // <--- Add this import
import ReactMarkdown from "react-markdown";

export default function DiasporaChat() {
  // Explicitly manage input to prevent "undefined" bugs in React 19
  const [chatInput, setChatInput] = useState("");

  const { messages, sendMessage, isLoading, reload } = useChat({
    transport: new DefaultChatTransport({
      api: "http://localhost:4000/chat",
    }),
    onError: (err) => console.error("Chat Failure:", err),
  });

  const handleCustomSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || isLoading) return;

    // AI SDK 6 uses sendMessage with a text property
    await sendMessage({
      text: chatInput,
    });

    setChatInput(""); // Clear field
  };

  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto border rounded-2xl shadow-xl h-[650px] bg-white overflow-hidden mt-10">
<br />
<br />      <div className="bg-blue-600 p-4 text-white flex justify-between items-center shadow-md">
        <div className="flex items-center gap-2">
          <Bot size={22} />
          <h2 className="font-bold tracking-tight">Kyrgyz Diaspora AI</h2>
        </div>
        <button
          onClick={() => reload()}
          className="hover:rotate-180 transition-transform duration-500"
        >
          <RefreshCcw size={18} />
        </button>
      </div>

      {/* Messages: Using .parts (the 2026 rendering standard) */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`p-4 rounded-2xl max-w-[85%] shadow-sm ${
                m.role === "user"
                  ? "bg-blue-600 text-white rounded-tr-none"
                  : "bg-white border text-black rounded-tl-none"
              }`}
            >
              <div className="flex items-center gap-2 mb-2 opacity-40">
                {m.role === "user" ? (
                  <User size={12} />
                ) : (
                  <Sparkles size={12} />
                )}
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  {m.role}
                </span>
              </div>

              {/* SDK 6 Tip: Always check parts first for multi-modal support */}
              <div className="text-sm prose prose-sm max-w-none prose-p:leading-relaxed">
                {m.parts ? (
                  m.parts.map(
                    (part, i) =>
                      part.type === "text" && (
                        <ReactMarkdown key={i}>{part.text}</ReactMarkdown>
                      ),
                  )
                ) : (
                  <ReactMarkdown>{m.content}</ReactMarkdown>
                )}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="text-xs text-gray-400 animate-pulse italic">
            AI is typing...
          </div>
        )}
      </div>

      {/* Input */}
      <form
        onSubmit={handleCustomSubmit}
        className="p-4 border-t bg-white flex gap-3 shadow-inner"
      >
        <input
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          placeholder="Ask about 2026 visas or NYC clinics..."
          className="flex-1 p-3 bg-gray-100 border-none rounded-xl focus:ring-2 focus:ring-blue-500/20 text-black text-sm"
        />
        <button
          type="submit"
          disabled={isLoading || !chatInput.trim()}
          className="bg-blue-600 text-white p-3 rounded-xl disabled:bg-gray-200 transition-all shadow-lg shadow-blue-100 active:scale-95"
        >
          <Send size={18} />
        </button>
      </form>
    </div>
  );
}
