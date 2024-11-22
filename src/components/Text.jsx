import React, { useState, useRef, useCallback, useEffect } from "react";
import { useTextContext } from "../context/TextContext";

const Text = () => {
  const [userInput, setUserInput] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [lineLength, setLineLength] = useState(0); // Characters per line dynamically calculated
  const { selectedText } = useTextContext();

  const inputRef = useRef(null);
  const containerRef = useRef(null);

  const text = selectedText.current;
  const textArray = text.split("");
  const maxVisibleLines = 4;

  // Dynamically calculate the number of characters per line based on parent width
  useEffect(() => {
    const calculateLineLength = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const charWidth = 10; // Approximate average character width in pixels for the font used
        const calculatedLineLength = Math.floor(containerWidth / charWidth);
        setLineLength(calculatedLineLength > 0 ? calculatedLineLength : 1); // Ensure at least one character fits
      }
    };

    calculateLineLength();
    window.addEventListener("resize", calculateLineLength);
    return () => window.removeEventListener("resize", calculateLineLength);
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value.trimStart(); // Ignore leading spaces
    const lastChar = value[value.length - 1];

    if (value.length < userInput.length) {
      // Handle backspace
      setCurrentCharIndex((prev) => Math.max(prev - 1, 0));
      setUserInput(value);
      return;
    }

    if (lastChar === text[currentCharIndex]) {
      // Correct character
      setUserInput(value);
    } else {
      // Typing incorrect character
      setUserInput(userInput + lastChar); // Keep the previous input state
    }
    setCurrentCharIndex((prev) => Math.min(prev + 1, textArray.length));
  };

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const getSpanClass = useCallback(
    (index) => {
      if (index < userInput.length) {
        return userInput[index] === textArray[index]
          ? "text-white" // Correct
          : "text-red-500"; // Incorrect
      }
      return "text-orange-400"; // Untyped characters
    },
    [userInput, textArray]
  );

  // Calculate visible text based on current index and line length
  const calculateVisibleText = () => {
    const totalCharsVisible = lineLength * maxVisibleLines;
    const startIndex = Math.max(
      0,
      currentCharIndex - totalCharsVisible + lineLength
    );
    const visibleText = textArray.slice(
      startIndex,
      startIndex + totalCharsVisible
    );
    return visibleText;
  };

  const visibleText = calculateVisibleText();

  return (
    <div
      ref={containerRef}
      onClick={handleFocus}
      className="cursor-text select-none font-mono text-2xl h-auto overflow-hidden"
    >
      {lineLength > 0 && visibleText.length > 0 ? (
        <div className="relative">
          {Array.from({ length: maxVisibleLines }, (_, lineIndex) => {
            const lineStartIndex = lineIndex * lineLength;
            const lineEndIndex = lineStartIndex + lineLength;
            const line = visibleText.slice(lineStartIndex, lineEndIndex);

            return (
              <div key={lineIndex}>
                {line.map((char, charIndex) => {
                  const actualIndex = lineStartIndex + charIndex;
                  return (
                    <span
                      key={actualIndex}
                      className={`relative ${getSpanClass(actualIndex)} ${
                        actualIndex === currentCharIndex ? "cursor-effect" : ""
                      }`}
                    >
                      {char}
                      {actualIndex === currentCharIndex && (
                        <span className="absolute top-0 left-0 w-full h-full text-transparent cursor-blink">
                          _
                        </span>
                      )}
                    </span>
                  );
                })}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-gray-500">Loading...</div>
      )}
      <input
        ref={inputRef}
        type="text"
        value={userInput}
        onChange={handleInputChange}
        style={{ position: "absolute", top: "-9999px" }}
        autoFocus
      />
    </div>
  );
};

export default Text;
