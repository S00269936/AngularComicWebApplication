import express from "express";
const router = express.Router();
router.get("/search", async (req, res) => {
  try {
    const query = req.query.query;
    if (!query) {
      return res.status(400).json({ error: "Search query is required" });
    }
    const url =
      `${process.env.API_BASE_URL}/characters/?api_key=${process.env.API_KEY}` +
      `&format=json&filter=name:${encodeURIComponent(query)}&limit=12`;
    const response = await fetch(url);
    const data = await response.json();

    res.json({
      results: data.results.map((character) => ({
        id: character.id,
        name: character.name,
        real_name: character.real_name,
        aliases: character.aliases,
        image: character.image?.medium_url || null,
        deck: character.deck,
        publisher: character.publisher?.name || null
      })),
      number_of_total_results: data.number_of_total_results,
      status_code: data.status_code,
      error: data.error
    });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching character data" });
  }
});

export default router;