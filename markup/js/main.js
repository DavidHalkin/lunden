$(document).ready(function(){
	// nav
    $(".btn-mob-nav").click(function(){
        $("#nav").slideToggle("fast");
        $(this).toggleClass("active");
    });
});