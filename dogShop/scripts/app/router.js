var router = new kendo.Router({
	routeMissing: function(e) {
		router.navigate("#404");
	}
});

router.route("/", function() {
});

router.route("dogListGrid", function() {
	templateLoader.loadExtTemplate("scripts/app/templates/_dogList.tmpl.html");
});

router.route("dogEditableListGrid", function() {
	templateLoader.loadExtTemplate("scripts/app/templates/_dogEditableList.tmpl.html");
});

router.route("404", function() {
	templateLoader.loadExtTemplate("scripts/app/templates/_404.tmpl.html");
});

$(function() {
	router.start();
});