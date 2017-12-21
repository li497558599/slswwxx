
$(function(){
$(".navbox").click(function(){
	if($(".nav").is(":hidden")){
		$(".nav").slideDown(200);
		}else{
		$(".nav").slideUp(200);	
		}						
	})
$(".nav-lia span").click(function(){
	if($(".nav-lia p").is(":hidden")){
		$(".nav-lia p").slideDown(0);
		}else{
		$(".nav-lia p").slideUp(0);	
		}						
	})


$(document).scroll(function(){ 
if($(document).scrollTop()>100){
$(".headerm").addClass("on");
$(".divh100").addClass("on");
}else{
$(".headerm").removeClass("on");
$(".divh100").removeClass("on");
}
})

$(window).fadeThis({
speed: 500,
});

		   
$('.sl-kbi-ula li').bind('mouseenter', function () {
	$(this).addClass('on').siblings().removeClass('on');
	$(".sl-kbi-b").find('ul').eq($(this).index()).show().siblings().hide();
});	
		   
		   
$(".le ul li:eq(0)").addClass("on");
$(".nav li").hover(function(){
			$(this).find("dl").stop().slideDown(200);				   
			},function(){
			$(this).find("dl").stop().slideUp(200);		
			})


});


 var mySwiper = new Swiper('.swiper-container',{
    pagination: '.pagination',
    loop:true,
	autoplay:3000,
    grabCursor: true,
    paginationClickable: true
  })
  var mySwiper4 = new Swiper('.swiper-container4',{
    pagination: '.pagination4',
    loop:true,
	autoplay:3000,
    grabCursor: true,
    paginationClickable: true
  })
   var mySwiper5 = new Swiper('.swiper-container5',{
    pagination: '.pagination5',
    loop:true,
	autoplay:3000,
    grabCursor: true,
    paginationClickable: true
  })
   var mySwiper6 = new Swiper('.swiper-container6',{
    pagination: '.pagination6',
    loop:true,
	autoplay:3000,
    grabCursor: true,
    paginationClickable: true,
	centeredSlides: true,
    slidesPerView: 3,
    watchActiveIndex: true
  })
  $('.arrow-left6').on('click', function(f3){
    f3.preventDefault()
    mySwiper6.swipePrev()
  })
  $('.arrow-right6').on('click', function(f3){
    f3.preventDefault()
    mySwiper6.swipeNext()
  })
   
   
 
 var tabsSwiper = new Swiper('.swiper-container1',{
    speed:500,
    onSlideChangeStart: function(){
      $(".tabs .active").removeClass('active')
      $(".tabs a").eq(tabsSwiper.activeIndex).addClass('active')  
    }
  })
  $(".tabs a").on('touchstart mousedown',function(e){
    e.preventDefault()
    $(".tabs .active").removeClass('active')
    $(this).addClass('active')
    tabsSwiper.swipeTo( $(this).index() )
  })
  $(".tabs a").click(function(e){
    e.preventDefault()
  })
  $('.arrow-left').on('click', function(f){
    f.preventDefault()
    tabsSwiper.swipePrev()
  })
  $('.arrow-right').on('click', function(f){
    f.preventDefault()
    tabsSwiper.swipeNext()
  })
  
 var tabsSwiper3 = new Swiper('.swiper-container3',{
    speed:500,
    onSlideChangeStart: function(){
      $(".tabs3 .active").removeClass('active')
      $(".tabs3 a").eq(tabsSwiper3.activeIndex).addClass('active')  
    }
  })
  $(".tabs3 a").on('touchstart mousedown',function(e2){
    e2.preventDefault()
    $(".tabs3 .active").removeClass('active')
    $(this).addClass('active')
    tabsSwiper3.swipeTo( $(this).index() )
  })
  $(".tabs3 a").click(function(e2){
    e2.preventDefault()
  })
  $('.arrow-left3').on('click', function(f2){
    f2.preventDefault()
    tabsSwiper3.swipePrev()
  })
  $('.arrow-right3').on('click', function(f2){
    f2.preventDefault()
    tabsSwiper3.swipeNext()
  })

 
 var tabsSwiper1 = new Swiper('.swiper-container2',{
    speed:500,
    onSlideChangeStart: function(){
      $(".tabs2 .active").removeClass('active')
      $(".tabs2 a").eq(tabsSwiper1.activeIndex).addClass('active')  
    }
  })
  $(".tabs2 a").on('touchstart mousedown',function(e1){
    e1.preventDefault()
    $(".tabs2 .active").removeClass('active')
    $(this).addClass('active')
    tabsSwiper1.swipeTo( $(this).index() )
  })
  $(".tabs2 a").click(function(e1){
    e1.preventDefault()
  })
  $('.arrow-left1').on('click', function(f1){
    f1.preventDefault()
    tabsSwiper1.swipePrev()
  })
  $('.arrow-right1').on('click', function(f1){
    f1.preventDefault()
    tabsSwiper1.swipeNext()
  })
