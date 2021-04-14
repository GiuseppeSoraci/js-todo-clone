/*
- Rifare la todo list come vista insieme a lezione: popolando gli elementi della lista con JavaScript inserendo un nuovo todo con un input testuale e gli eventi da tastiera
- Rimozione todo con click su icona
- Cliccando sul testo compare uno sbarramento a indicarne il completamento
*/
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
    var template = $(".template li")
});