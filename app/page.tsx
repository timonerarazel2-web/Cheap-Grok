'use client';

import { useChat } from 'ai/react';

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
  });

  return (
    <div className="flex flex-col h-screen bg-black text-white">
      <header className="p-4 text-center border-b border-gray-800">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
          Cheap Groky 😈
        </h1>
        <p className="text-sm text-gray-400">Free • Fast • Almost Grok</p>
      </header>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="text-center mt-20 text-gray-500">
            <p className="text-6xl mb-4">👀</p>
            <p>Paste your wildest thoughts. I dare you.</p>
          </div>
        )}
        {messages.map(m => (
          <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs md:max-w-lg px-4 py-3 rounded-2xl ${
              m.role === 'user' ? 'bg-cyan-600' : 'bg-gray-800'
            }`}>
              {m.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-800 px-4 py-3 rounded-2xl">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-800">
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Send a message..."
          className="w-full px-4 py-3 bg-gray-900 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
          disabled={isLoading}
        />
      </form>
    </div>
  );
}
