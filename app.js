// add entry
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
                <input type="text" id="newInput${containerChildrenCount}" placeholder="${comment}">
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
        $(`#newSubmit${containerChildrenCount}`).click(function () {
            const newComment = document.getElementById(`newInput${containerChildrenCount}`).value
            $(`#comment${containerChildrenCount}`).text(newComment)
            $(`#editCommentContainer${containerChildrenCount}`).toggleClass("displayEdit");
        });
});
