function localize(lang) {
    $.i18n.properties({
        name:'site',
        path:'./l18n/',
        mode:'map',
        language:lang,
        callback:function() {
            var translate = function(name, el) {
                if (name !== undefined) {
                  var translation = $.i18n.prop(name);

                  if (translation !== undefined)
                    $(el).text(translation);
                } 
            }

        	$("#navigation li a").each(function(i,el) {
                var name = $(this).data("localize");
                translate(name, el);
            });

            $("h1.page-header").each(function(i,el) {
                var name = $(this).data("localize");
                translate(name, el);
            });

            $("p").each(function(i,el) {
                var name = $(this).data("localize");
                translate(name, el);
            });

            $("span").each(function(i,el) {
                var name = $(this).data("localize");
                translate(name, el);
            });
        }
    });
}