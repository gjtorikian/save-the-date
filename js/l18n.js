function localize(lang) {
    $("#en-toggle").toggleClass("hiddenlang");
    $("#mx-toggle").toggleClass("hiddenlang");

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

            $("#navigation li a, h1.page-header, span, p, button").each(function(i,el) {
                var name = $(this).data("localize");
                translate(name, el);
            });
        }
    });
}
