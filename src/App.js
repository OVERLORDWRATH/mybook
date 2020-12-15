import React, { useState } from "react";
import "./styles.css";

const book = {
  Action: [
    { name: "Naruto", rating: "4/5" },
    { name: "My Hero Academia", rating: "5/5" },
    { name: "One Punch Man", rating: "5/5" }
  ],

  Comedy: [
    {
      name: " Gintama",
      rating: "5/5"
    },
    {
      name: "Konusuba",
      rating: "4.5/5"
    },
    {
      name: "The Devil as a Part-Timer",
      rating: "4.5/5"
    }
  ],
  Magic: [
    {
      name: "Little Witch Academia",
      rating: "4/5"
    },
    {
      name: "Overlord",
      rating: "4.5/5"
    },
    {
      name: "Akashic Records of Bastard Magic Instructor",
      rating: "5/5"
    }
  ],
  mystery: [
    {
      name: "Hyouka",
      rating: "4.5/5"
    },
    {
      name: "Terror in Resonance",
      rating: "5/5"
    },
    {
      name: "Death Note",
      rating: "4/5"
    }
  ],
  Psychic: [
    {
      name: "Mob Psycho 100",
      rating: "4/5"
    },
    {
      name: "Erased",
      rating: "4.5/5"
    },
    {
      name: "Hinamatsuri",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [genre, setGenre] = useState("Action");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 📚 My Anime List </h1>
      <p style={{ fontSize: "smaller" }}>
        Checkout my favorite anime. Select a genre to get started
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
