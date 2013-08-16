// $(function () {
// 	var window_width = $(window).width() - $('#page').width();

// 	console.log($('#page').width());

// 	var document_height = $(document).height() - $(window).height();

//     $(window).scroll(function () {
//         var scroll_position = $(window).scrollTop();
//         var object_position_left = window_width * (scroll_position / document_height);
//         $('#page').css({
//             'left': object_position_left
//         });
//     });
// });

$(function() {

   	$("body").mousewheel(function(event, delta) {
      	this.scrollLeft -= (delta * 3);
      	event.preventDefault();
   	});

   	$("#content").on("mouseenter", function() {
   		$("#page").width(2660);   		
   	}).on("mouseout", function() {
   		$("#page").width(2560);
   	});
   	
});
