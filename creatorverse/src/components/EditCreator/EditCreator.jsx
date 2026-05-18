import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { creatorApi } from "../../utils/CreatorsAPI";

import "./EditCreator.css";

function EditCreator() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    imageURL: "",
    description: "",
    url: ""
  });

  const [loading, setLoading] = useState(true);

  // Fetch existing data
  useEffect(() => {
    const fetchCreator = async () => {
      try {
        const response = await creatorApi.getCreatorById(id);
        const creator = response.data || response;

        setFormData({
          name: creator.name || "",
          imageURL: creator.imageURL || "",
          description: creator.description || "",
          url: creator.url || ""
        });
      } catch (err) {
        console.error("Failed to load creator:", err);
        alert("Failed to load creator data");
      } finally {
        setLoading(false);
      }
    };

    fetchCreator();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await creatorApi.updateCreator(id, formData);
      alert("Creator updated successfully!");
      navigate(`/creator/${id}`);
    } catch (err) {
      console.error(err);
      alert("Failed to update creator");
    }
  };

  if (loading) return <p>Loading form...</p>;

  return (
    <div className="edit-creator-page">
      <h1>Edit Creator</h1>

      <form onSubmit={handleSubmit} className="creator-form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Image</label>
          <p className="field-hint">
            Provide a link to an image of your creator. Be sure to include the
            http://
          </p>
          <input
            type="url"
            name="imageURL"
            value={formData.imageURL}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <p className="field-hint">
            Provide a description of the creator. Who are they? What makes them
            interesting?
          </p>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="6"
            required
          />
        </div>

        <div className="form-group">
          <label>SOCIAL MEDIA LINKS</label>
          <p className="field-hint">
            Provide at least one of the creator's social media links.
          </p>

          <div className="social-input">
            <div className="social-label">
              <span>▶️</span> YouTube
            </div>
            <input
              type="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              placeholder="https://youtube.com/@username"
            />
            <small>The creator's YouTube handle (without the @)</small>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="save-btn">
            Save Changes
          </button>
          <button
            type="button"
            className="cancel-btn"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditCreator;
