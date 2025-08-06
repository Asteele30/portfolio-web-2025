"use client";

import React, { useState, useEffect } from 'react';

const CodeTypingAnimation = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const [isLooping, setIsLooping] = useState(false);

  const codeLines = [
    { 
      text: "const developer = {", 
      type: "syntax",
      delay: 100 
    },
    { 
      text: "  name: 'Front End Developer',", 
      type: "property",
      delay: 80 
    },
    { 
      text: "  location: 'Atlanta, GA',", 
      type: "property",
      delay: 80 
    },
    { 
      text: "  skills: [", 
      type: "property",
      delay: 80 
    },
    { 
      text: "    'React', 'Next.js', 'TypeScript',", 
      type: "array",
      delay: 60 
    },
    { 
      text: "    'Node.js', 'JavaScript', 'Java',", 
      type: "array",
      delay: 60 
    },
    { 
      text: "    'C#', 'Python',", 
      type: "array",
      delay: 60 
    },
    { 
      text: "  ],", 
      type: "syntax",
      delay: 80 
    },
    { 
      text: "  passion: 'Building clean, efficient applications',", 
      type: "property",
      delay: 80 
    },
    { 
      text: "  currentRole: 'Development Intern @ 121G LLC',", 
      type: "property",
      delay: 80 
    },
    { 
      text: "  education: 'CS @ Kennesaw State University',", 
      type: "property",
      delay: 80 
    },
    { 
      text: "  interests: ['Art', 'Reading', 'Traveling'],", 
      type: "property",
      delay: 80 
    },
    { 
      text: "  getMotivation() {", 
      type: "function",
      delay: 100 
    },
    { 
      text: "    return 'Love learning new tech & solving problems!';", 
      type: "return",
      delay: 80 
    },
    { 
      text: "  },", 
      type: "syntax",
      delay: 80 
    },
    { 
      text: "  contact: 'Always open to new opportunities!'", 
      type: "property",
      delay: 80 
    },
    { 
      text: "};", 
      type: "syntax",
      delay: 100 
    },
    { 
      text: "", 
      type: "empty",
      delay: 500 
    },
    { 
      text: "// Let's build something amazing together! ??", 
      type: "comment",
      delay: 60 
    },
    { 
      text: "// Typing animation component - AI-assisted development with Claude", 
      type: "comment",
      delay: 60 
    }

  ];

  useEffect(() => {
    if (!isTyping || currentLineIndex >= codeLines.length) {
      if (currentLineIndex >= codeLines.length) {
        setTimeout(() => {
          setIsLooping(true);
          setDisplayedText('');
          setCurrentLineIndex(0);
          setIsTyping(true);
        }, 3000);
      }
      return;
    }

    const currentLine = codeLines[currentLineIndex];
    const targetText = codeLines.slice(0, currentLineIndex + 1)
      .map(line => line.text)
      .join('\n');

    if (displayedText.length < targetText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(targetText.slice(0, displayedText.length + 1));
      }, currentLine.delay || 50);

      return () => clearTimeout(timeout);
    } else {
      // Line completed, move to next
      setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1);
      }, 300);
    }
  }, [displayedText, currentLineIndex, isTyping, codeLines]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  const getLineStyle = (lineIndex: number) => {
    if (lineIndex >= codeLines.length) return 'text-gray-400';
    
    const lineType = codeLines[lineIndex].type;
    switch (lineType) {
      case 'syntax':
        return 'text-blue-400';
      case 'property':
        return 'text-emerald-400';
      case 'array':
        return 'text-yellow-400';
      case 'function':
        return 'text-purple-400';
      case 'return':
        return 'text-pink-400';
      case 'comment':
        return 'text-gray-500 italic';
      default:
        return 'text-gray-300';
    }
  };

  const renderLine = (line: string, index: number) => {
    const text = line.trim();
    
    // Syntax highlighting patterns
    if (text.includes('const ') || text.includes('return ') || text.includes('function')) {
      return (
        <span>
          <span className="text-purple-400">{text.match(/(const|return|function)/)?.[0]}</span>
          <span className="text-gray-300">{text.replace(/(const|return|function)/, '')}</span>
        </span>
      );
    }
    
    if (text.includes("'") && text.includes(':')) {
      const parts = text.split(':');
      return (
        <span>
          <span className="text-emerald-400">{parts[0]}:</span>
          <span className="text-yellow-300">{parts.slice(1).join(':')}</span>
        </span>
      );
    }
    
    if (text.startsWith('//')) {
      return <span className="text-gray-500 italic">{text}</span>;
    }
    
    if (text.includes("'")) {
      return (
        <span className="text-yellow-300">
          {text.split("'").map((part, i) => 
            i % 2 === 0 ? 
              <span key={i} className="text-gray-300">{part}</span> : 
              <span key={i} className="text-yellow-300">'{part}'</span>
          )}
        </span>
      );
    }
    
    return <span className={getLineStyle(index)}>{text}</span>;
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-gray-900/95 backdrop-blur-md rounded-2xl border border-gray-700/50 shadow-2xl overflow-hidden">
        {/* Terminal Header */}
        <div className="bg-gray-800/90 px-4 py-3 flex items-center gap-2 border-b border-gray-700/50">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 text-center">
            <span className="text-gray-400 text-sm font-mono">about-me.js</span>
          </div>
          <div className="text-xs text-gray-500 font-mono">
            {isLooping ? "? Looping..." : "? Live"}
          </div>
        </div>

        {/* Code Content */}
        <div className="p-6 min-h-[400px] font-mono text-sm leading-relaxed">
          <div className="flex">
            {/* Line numbers */}
            <div className="text-gray-600 text-right pr-4 select-none min-w-[3rem]">
              {displayedText.split('\n').map((_, index) => (
                <div key={index} className="h-6">
                  {String(index + 1).padStart(2, '0')}
                </div>
              ))}
            </div>

            {/* Code content */}
            <div className="flex-1">
              {displayedText.split('\n').map((line, index) => (
                <div key={index} className="h-6 flex items-center">
                  {line.length > 0 ? renderLine(line, index) : <span>&nbsp;</span>}
                  {index === displayedText.split('\n').length - 1 && showCursor && (
                    <span className="text-white bg-white/80 ml-1 animate-pulse">|</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer with typing status */}
        <div className="bg-gray-800/90 px-4 py-2 flex justify-between items-center text-xs text-gray-500 border-t border-gray-700/50">
          <div className="flex items-center gap-4">
            <span>JavaScript</span>
            <span>UTF-8</span>
            <span>LF</span>
          </div>
          <div className="flex items-center gap-2">
            {isTyping && currentLineIndex < codeLines.length ? (
              <>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Typing... Line {currentLineIndex + 1}</span>
              </>
            ) : (
              <>
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Animation Complete</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeTypingAnimation;