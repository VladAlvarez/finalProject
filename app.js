// array to store comments
// let commentSection = [
//     {
//         name: "Hello",
//         comment: "Hello World"
//     }
// ]

// add comment to array
// $("#submit").click( function () {
//     commentSection.push("poop");
// });

// Going through array and appending them to index.html
// for (let i = 0; i < commentSection.length; i++) {
//       $("#container").append('<div class="commentContainer">'
//         + '<div class="displayName">' + commentSection[i].name + "</div>"
//         + '<div class="comment">' + commentSection[i].comment + "</div>"
//         + '</div>');
//   };


// add comment function
$("#submit").click(function () {
        const comment = document.getElementById("commentWriter").value
        const displayName = document.getElementById("displayNameWriter").value
        const containerChildrenCount = document.getElementById("container").childElementCount;
        $("#container").append(
        `<div id="entry${containerChildrenCount}" class="entry">
            <span class="material-symbols-outlined">account_circle</span>
            <div id="displayName${containerChildrenCount}" class="displayName">${displayName}</div>
            <div id="comment${containerChildrenCount}" class="comment">${comment}</div>
            <div id="edit${containerChildrenCount}">edit</div>
            <div id="delete${containerChildrenCount}">delete</div>
            <div id="editCommentContainer${containerChildrenCount}" class="hidden">
                <input type="text" placeholder="${comment}">
                <div id="newSubmit${containerChildrenCount}">Submit</div>
            </div>
            </div>`
            );
        $(`#edit${containerChildrenCount}`).click(function () {
            $(`#editCommentContainer${containerChildrenCount}`).toggleClass("displayEdit");
        });
        $(`#delete${containerChildrenCount}`).click(function () {
            $(`#entry${containerChildrenCount}`).remove()
        });
});
