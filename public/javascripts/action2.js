// Get scroll items
var menuHeight = 0;
var menuItems = $('.nav li');
var menuLinks = menuItems.find('a');
var anchors = menuLinks.map(function() {
	var item = $($(this).attr('href'));
	if (item.length) {return item}
});

scrollItems = menuLinks.map(function(){
  var item = $($(this).attr("href"));
  if (item.length) { return item; }
});


// var cur = scrollItems.map(function(){
//  if ($(this).offset().top <= fromTop)
//    return this;
// });
// console.log(cur);

  scrollItems.map(function() {
    console.log($(this).offset().top);
  });
$(window).scroll(function() {

  console.log($(this).scrollTop());
   // Get container scroll position
   var fromTop = $(this).scrollTop()+menuHeight;
   // Get id of current scroll item
   var cur = anchors.map(function(){
   	if ($(this).offset().top <= fromTop)
   		return this;
   });

   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   // Set/remove active class
   menuItems.removeClass("active");
   $('a[href="#' + id + '"]').parent('li').addClass('active');
 });

// smooth anchor scrolling
$('ul.nav li a').click(function(){
	$('html, body').animate({
		scrollTop: $($.attr(this, 'href') ).offset().top - 20
	}, 500);
	return false;
});