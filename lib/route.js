function set_route(element, url, func) {
    element.click(function () {
        if (func) func();
        var host = window.location.href.split('view')[0];
        window.location.href = host + "view/" + url
    })
}