import React, { useState, useEffect } from "react";
import Flashcard from "./FlashCard";

const FlashCardContainer = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    // Fetch flashcards data from JSON file
    const fetchFlashcards = async () => {
      const response = await fetch("/flashcards/cards.json");
      const data = await response.json();

      // Shuffle the flashcards before setting the state
      const shuffledCards = shuffleArray(data);
      setFlashcards(shuffledCards);
    };

    fetchFlashcards();
  }, []);

  const shuffleArray = (array) => {
    // Fisher-Yates shuffle algorithm (this is pretty cool lol)
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  };

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % flashcards.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      {flashcards.length > 0 ? (
        <>
          <Flashcard card={flashcards[currentCard]} />
          <div className="flex space-x-4 mt-6">
            <button
              onClick={prevCard}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
            >
              Prev
            </button>
            <button
              onClick={nextCard}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default FlashCardContainer;