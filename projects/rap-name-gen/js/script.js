$(document).ready(function() {



    var rap_last_names = ['God', 'the Killah', 'the Chef', 'Be Allah', 'Nazareth', 'Digital', 'Wise', 'Knight', 'Wrecka', 'the Genius', 'the Zoo Keeper', 'the Monk', 'the Scientist', 'the Disciple', 'the Darkman', 'Pellegrino', 'the Ill Figure', 'Rocks The World', 'the Baptist', 'Dirty Bastard'];
    var first_names = ['Inspectah', 'Masta', 'Poppa', 'Five Foot', 'Ghostface', 'Old Dirty'];


    $('#enter').on('click', function() {

        var random_last_num = Math.floor((Math.random() * 19));
        var random_first_num = Math.floor((Math.random() * 5));
        var type_num = Math.floor((Math.random() * 4) + 1);

        var input = $('#user-input').val();
        var split_input = input.split("").join(".");
        var first_initial_input = input.match(/^[a-zA-z]/);

        var last_selection = rap_last_names[random_last_num];
        var first_selection = first_names[random_first_num];

        var rap_last_name = input + " " + last_selection;
        var rap_first_name = first_selection + " " + input;
        var rap_dot_name = split_input.toUpperCase() + ". " + last_selection;
        var rap_initial_name = first_selection + " " + first_initial_input + " " + last_selection;



        if (input.match(/^[a-zA-z]/)) {
            $('.error').hide();
            if (type_num === 1) {
                $('.response').text(rap_last_name);
            } else if (type_num === 2) {
                $('.response').text(rap_first_name);
            } else if (type_num === 3) {
                $('.response').text(rap_dot_name);
            } else {
                $('.response').text(rap_initial_name);
            }
            $('.response').show();
        } else {
            $('.response').hide();
            $('.error').show();
        }



    });




});