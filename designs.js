const default_heigth = 10,
    default_width = 10,
    submit_button = $('#submit-button'),
    input_height = $('#input-height'),
    input_width = $('#input-width'),
    input_color = $('#color-picker'),
    input_show_grid = $('#show-grid-borders'),
    grid = $('#pixel-canvas');

let grid_height = input_height.val(),
    grid_width = input_width.val(),
    painting_color = input_color.val();

function makeGrid(height, width) {
    grid.children().remove();

    for(let i = 0; i < height; i++) {
        grid.append('<tr class="grid-row"></tr>');
        let row = $('.grid-row').last();
        for(let j = 0; j < width; j++) {
            row.append('<td class="grid-cell"></td>');
        }
    }
}

submit_button.click(function ( event ) {
    event.preventDefault();
    makeGrid(grid_height, grid_width)
});

input_height.on('change', function () { grid_height = $(this).val(); });
input_width.on('change', function () { grid_width = $(this).val(); });
input_color.on('change', function () { painting_color = $(this).val(); });
input_show_grid.on('change', function () { $('.grid-cell').toggleClass('no-border'); });

grid.on('click', 'td', function ( event ) { $(event.target).css('background-color', painting_color); });


$(makeGrid(default_heigth, default_width));
