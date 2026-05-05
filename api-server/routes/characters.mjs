import express from "express";

const router = express.Router();
router.get("/search", (req, res) => {
    try{
        const query = req.query.query;
        if(!query){
            return res.status(400).json({ error: "Search query is required" });
        }
        const url=`${process.env.API_BASE_URL}/characters/?api_key=${process.env.API_KEY}`+
        `&format=json&filter=name:${query}&limit=12`;
        const response = await fetch(url);
        const data = await response.json();

        
    } 
    catch(error){
        res.status(500).json({ error: "An error occurred while fetching character data" });
    }
}