// add entry
$("#submit").click(function () {
        const comment = document.getElementById("commentWriter").value
        const displayName = document.getElementById("displayNameWriter").value
        const containerChildrenCount = document.getElementById("container").childElementCount;
        $("#container").append(
        `<div id="entry${containerChildrenCount}" class="entry">
            <span class="material-symbols-outlined" >account_circle</span>
            <div class="fullContainer">
                <div class="topContainer">
                    <div id="displayName${containerChildrenCount}" class="displayName">${displayName}</div>
                    <div class="editDelete">
                        <div id="edit${containerChildrenCount}" class="edit">edit</div>
                        <div id="delete${containerChildrenCount}" class="delete">delete</div>
                    </div>
                </div>
                <div id="comment${containerChildrenCount}" class="comment">${comment}</div>
                <div id="editCommentContainer${containerChildrenCount}" class="hidden">
                    <input type="text" id="newInput${containerChildrenCount}" class="newInput" value="${comment}">
                    <div id="newSubmit${containerChildrenCount}" class="newSubmit">Submit</div>
                </div>
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
