
$(".final").click(function() {
    let tier = $(".tiers").val(); 
    let flavor = $(".flavor").val();
	let frosting = $(".frosting").val();
    $(".result").append(`<ul> Here's your cake! You got a ${frosting} ${tier} tier ${flavor} cake! </ul>`);
    $("body").css("background-color",`${frosting}`);
});