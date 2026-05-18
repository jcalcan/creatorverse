import { useNavigate } from "react-router-dom";
import "./ItemCard.css";

function ItemCard({ item }) {
  const navigate = useNavigate();

  return (
    <li className="itemCard">
      <div className="itemCard__image-container">
        <img className="itemCard-img" src={item.imageURL} alt={item.name} />
      </div>

      <div className="itemCard__content">
        <div className="itemCard-title-container">
          <h2
            className="itemCard-title"
            onClick={() => navigate(`/creator/${item.id}`)}
          >
            {item.name}
          </h2>

          <button
            className="itemCard-edit-btn"
            onClick={(e) => {
              e.stopPropagation(); // Prevent navigating to detail page
              navigate(`/edit-creator/${item.id}`);
            }}
            title="Edit Creator"
          >
            ✏️
          </button>
        </div>

        <p className="itemCard-description">{item.description}</p>
        {item.url && <p className="itemCard-source">{item.url}</p>}
      </div>
    </li>
  );
}

export default ItemCard;
