// jQuery - hamburger menu toggler

$(function () {
    $('.hamburger-toggle').on('click', function () {
        $('.toggle').toggleClass('open');
        $('.nav-list').toggleClass('open');
    });
});

//jQuery - closes nav when link is clicked

$(function () {
    $('.nav-link').on('click', function () {
        $('.toggle').toggleClass('open');
        $('.nav-list').toggleClass('open');
    });
});

// jQuery - toggle shopping cart modal when clicking cart icon

$(function () {
    $(".shopping-basket-icon").on("click", function () {
        $("#basketModal").modal("show");
    });
});

// jQuery - Allows user to select date and time for booking only on open days/hours and no previous date or time allowed

$('#datetimepicker1').datetimepicker({
    format: 'YYYY-MM-DD HH:mm',
    minDate: new Date(),
    sideBySide: true,
    daysOfWeekDisabled: [1, 2],
    stepping: 15,
    enabledHours: [16, 17, 18, 19, 20, 21, 22, 23]
});

// jQuery - Allows user to select expiration date for card in payment for but blacks previous dates

$(function () {
    $('#datetimepicker6').datetimepicker({
        format: 'MM-YY',
        minDate: new Date()
    });
});

//JQuery - Changes text on menu buttons when clicked for 5 seconds & greys out button

(function () {
    $(".menu-btn").on("click", function () {
        var $this = $(this),
            oldText = $this.text();
        $this.text("Item Added");
        $this.attr("disabled", "disabled");
        setTimeout(function () {
            $this.text(oldText);
            $this.removeAttr("disabled");
        }, 5000);
    });
})();

// used to initilize animate on scroll library

AOS.init({
    easing:'ease',
    duration: 2000,
});

