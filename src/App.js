import React, { useState } from "react";
import "./styles.css";

const book = {
  javascript: [
    { name: "Eloquent JavaScript", rating: "4/5" },
    { name: "You Don't Know JS", rating: "3.5/5" }
  ],

  fiction: [
    {
      name: " The Lord of the Rings",
      rating: "4/5"
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      rating: "4.5/5"
    },
    {
      name: "The BFG",
      rating: "4.5/5"
    }
  ],
  business: [
    {
      name: "The 4-Hour Workweek",
      rating: "4/5"
    },
    {
      name: "Rich Dad, Poor Dad",
      rating: "4.5/5"
    },
    {
      name: "Think and Grow Rich",
      rating: "5/5"
    }
  ],
  Travel: [
    {
      name: "The Art of Travel",
      rating: "4.5/5"
    },
    {
      name: "The Alchemist",
      rating: "4.5/5"
    },
    {
      name: "Lands of Lost Borders: A Journey on the Silk Road",
      rating: "4/5"
    }
  ],
  Psychology: [
    {
      name: "The Person and the Situation: Perspectives of Social Psychology",
      rating: "4/5"
    },
    {
      name: "Thinking, Fast and Slow",
      rating: "4.5/5"
    },
    {
      name: "Blink: The Power of Thinking Without Thinking",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [genre, setGenre] = useState("Psychology");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 📚 goodbooks </h1>
      <p style={{ fontSize: "smaller" }}>
        Checkout my favorite books. Select a genre to get started
      </p>

      <div>
        {Object.keys(book).map((g) => (
          <button onClick={() => genreClickHandler(g)}>{g}</button>
        ))}
      </div>
      <hr />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {book[genre].map((book) => (
            <li key={book.name}>
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
