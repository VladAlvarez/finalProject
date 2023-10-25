// add comment function
    $("#submit").click(function () {
        for (let i = 0; i < 1; i++) {
            var comment = document.getElementById("comment").value
            $("#commentContainer").append(
            `<div id="comment">${comment}</div>`
            );
        };
    });



