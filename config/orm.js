var connection = require("../config/connection.js");

var orm = {
    selectAll: function (tableInput, callback) {
        var query= "SELECT * FROM " + tableInput + ";";
        connection.query(query, function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },

    insertOne: function (table, cols, vals, callback) {
        var query= "INSERT INTO "+table+" ("+ cols +") VALUES (?)";
        connection.query(query,  vals, function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },

    updateOne: function (table, updateColVal, updateValue, id, callback) {
        var query= "UPDATE " + table +  " SET "+ updateColVal + " = ? WHERE id = ?";
        connection.query(query, [updateValue, id], function(err, result) {
            if (err) throw err;
            callback(result);
        });
    },

    deleteone: function (tableInput,id , callback) {
        var query= "delete from " + tableInput + " where id = ?";
        connection.query(query, id , function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },
};

module.exports = orm;