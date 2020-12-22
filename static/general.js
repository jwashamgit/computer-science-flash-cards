$(document).ready(function(){
    if ($('.memorizePanel').length != 0) {

        $('.flipCard').click(function(){
            if ($('.cardFront').is(":visible") == true) {
                $('.cardFront').hide();
                $('.cardBack').show();
            } else {
                $('.cardFront').show();
                $('.cardBack').hide();
            }
        });
    }

    if ($('.cardForm').length != 0) {

        $('.cardForm').submit(function(){

            var frontTrim = $.trim($('#front').val());
            $('#front').val(frontTrim);
            var backTrim = $.trim($('#back').val());
            $('#back').val(backTrim);

            if (! $('#front').val() || ! $('#back').val()) {
                return false;
            }
        });
    }

    if ($('.editPanel').length != 0) {

        function checkit() {
            var checkedVal = $('input[name=type]:checked').val();
            if (checkedVal === undefined) {
                // hide the fields
                $('.fieldFront').hide();
                $('.fieldBack').hide();
                $('.saveButton').hide();
                $('.fieldTag').hide();
            } else {
                $('.toggleButton').removeClass('toggleSelected');
                $(this).addClass('toggleSelected');

                if (checkedVal == '1') {
                    $('textarea[name=back]').attr('rows', 5);
                } else {
                    $('textarea[name=back]').attr('rows', 12);
                }

                $('.fieldFront').show();
                $('.fieldBack').show();
                $('.saveButton').show();
                $('.fieldTag').show();
            }
        }

        $('.toggleButton').click(checkit);

        checkit();
    }

    if ($('.tagPanel').length != 0) {

        function checkit() {
            var checkedVal = $('input[name="tag[]"]:checked').val();
            if (checkedVal === undefined) {
                // hide the fields
                $('.fieldTagName').hide();
            } else {
                $('.toggleButton').removeClass('toggleSelected');
                $(this).addClass('toggleSelected');

                $('.fieldTagName').show();
            }
        }

        $('.toggleButton').click(checkit);

        checkit();
    }


    var md = window.markdownit();

    if ($('.answer').length != 0) {
        var content = $('.answer').text();
        $('.answer').html(
            md.render(content.trim())
        );
        console.log(content.trim());
        console.log(md.render(content));

    }

    // to remove the short delay on click on touch devices
    FastClick.attach(document.body);
});
