import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();
//Get all faves
router.get("/", async (req, res) => {
    const collection = db.collection("favourites");
    const results = await collection.find({}).toArray();
    res.send(results);
});
//add fave
router.post("/", async (req, res) => {
    const collection = await db.collection("favourites");
    const newFave = req.body;
    newFave.note = newFave.note || "";
    newFave.dateAdded = new Date();
    const result = await collection.insertOne(newFave);
    res.send(result);
});
//update note
router.patch("/note/:id", async (req, res) => {
    const collection = await db.collection("favourites");
    const query = { _id: new ObjectId(req.params.id) };
    const update = { $set: { note: req.body.note } };
    const result = await collection.updateOne(query, update);
    res.send(result);
});
//delete fave
router.delete("/:id", async (req, res) => {
    const collection = await db.collection("favourites");
    const query = { _id: new ObjectId(req.params.id) };
    const result = await collection.deleteOne(query);
    res.send(result);
});
export default router;