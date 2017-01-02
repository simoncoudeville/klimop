chopstick.blazy =
{

    init: function()
    {

        var bLazy = new Blazy({
            selector: ".js-blazy",
            successClass: "is-loaded",
            breakpoints: [{
                width: 320, // max-width
                src: 'data-src-small'
            },
            {
                width: 768, // max-width
                src: 'data-src-medium'
            }]

        });

    }
};
