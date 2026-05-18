import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { creatorApi } from "../../utils/CreatorsAPI.js";

function CreatorDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCreator = async () => {
      try {
        const response = await creatorAPI.getCreatorById(id);
        setCreator(response.data || response);
      } catch (err) {
        setError("Failed to load creator");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCreator();
  }, [id]);

  if (loading) return <h2>Loading creator...</h2>;
  if (error) return <h2> {error} </h2>;
  if (!creator) return <h2>Creator not found</h2>;

  return (
    <div className="cretor-detail">
      <button onClick={() => navigate(-1)} className="back-btn">
        Back
      </button>

      {creator.imageURL && (
        <img
          src={creator.imageURL}
          alt={creator.name}
          className="detail-image"
        />
      )}
      <h1>{creator.name}</h1>
      <p>
        <strong>Description:</strong>
        {creator.description}
      </p>

      {creator.url && (
        <a href={creator.url} target="_blank" rel="noopener noreferrer">
          Visit Profile
        </a>
      )}
      <div className="detail-actions">
        <button onClick={() => navigate(`/edit-creator/${id}`)}>
          Edit Creator
        </button>
        <button
          onClick={() => {
            if (window.confirm("Delete this creator?")) {
              creatorAPI.deleteCreator(id).then(() => navigate("/"));
            }
          }}
          style={{ backgroundColor: "red", color: "white" }}
        >
          Delete Creator
        </button>
      </div>
    </div>
  );
}

export default CreatorDetail;
