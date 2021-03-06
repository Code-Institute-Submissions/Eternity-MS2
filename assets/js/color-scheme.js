$(".dark-mode-switch").on('click', function () {
    if ($("body").hasClass("dark-mode")) {
        $("body").removeClass("dark-mode");
        $("#home").removeClass("home-dark");
        $("#divider-1").removeClass("divider-bg-1-dark");
        $("#divider-2").removeClass("divider-bg-2-dark");
        $(".card").removeClass("card-dark");
        $("#contact").removeClass("contact-section-dark");
        $(".modal-content").removeClass("dark-mode");
        $(".basket-data-light").removeClass("basket-data-dark");
        localStorage.removeItem("darkMode");
    } else {
        $("body").addClass("dark-mode");
        $("#home").addClass("home-dark");
        $("#divider-1").addClass("divider-bg-1-dark");
        $("#divider-2").addClass("divider-bg-2-dark");
        $(".card").addClass("card-dark");
        $("#contact").addClass("contact-section-dark");
        $(".modal-content").addClass("dark-mode");
        $(".basket-data-light").addClass("basket-data-dark");
        localStorage.setItem("darkMode", true);
    }
});

onload = function () {
    if (localStorage.getItem("darkMode")) {
        localStorage.getItem("darkMode");
        $("body").addClass("dark-mode");
        $("#home").addClass("home-dark");
        $("#divider-1").addClass("divider-bg-1-dark");
        $("#divider-2").addClass("divider-bg-2-dark");
        $(".card").addClass("card-dark");
        $("#contact").addClass("contact-section-dark");
        $(".modal-content").addClass("dark-mode");
        $(".modal-content").addClass("dark-mode");
        $(".basket-data-light").addClass("basket-data-dark");
        localStorage.setItem("darkMode", true);
    }
};