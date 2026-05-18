import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { creatorApi } from "../../utils/CreatorsAPI.js";

function AddCreator() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await creatorApi.addCreator(formData);
      alert("Creator added successfully!");
      navigate("/");
    } catch (err) {
      alert("Failed to add creator");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-creator">
      <h1>Add New Creator</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Creator Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="url"
          placeholder="Profile URL"
          value={formData.url}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          name="imageURL"
          placeholder="Image URL (optional)"
          value={formData.imageURL}
          onChange={handleChange}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Creator"}
        </button>
      </form>
    </div>
  );
}

export default AddCreator;
