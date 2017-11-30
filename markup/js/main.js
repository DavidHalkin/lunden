$(document).ready(function(){
	// nav
    // $(".btn-mob-nav").click(function(){
    //     $("#nav").slideToggle("fast");
    //     $(this).toggleClass("active");
    // });
    $('.block-nice-menus').prepend('<a href="javascript:void(0)" class="close-nav"></a>');
    $(document).on('click', '.close-nav', function () {
        $('header .block-nice-menus').removeClass('active');
    });
    $('.nav-bars').on('click', function () {
        $('header .block-nice-menus').addClass('active');
    });
    $('#nice-menu-1 > li').unbind('click').click(function() {
        $(this).children('ul').slideToggle();
    });
    $(document).click(function() {
      $("#nice-menu-1 > li > ul").hide();
    });
    $("#nice-menu-1 > li > ul, #nice-menu-1 > li").click(function(e) {
      e.stopPropagation();
    });
});