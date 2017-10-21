const default_heigth = 10,
      default_width = 10;

let submit_button = $('#submit_button'),
    input_height = $('#input_height'),
    input_width = $('#input_width'),
    input_color = $('#color_picker'),
    grid = $('#pixel_canvas');

let grid_height = input_height.val(),
    grid_width = input_width.val(),
    painting_color = input_color.val();

function makeGrid(height, width) {
    grid.children().remove();

    for(let i = 0; i < height; i++) {
        grid.append('<tr class="grid_row"></tr>');
        let row = $('.grid_row').last();
        for(let j = 0; j < width; j++) {
            row.append('<td clas="grid_cell"></td>');
        }
    }
}

$(makeGrid(default_heigth, default_width));

submit_button.click(function ( event ) {
    event.preventDefault();
    makeGrid(grid_height, grid_width)
});

input_height.on('change', function () { grid_height = $(this).val(); });
input_width.on('change', function () { grid_width = $(this).val(); });
input_color.on('change', function () { painting_color = $(this).val(); });


grid.on('click', 'td', function ( event ) { $(event.target).css('background-color', painting_color); });
