
var express = require("express");
var router = express.Router();
// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var insert = {
            burgers: data
        };
        res.render("index", insert);
    });
});

router.post("/api/burgers", function (req, res) { 
    burger.insertOne(req.body.name, function (results) {
          // Send back the ID of the new quote
        res.json({ id: results.insertId })
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var id = req.params.id;
    burger.updateOne("devoured", true, id, function (results) {
        res.json(results);
    });
});

module.exports = router;