var chopstick =
{
    // init, something like a constructor
    init: function()
    {
        chopstick.loadObject(chopstick.blazy, 'chopstick.blazy');

        var figures1picture1Tween = TweenMax.to('.js-scene-figures-1-picture-1', 1, {
            css:{transform:"translateX(-50px) translateY(-50px) rotate(-4deg)"},
            ease: Linear.easeNone
        });

        var figures1picture2Tween = TweenMax.to('.js-scene-figures-1-picture-2', 1, {
            css:{transform:"translateX(50px) translateY(50px) rotate(3deg)"},
            ease: Linear.easeNone
        });

        var figures1picture3Tween = TweenMax.to('.js-scene-figures-1-picture-3', 1, {
            css:{transform:"translateX(50px) translateY(-50px) rotate(3deg)"},
            ease: Linear.easeNone
        });

        var controller = new ScrollMagic.Controller();

        var figures1picture1 = new ScrollMagic.Scene({
            triggerElement: '.js-scene-figures-1',
            duration: 1500
        }).setTween(figures1picture1Tween);

        var figures1picture2 = new ScrollMagic.Scene({
            triggerElement: '.js-scene-figures-1',
            duration: 1500
        }).setTween(figures1picture2Tween);

        var figures1picture3 = new ScrollMagic.Scene({
            triggerElement: '.js-scene-figures-1',
            duration: 1500
        }).setTween(figures1picture3Tween);

        controller.addScene([
            figures1picture1,
            figures1picture2,
            figures1picture3
        ]);

    },

    function(){
        $(window).on('scroll', function() {
            var scrollTop = $(this).scrollTop();
            $('.js-section').each(function() {
                var topDistance = $(this).offset().top;
                if ( (topDistance) < scrollTop ) {
                    $('js-nav ul li a').css('color',$(this).attr('data-color'));
                }
            });
        });
    },

    /**
     * This function will load an object by a given name
     *
     * If the object doesn't exist no error will be thrown
     * But if object exists but doesn't have an init method it will throw an error
     *
     * If everything is ok we'll initiate the given object
     */
    loadObject: function(obj, name)
    {
        // create object based on a name
        // var objName = window[objName];

        // check if object exists
        if(typeof obj != 'undefined') {

            // check if object has a method init
            if (typeof obj.init == 'undefined') {
                // we will throw an error so the designer / developer know there's a problem
                throw new Error('ERROR: "' + name + '" does not have an init function');

            } else {
                // everything is fine so initiate
                obj.init();
            }
        }
    }
};
