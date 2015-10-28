function set_url() {
    set_route($("#help_button"), 'help.html', before_help_function);
    set_route($('#back_button'), 'back.html')
}

function before_help_function() {
    alert('will go to help')
}

$(window).ready(function () {
    set_url()
});