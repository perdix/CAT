jQuery(document).ready(function($) {

    var pluginName = "holzwegHighlights",
        defaults = {
            selectors: {
                container: ".highlight-container",
                button: ".highlight-button"
            }
        };

    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;


        this.$container = $(this.settings.selectors.container);
        this.$button = $(this.settings.selectors.button);

        this.init();
    }

    Plugin.prototype = {
        init: function() {

            this.highlightCount = this.$button.length;

            this.buttonDataX = [];
            this.buttonDataY = [];

            var n;
            for (n = 0; n < this.highlightCount; ++n) {

                if ($(this.$container).width() < 800) {
                    this.buttonDataX[n] = $(this.$button[n]).data('x')/2;
                    this.buttonDataY[n] = $(this.$button[n]).data('y')/2; 
                } else {
                    this.buttonDataX[n] = $(this.$button[n]).data('x');
                    this.buttonDataY[n] = $(this.$button[n]).data('y'); 
                }

            }

            this.posButtons();
        },
        posButtons: function() {

            var v;
            for (v = 0; v < this.highlightCount; ++v) {
                $(this.$button[v]).css({
                    "left": this.buttonDataX[v] ,
                    "top": this.buttonDataY[v]
                });
            }

        }
    };

    $.fn[ pluginName ] = function(options) {
        this.each(function() {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });

        // chain jQuery functions
        return this;
    };

    if ($(".highlight-container").length) {
        $(".highlight-container").holzwegHighlights();
        $(".highlight-button").popover();
    }

});
