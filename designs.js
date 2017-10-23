const default_heigth = 10,
    default_width = 10,
    submit_button = $('#submit-button'),
    input_height = $('#input-height'),
    input_width = $('#input-width'),
    input_color = $('#color-picker'),
    input_show_grid = $('#show-grid-borders'),
    grid = $('#pixel-canvas'),
    options_form = $('#options-form');

let grid_height = input_height.val(),
    grid_width = input_width.val(),
    painting_color = input_color.val();

function makeGrid(height, width) {  //Adds new grid to the page
    grid.children().remove();   //Removes all of the old grid's rows (and implicitly all of the cells too)

    for(let i = 0; i < height; i++) {   //Adding rows according to the specified height
        grid.append('<tr class="grid-row"></tr>');
        let row = $('.grid-row').last();    //Selecting the last added row, to start appending cells to it
        for(let j = 0; j < width; j++) {    //Adding cells according to the specified width
            row.append('<td class="grid-cell"></td>');
        }
    }
}

options_form.submit(function ( event ) {
    event.preventDefault();
    makeGrid(input_height.val(), input_width.val());
});

input_height.on('change', function () {
    grid_height = $(this).val();
});
input_width.on('change', function () {
    grid_width = $(this).val();
});
input_color.on('change', function () {
    painting_color = $(this).val();
});
input_show_grid.on('change', function () {
    $('.grid-cell').toggleClass('no-border');
});

grid.on('click', 'td', function ( event ) {
    $(event.target).css('background-color', painting_color);
});


$(makeGrid(default_heigth, default_width));
