(function () {
    $(document).ready(function () {
        $('section').css('height', $(window).height() + 'px');
        return $(document).on('click', 'a', function (e) {
            var selector;
            if ($(this).attr('href').split('#')[1]) {
                selector = '#' + $(this).attr('href').split('#')[1];
                return $('html, body').animate({scrollTop: $(selector).offset().top - 100}, 1000);
            }
        });
    });
}.call(this));

