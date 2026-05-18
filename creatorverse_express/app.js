import express from "express";
import cors from "cors";
import creatorCardsRoute from "./routes/CreatorCards.js";

const app = express();
const PORT = process.env.PORT || 3003;
app.use(
  cors({
    origin: "http://localhost:3000", //use the frontend port
    credentials: true
  })
);
app.use("/api", creatorCardsRoute);

app.get("/", (req, res) => {
  res.send("Creatorverse API is running...");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on hhtp://localhost: ${PORT}`);
});
