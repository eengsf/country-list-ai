/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState } from 'react';
import ArrowUp from './iconSVG/ArrowUp';
import ChevronDoubleUp from './iconSVG/ChevronDoubleUp';
import ChevronDoubleDown from './iconSVG/ChevronDoubleDown';

export default function Chat() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState(''); 
  const [expanded, setExpanded] = useState(false);

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    setExpanded(true);
    try {
      const res = await fetch('/api/proxy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: input }),
      });

      const data = await res.json();
      if (res.ok) {
        setResponse(data.response);
      } else {
        setResponse(`Error: ${data.error}`);
      }
    } catch (error) {
      setResponse('Failed to connect to AI');
    }

    setInput('');
  };

  const toggleResponse = () => {
    setExpanded((prev) => !prev);
  };


  return (
    <div
      className={`bg-sunStrong dark:bg-moonStrong mx-auto lg:max-w-3xl md:max-w-2xl sm:max-w-xl w-full fixed bottom-0 p-5 transition-all duration-300 ${
        expanded ? 'h-fit' : 'h-1/5'
      } flex flex-col justify-end gap-0 rounded-t-xl`}
    >
       <div
        className={`overflow-y-auto mb-2 transition-all duration-300 ${
          expanded ? "flex-1 opacity-100" : "opacity-0 h-0"
        }`}
      >
        {!response ? (
          <div className="">AI assistant is typing...</div>
        ) : (
          
            <div className=" p-3 rounded-md shadow-md whitespace-pre-line text-light">
              {response}
            </div>
          
        )}
      </div>

      <button
        onClick={toggleResponse}
        disabled={!response}
        className={`bg-light text-dark rounded-full p-2 self-center mb-2 shadow-md  transition ${response ? 'hover:bg-sunMedium dark:hover:bg-moonThin' : ''}`}
      >
        {expanded ? (
          <ChevronDoubleDown/>
        ) : (
          <ChevronDoubleUp/>
        )}
      </button>

      <div className="flex flex-col gap-2">
        <div className="bg-white w-full flex items-center p-2 rounded-xl shadow-md border border-gray-300">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask something..."
            className="flex-1 p-2 outline-none bg-transparent text-dark"
          />
          <button
            onClick={handleSendMessage}
            className="bg-sunMedium dark:bg-moonThin text-white p-2 rounded-full flex items-center justify-center hover:bg-sunMedium/70 dark:hover:bg-moonThin/70 transition"
          >
            <ArrowUp />
          </button>
        </div>
        <p className="text-center text-xs text-white">
          Chat AI Assistant can make mistakes. Verify important information.
        </p>
      </div>
    </div>
  );
}
