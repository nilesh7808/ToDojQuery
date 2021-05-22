// Completed todo
// $('li').click(function() {
//     $(this).toggleClass('completed')
// });

// Removing Todo
// $('span').click(function() {
//     $(this).parent().remove();
// })


$('ul').on('click', 'li', function() {
    // alert("Clicked on Li");
    $(this).toggleClass('completed');
})


// Removing tofo function
$('ul').on('click', 'span', function(event) {
    // alert("Clicked on Span.");

    $(this).parent().fadeOut(800, function() {
        $(this).remove();
    })

    event.stopPropagation(); //to stop event bubbling

})

//add todo
$('input[type = "text"]').keypress(function(e) {
    if (e.which === 13) {
        // console.log("You hit the enter");
        const todoText = $(this).val();
        console.log(todoText);
        $(this).val("");
        const todo = `<li> <span><i class="fas fa-trash"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span> ${todoText} &nbsp;&nbsp;&nbsp; </li>`;
        $('ul').append(todo);
    }

})

// for toggling input

$('#plus').click(function() {
    $('input[type="text"]').fadeToggle(600);
})