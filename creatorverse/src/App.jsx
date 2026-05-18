import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Creators_API } from "./utils/CreatorsAPI";

import Header from "../src/components/Header/Header";
import Main from "../src/components/Main/Main";
import CreatorDetail from "../src/components/CreatorDetail/CreatorDetail.jsx";
import AddCreator from "../src/components/AddCreator/AddCreator.jsx";
import EditCreator from "../src/components/EditCreator/EditCreator.jsx";

import "./App.css";

const creatorApi = new Creators_API();

function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCreatorCards = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await creatorApi.getCreatorCards();
      console.log("Creator Cards Loaded:", response);

      setCards(response.data || response);
    } catch (err) {
      console.error("Failed to fetch creators:", err);
      setError("Failed to load creator cards");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section id="hero">
        <Header onViewAllCreators={fetchCreatorCards} />
      </section>
      <Routes>
        <Route
          path="/"
          element={<Main creatorData={cards} loading={loading} error={error} />}
        />
        <Route path="/creator/:id" element={<CreatorDetail />} />
        <Route path="/add-creator" element={<AddCreator />} />
        <Route path="/edit-creator/:id" element={<EditCreator />} />
      </Routes>
    </>
  );
}

export default App;
