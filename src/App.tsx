import React from "react";
import { AnimeList } from "./pages/AnimeList";
import { Route, Routes } from "react-router";
import { AnimeDetails } from "./pages/AnimeDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AnimeList />} />
        <Route path="/anime/:id" element={<AnimeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
