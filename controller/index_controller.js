function set_url() {

    var before_help_function = function () {
        alert('will go to help')
    };

    set_route($("#help_button"), 'help.html', before_help_function);
    set_route($('#back_button'), 'back.html')
}


$(window).ready(function () {
    set_url()
});