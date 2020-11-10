// Get the image and insert it inside the modal - use its "alt" text as a caption
$(".modal-img").click(function() {
    $(".modal").css("display", "block");
    $("#img01").attr("src", $(this).attr("src"));
    $("#caption").html($(this).attr("alt"));
});

// When the user clicks on <span> (x), close the modal
$(".close").click(function() {
    $(".modal").css("display", "none");
});