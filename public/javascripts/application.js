$(document).ajaxSend(function(event, request, settings) {
	if (typeof(window.AUTH_TOKEN) == "undefined") return;
	settings.data = settings.data || "";
	settings.data += (settings.data ? "&" : "") + "authenticity_token=" + encodeURIComponent(window.AUTH_TOKEN);
});

jQuery.ajaxSetup({
	'beforeSend': function(xhr) { xhr.setRequestHeader("Accept", "text/javascript") }
});

$(function() {
	$('#search_term').keypress(function() {
		$.get("/jobs", { search: $('#search_term').val() }, null, "script")
	});
});