$(document).ready(function () {
    $('#form').submit(function (event) {
        var data = $(this).serializeArray().reduce(function (obj, item) {
            obj[item.name] = item.value;
            return obj;
        }, {});
        var JSONdata = JSON.stringify(data);
        $('<p>JSON-структура данных формы:<br>' + JSONdata + '</p>').insertAfter("form");
        event.preventDefault();
    });
});