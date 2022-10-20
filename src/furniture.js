import { dbConnect } from "./dbConnect.js";

export async function addNewFurniture(req, res) {
    const newFurniture = req.body
    const db = dbConnect()
    await db.collection("furniture").insertOne(newFurniture)
        .catch(err => {
            res.status(500).send(err)
            return
        })
    res.status(201).send({ message: 'New Furniture Added.' })
}

export async function getAllFurniture(req, res) {
    const db = dbConnect() //connecting to database
    const collection = await db.collection("furniture").find().toArray() //Getting all furniture form the database and turning it into an array
    res.send(collection)
}

export async function findFurnitureByModel(req, res) {
    const db = dbConnect()
    const collection = await db.collection("funriture").find().toArray()
    res.send(collection)
}