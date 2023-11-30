$('.team-builder').css("border-top", "5px solid hsl(0, 78%, 62%)");
$('.calculator').css("border-top", "5px solid hsl(180, 62%, 55%)");
$('.karma').css("border-top", "5px solid hsl(34, 97%, 64%)");
$('.supervisor').css("border-top", "5px solid hsl(212, 86%, 64%)");

$(".team-builder").hover(function() {
    $('.team-builder').toggleClass("neon-a");
});

$("div.calculator").hover(function() {
    $('.calculator').toggleClass("neon-b");
});

$("div.karma").hover(function() {
    $('.karma').toggleClass("neon-c");
});

$(".supervisor").hover(function() {
    $('.supervisor').toggleClass("neon-d");
    $('.supervisor div img').css('display', 'none');
    $('.supervisor').html('<lord-icon
    src="https://cdn.lordicon.com/ybaojceo.json"
    trigger="hover"
    style="width:64px;height:64px">
</lord-icon>');
});

// if (screen.width <= 1000) {
//     $('div.center-components').addClass('mobile-components');
//     $('div.mobile-components').removeClass('center-components');
// }
