import { supabase } from "../utils/supabase.js";

const getCreatorCards = async (req, res, next) => {
  try {
    const { data, error } = await supabase.from("creators").select("*");

    if (error) {
      console.error("Supabase error:", error);
      throw error;
    }

    return res.status(200).send({
      data: data,
      message: "Creator cards fetched successfully"
    });
  } catch (err) {
    console.error("Error fetching creators:", err);
    return next(err);
  }
};

const getCreatorById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { data, error } = await supabase
      .from("creators")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;
    if (!data) return res.status(404).json({ message: "Creator not found" });

    return res.status(200).json({
      data: data,
      message: "Creator fetched successfully"
    });
  } catch (err) {
    console.error(err);
    return next(err);
  }
};

const addCreator = async (req, res, next) => {
  try {
    console.log("📦 Received body:", req.body);

    // Explicitly exclude 'id' to prevent duplicate key errors
    const { name, url, description, imageURL } = req.body;

    if (!name || !description) {
      return res.status(400).json({
        message: "Name and description are required"
      });
    }

    const { data, error } = await supabase
      .from("creators")
      .insert([
        {
          name,
          url,
          description,
          imageURL
        }
      ])
      .select()
      .single();

    if (error) throw error;

    console.log("✅ Creator inserted successfully:", data);

    return res.status(201).json({
      data,
      message: "Creator added successfully"
    });
  } catch (err) {
    console.error("❌ Add Creator Error:", err);
    return res.status(500).json({
      message: err.message
    });
  }
};

const updateCreator = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, url, description, imageURL } = req.body;

    const { data, error } = await supabase
      .from("creators")
      .update({ name, url, description, imageURL })
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    if (!data) return res.status(404).json({ message: "Creator not found" });

    return res.status(200).json({
      data: data,
      message: "Creator updated successfully"
    });
  } catch (err) {
    console.error(err);
    return next(err);
  }
};

const deleteCreator = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { error } = await supabase.from("creators").delete().eq("id", id);

    if (error) throw error;

    return res.status(200).json({
      message: "Creator deleted successfully"
    });
  } catch (err) {
    console.error(err);
    return next(err);
  }
};

export {
  getCreatorCards,
  getCreatorById,
  addCreator,
  updateCreator,
  deleteCreator
};
