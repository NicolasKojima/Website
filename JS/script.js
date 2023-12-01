$(function () {
    var EASE = Power4.easeOut;

    var Engine = {
        ui: {
            initBtn: function () {
                var card = $('.card1');
                var body = $('body');
                var btn = $('.btn1');

                btn.on('click', function () {
                    if (body.hasClass('is-open')) {
                        // If already open, close it
                        body.removeClass('is-open');
                        TweenMax.to(card, 0.5, {
                            width: 300,
                            height: 200,
                            clearProps: 'all',
                        });
                    } else {
                        // If not open, expand it
                        body.addClass('is-open');
                        TweenMax.to(card, 0.5, {
                            width: '100vw',
                            height: '100vh',
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            zIndex: 1,
                        });
                    }
                });
            },
            initHover: function (e) {
                // Your hover code goes here
            },
        },
    };

    Engine.ui.initBtn();
    Engine.ui.initHover();
});
</script