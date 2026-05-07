import express from "express";
import cors from "cors";
import "dotenv/config";
import characters from "./routes/characters.mjs";
import favourites from "./routes/favourites.mjs";

const PORT = process.env.PORT || 5050;
const app = express();
app.use(cors());
app.use(express.json());

//to be deleted
app.get("/api/test", (req, res) => {
    res.json({ message: "working, yay" });
});

app.use("/api/characters", characters); //characters.mjs
app.use("/api/favourites", favourites); //favourites.mjs
console.log("favourites route set up");
// start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });