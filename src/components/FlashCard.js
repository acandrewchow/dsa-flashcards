import React, { useState, useEffect } from "react";

const Flashcard = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Reset isFlipped when the card changes to show question
  useEffect(() => {
    setIsFlipped(false);
  }, [card]);

  return (
    <div
      className="flex justify-center items-center w-96 h-96 bg-white dark:bg-zinc-900 rounded-lg shadow-lg relative cursor-pointer"
      onClick={handleFlip}
    >
      <div
        className={`flex justify-center items-center w-full h-full bg-gray-200 dark:bg-zinc-800 rounded-lg transform transition-transform duration-300 ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute text-xl text-center px-4">
          {!isFlipped ? (
            <div className="text-white">{card.question}</div>
          ) : (
            <div className="text-white">{card.answer}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
