import { useNavigate } from "react-router-dom";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";

function Main({ creatorData, loading, error }) {
  const navigate = useNavigate();

  if (loading) {
    return <p className="loading">Loading creators...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <main className="main">
      <section className="creator-cards" id="creatorCards">
        <div className="creator-cards__header">
          <h2 className="creator-cards__heading">Creator Cards</h2>

          <button
            className="creator-cards__add-btn"
            onClick={() => navigate("/add-creator")}
          >
            + Add New Creator
          </button>
        </div>

        {creatorData && creatorData.length > 0 ? (
          <ul className="creator-cards__list">
            {creatorData.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </ul>
        ) : (
          <p className="no-creators">
            No creators found. Add some to get started!
          </p>
        )}
      </section>
    </main>
  );
}

export default Main;
