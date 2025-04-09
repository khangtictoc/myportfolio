import { useState, useEffect, useRef } from "react";

const Terminal = ({
  command = "sudo apt install everything-in-the-world",
  typingSpeed = 5,
  deletingSpeed = 5,
  initialDelay = 1000,
  pauseBeforeDelete = 1500,
  pauseBeforeType = 800,
  className = "",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isPowerOn, setIsPowerOn] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPausing, setIsPausing] = useState(false);
  const terminalRef = useRef(null);

  // Power-on effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPowerOn(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Typing/deleting animation effect
  useEffect(() => {
    if (!isPowerOn) return;

    if (isTyping) {
      if (displayedText.length < command.length) {
        const typingTimeout = setTimeout(() => {
          setDisplayedText(command.substring(0, displayedText.length + 1));
        }, typingSpeed);

        return () => clearTimeout(typingTimeout);
      } else {
        setIsTyping(false);
        setIsPausing(true);

        const pauseTimeout = setTimeout(() => {
          setIsPausing(false);
          setIsDeleting(true);
        }, pauseBeforeDelete);

        return () => clearTimeout(pauseTimeout);
      }
    } else if (isDeleting) {
      if (displayedText.length > 0) {
        const deletingTimeout = setTimeout(() => {
          setDisplayedText(
            displayedText.substring(0, displayedText.length - 1)
          );
        }, deletingSpeed);

        return () => clearTimeout(deletingTimeout);
      } else {
        setIsDeleting(false);
        setIsPausing(true);

        const pauseTimeout = setTimeout(() => {
          setIsPausing(false);
          setIsTyping(true);
        }, pauseBeforeType);

        return () => clearTimeout(pauseTimeout);
      }
    }
  }, [
    isPowerOn,
    isTyping,
    isDeleting,
    isPausing,
    displayedText,
    command,
    typingSpeed,
    deletingSpeed,
    pauseBeforeDelete,
    pauseBeforeType,
  ]);

  // Auto-scroll to bottom of terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [displayedText]);

  return (
    <div
      className={`terminal-container ${
        isPowerOn ? "power-on" : ""
      } ${className}`}
    >
      <div className="terminal-header bg-dark-light/80 px-4 py-2 flex items-center justify-between rounded-t-lg">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-xs opacity-80">~/user</div>
      </div>

      <div
        ref={terminalRef}
        className="terminal-content bg-dark/90 p-4 rounded-b-lg font-mono text-sm md:text-base text-green-400 max-h-[80px] overflow-hidden"
      >
        <div className="terminal-line flex">
          <span className="text-green-600 mr-2">$</span>
          <span>{displayedText}</span>
          <span className="cursor-static">▌</span>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
