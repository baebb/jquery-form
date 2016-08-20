$(function() {
    var form = $("#contact");
    var messages = $("#form-messages");

    //submit form
    $(form).submit(function(e) {
        e.preventDefault();

        var formData = $(form).serializeArray();

        console.log(formData);

    })

    var phone = $("#phone");

    //
    $(phone).keyup(function() {
        var value = $(phone).val();

        // console.log(value);
        var clean = value.match(/\d/g).join("");
        //console.log(clean);

        if (clean.length <= 3) {
            $(this).val("(" + clean);
        }

        if (clean.length > 3 && clean.length <= 6) {
            $(this).val("(" + clean.substr(0,3) + ") " + clean.substr(3,6));
        }

        if (clean.length > 6) {
            $(this).val("(" + clean.substring(0,3) + ") " + clean.substring(3,6) + "-" + clean.substring(6,10))
        }
        console.log($(this).val());
    })

})