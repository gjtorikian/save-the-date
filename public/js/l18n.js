function localize(lang) {
    $.i18n.properties({
        name:'site',
        path:'./l18n/',
        mode:'map',
        language:lang,
        callback:function() {
        	// menu l18n
        	$("#navigation li a").each(function(i,el) {
                var menuName = $(this).data("menu");

                if (menuName !== undefined) {
                  var translation = $.i18n.prop(menuName);

                  if (translation !== undefined)
                    $(el).text(translation);
                } 
            });
        }
    });
}