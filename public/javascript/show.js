var size = "small";
var oldUrl = $("#to-cart").attr('href');
$('#to-cart').attr('href', oldUrl + "/" + size);

$('.size li > a').click(function(){
    size = $(this).text().toLowerCase();
    $('#selected').text($(this).text());
    $('#to-cart').attr('href', oldUrl + "/" + size);
});

$('#to-cart').click(function(){
    var oldUrl = this.attr('href');
    this.attr('href', oldUrl + size);
})