  
$(document).ready(function () {
    $(".You_ate_it").on("click", function (event) {
        event.preventDefault();
        // this match into index.hand
        var id = $(this).attr("id");
        // console.log(id);
        $.ajax({url: "/api/burgers/" + id, method: "PUT"})
            
        .then(function (data) {
            console.log(data);
            location.reload();
        });
    });

    $(".order_again").on("click", function (event) {
        event.preventDefault();
        // this match into index.hand
        var id = $(this).attr("id");
        // console.log(id);
        $.ajax({url: "/api/burgers/reorder/" + id, method: "PUT"})
            
        .then(function (data) {
            console.log(data);
            location.reload();
        });
    });

    $(".its_been_ate").on("click", function (event) {
        event.preventDefault();
        // this match into index.hand
        var id = $(this).attr("id");
        // console.log(id);
        $.ajax({url: "/api/burgers/" + id, method: "DELETE"})
            
        .then(function (data) {
            console.log(data);
            location.reload();
        });
    });

    $(".add-burger").on("click", function (event) {
        event.preventDefault();

        var newBurger = {
            name: $("#burgerName").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("Added a New Burger");
            location.reload();
        })
    })
});