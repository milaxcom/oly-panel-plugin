$(function () {

	$.ajax({
        url: 'http://oly.local/src/panel.html',
        dataType: 'html',
        cache : false,
        success: function (data) {
        	$('body').append(data)
        }
    });
	
});