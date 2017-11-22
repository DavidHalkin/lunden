$(document).ready(function(){
	// nav
    $(".btn-mob-nav").click(function(){
        $("#nav").slideToggle("fast");
        $(this).toggleClass("active");
    });
    // tags
     $(".btn-mob-tags").click(function(){
        $("#tags-nav").slideToggle("fast");
        $(this).toggleClass("active");
    });
});