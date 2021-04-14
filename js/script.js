$(document).ready(function () {

    // Data
    var items = [
        {
            text: "morning lesson",
            completed: "true",
        },
        {
            text: "afternoon coding",
            completed: "false",
        },
        {
            text: "physical exercise",
            completed: "true",
        },
        {
            text: "evening reading",
            completed: "false",
        }

    ];

    // Refs
    var list = $(".elements");
    var input = $(".add");
    var template = $(".template li");

    // List
    for (var i = 0; i < items.length; i++) {
        var todo = items[i];

        // Template
        var item = template.clone();
        item.find(".text").text(todo.text);

        // Add
        list.append(item);
    }

    // Add element
    input.keyup(function (e) {

        if (e.which === 13) {
            var text = input.val().trim();

            if (text !== "") {

                // Template
                var item = template.clone();
                item.find(".text").text(text);

                // Add
                list.append(item);

                // Reset
                input.val("");
            }
        }
    });

    // Remove element
    $("body").on("click", ".elements li i", function () {
        $(this).parent().remove();
    });

    // Completed
    $("body").on("click", ".elements li span", function () {
        $(this).toggleClass("completed");
    });
});