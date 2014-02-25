$(document).ready(function() {


    /** 
     *  RAP NAME GENERATOR is a plug & play name generator.
     *  Insert two arrays and it will output several possible names including...
     *       "[user first initial] last name"
     *       "[user first name acronymized] last name"
     *       "title [user first name acronymized]"
     *       "title [user first name] last name"
     **/

    function Generator() {

        /* Name Arrays: Customize name to change possible output */
        this.last_names = ['God', 'the Killah', 'the Chef', 'Be Allah', 'Nazareth', 'Digital', 'Wise', 'Knight', 'Wrecka', 'the Genius', 'the Zoo Keeper', 'the Monk', 'the Scientist', 'the Disciple', 'the Darkman', 'Pellegrino', 'the Ill Figure', 'Rocks The World', 'the Baptist', 'Dirty Bastard'];
        this.first_names = ['Inspectah', 'Masta', 'Poppa', 'Five Foot', 'Ghostface', 'Old Dirty'];

    }

    /* Helper Functions - randomly pull from name arrays */
    Generator.prototype.lastSelection = function() {
        var random_last_num = Math.floor((Math.random() * 19));
        return this.last_names[random_last_num];
    }

    Generator.prototype.firstSelection = function() {
        var random_first_num = Math.floor((Math.random() * 5));
        return this.first_names[random_first_num];
    }


    /* Outputs */
    Generator.prototype.rapLastName = function(input) {
        return input + " " + this.lastSelection();
    }

    Generator.prototype.rapFirstName = function(input) {
        return this.firstSelection() + " " + input;
    }

    Generator.prototype.rapDotName = function(input) {
        return input.toUpperCase() + ". " + this.lastSelection();
    }

    Generator.prototype.rapInitialName = function(input) {
        return this.firstSelection() + " " + input + " " + this.lastSelection();
    }

    /* Input & Output Assigner */
    Generator.prototype.selectOutput = function(input) {
        var type_num = Math.floor((Math.random() * 4) + 1);

        var split_input = input.split("").join(".");
        var first_initial_input = input.match(/^[a-zA-z]/);

        switch (type_num) {
            case 1:
                $('.response').text(this.rapLastName(input));
                break;
            case 2:
                $('.response').text(this.rapFirstName(input));
                break;
            case 3:
                $('.response').text(this.rapDotName(split_input));
                break;
            default:
                $('.response').text(this.rapInitialName(first_initial_input));
        }
    }




    /* Input Verifier */
    Generator.prototype.verifyInput = function(input) {
        return input.match(/^[a-zA-z]/);
    }



    function Start(generator) {

        /* Interface */
        $('#enter').on('click', function() {
            var userInput = $('#user-input').val();

            if (generator.verifyInput(userInput)) {
                $('.error').hide();
                generator.selectOutput(userInput);
                $('.response').show();
            } else {
                $('.response').hide();
                $('.error').show();
            }

        });
    }


    var engine = new Generator;
    var start = new Start(engine);



});