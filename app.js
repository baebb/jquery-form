$(function () {
    var form = $("#contact");
    var messages = $("#form-messages");
    var msgs = $(".msgs");

    //submit form
    $(form).submit(function (e) {
        msgs.empty();
        msgs.append("<li>Form submitted</li>");
        e.preventDefault();

        var formData = $(form).serializeArray();
        console.log(formData);
    })

    //form validation error messages
    $("button[type=submit]").on("click", showErrs);

    function showErrs() {
        msgs.empty();
        if (form.find(":invalid").length) {
            var errs = form.find(":invalid");

            for (var i = 0; i < errs.length; i++) {
                var errName = errs[i].name;
                msgs.append("<li>" + errName + " is fucked</li>")
            }
        }
    }

    //phone number input
    var phone = $("#phone");

    $(phone).keyup(function () {
        var value = $(phone).val();

        var clean = value.match(/\d/g).join("");

        if (clean.length <= 3) {
            $(this).val("(" + clean);
        }

        if (clean.length > 3 && clean.length <= 6) {
            $(this).val("(" + clean.substr(0, 3) + ") " + clean.substr(3, 6));
        }

        if (clean.length > 6) {
            $(this).val("(" + clean.substring(0, 3) + ") " + clean.substring(3, 6) + "-" + clean.substring(6, 10))
        }
    })



})