(function() {
    jQuery.fn.dv = function(source) {
        return this.each(function() {
            var p = new Processing(this, dv);

            var graph = new p.Graph(this, jQuery);
            graph.setXML(source);
            graph.draw();
        });
    };

    jQuery.fn.dvFromUrl = function(url) {
        return this.each(function() {
            var p = new Processing(this, dv);

            var graph = new p.Graph(this, jQuery);
            graph.setXMLFromUrl(url);
            graph.draw();
        });
    };

})(jQuery);

jQuery(function() {
    jQuery('head').append('<meta http-equiv="X-UA-Compatible" content="IE=9" >');
});