// array to store comments
let commentSection = [
    {
        name: "Hello",
        comment: "Hello World"
    }
]

// add comment to array
$("#submit").click( function () {
    commentSection.push("poop");
});

// Going through array and appending them to index.html
for (let i = 0; i < commentSection.length; i++) {
      $("#container").append('<div class="commentContainer">'
        + '<div class="displayName">' + commentSection[i].name + "</div>"
        + '<div class="comment">' + commentSection[i].comment + "</div>"
        + '</div>');
  };


