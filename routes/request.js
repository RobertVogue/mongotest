const express = require('express');
const router = express.Router();
const hpSchema = require('../schemas/hp-schema')

router.get("/", async (req, res) => {
    try {
        const find = await hpSchema.find()
        res.json(find)
    } catch(e) {
        res.send("error message: " + e)
    }
})

router.get("/:id", async (req, res) => {
    try {
        const find = await hpSchema.findById(req.params.id);
        res.json(find)
    } catch(e){
        res.send("error message: " + e)
    }
})
module.exports = router
