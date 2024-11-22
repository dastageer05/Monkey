import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

// Create a Context
const TextCtx = createContext();

// Provider Component
const TestProvider = ({ children }) => {
  const selectedText = useRef(""); // Use useRef for non-reactive storage
  const [paragraphs, setParagraphs] = useState(2); // Reactive state for paragraphs
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Reactive state for loading

  //remove before deployment
  const hasFetched = useRef(false);
  useEffect(() => {
    if (hasFetched.current) return; // Skip second fetch in Strict Mode
    hasFetched.current = true;

    const fetchData = async () => {
      setIsLoading(true); // Set loading to true
      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/loremipsum?paragraphs=${paragraphs}`,
          {
            method: "GET",
            headers: {
              "X-Api-Key": "poSYhVVspW8RVJNuDHQNZg==VqjaSPIQ1iUV5z1v",
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const result = await response.json();
        selectedText.current = result.text;
        console.log(selectedText.current); // Update ref value directly
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false); // Stop loading
      }
    };

    fetchData();
  }, []); // Refetch only when `paragraphs` changes

  return (
    <TextCtx.Provider value={{ selectedText, setParagraphs, error, isLoading }}>
      {children}
    </TextCtx.Provider>
  );
};

// Hook to use the context
const useTextContext = () => useContext(TextCtx);

export { TestProvider, useTextContext };
