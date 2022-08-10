$(document).ready(function () {
    alert('Привет, мир');
    $('.btn-warning').click(function () {
        $('h1').toggleClass('hide');
    });
    let wrapper = $('.wrapper');
    $('.btn-success').click(function () {
        $('.block:eq(2)').insertBefore($('.block:eq(2)').prev());
    });
});