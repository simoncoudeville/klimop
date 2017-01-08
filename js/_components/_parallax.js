chopstick.parallax =
{

    init: function()
    {

        var items = $('.js-parallax-item'),
        $window = $(window);

        $window.scroll(function(){
            var scrollTop = $window.scrollTop();
            items.each(function(){
                var $this = $(this),
                scrollspeed = parseInt($this.data('scroll-speed')),
                val = - scrollTop / scrollspeed;
                $this.css('transform', 'translateY(' + val + 'px)');
            });
        });

    }
};
