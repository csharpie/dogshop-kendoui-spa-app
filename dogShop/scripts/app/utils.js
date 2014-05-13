var templateLoader = (function($,host){
    return{
        loadExtTemplate: function(path){
            var tmplLoader = $.get(path)
                .success(function(result){
                    var tmpl = $(result).html();
                    $("div#content >").remove();
                    $("div#content").append(tmpl);
                })
                .error(function(result){
                    alert("Error Loading Templates -- TODO: Better Error Handling");
                })

            tmplLoader.complete(function(){
                $(host).trigger("TEMPLATE_LOADED", [path]);
            });
        }
    };
})(jQuery, document);
