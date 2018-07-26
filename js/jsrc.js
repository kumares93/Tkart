$(document).ready(function() {
    
 $(".item1").click(function(){
    
        var x=$('.item1 ul').css('display');
        if(x=='block'){
        $(".item1 ul").css('display','none');
        }else
        $(".item1 ul").css('display','block');

        $(".item1 ul li ul,.item2 ul,.item3 ul,.item4 ul,.item5 ul").css('display','none');
});
$(".item1 ul li").mouseover(function(){
        $(".item1 ul li ul").css('display','block');
});
$(".item1 ul li").mouseout(function(){
        $(".item1 ul li ul").css('display','none');
});
$(".item2").click(function(){
    
        var x=$('.item2 ul').css('display');
        if(x=='block'){
        $(".item2 ul").css('display','none');
        }else
        $(".item2 ul").css('display','block');
        $(".item1 ul,.item3 ul,.item4 ul,.item5 ul").css('display','none');
});
$(".item3").click(function(){
    
        var x=$('.item3 ul').css('display');
        if(x=='block'){
        $(".item3 ul").css('display','none');
        }else
        $(".item3 ul").css('display','block');
        $(".item2 ul,.item1 ul,.item4 ul,.item5 ul").css('display','none');
});
$(".item4").click(function(){
    
        var x=$('.item4 ul').css('display');
        if(x=='block'){
        $(".item4 ul").css('display','none');
        }else
        $(".item4 ul").css('display','block');
        $(".item2 ul,.item3 ul,.item1 ul,.item5 ul").css('display','none');
});
$(".item5").click(function(){
    
        var x=$('.item5 ul').css('display');
        if(x=='block'){
        $(".item5 ul").css('display','none');
        }else
        $(".item5 ul").css('display','block');
        $(".item2 ul,.item3 ul,.item4 ul,.item1 ul").css('display','none');
});
//$('*').click(function () {
  //      $(".item2 ul,.item3 ul,.item4 ul,.item1 ul,.item5 ul").css('display','none');
//})
});

$(document).ready(function(){
        $('.your-class').slick({
          dots:true,
          autoplay:true,
          arrows:false
        });
        $('.slide-div').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed:1000

      });
      $('.slide-div2').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed:1000

      });
  });
  
  
  
  
  
  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("myBtn").style.display = "block";
  } else {
      document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}   
