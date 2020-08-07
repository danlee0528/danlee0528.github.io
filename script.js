
$(document).ready(function(){
  $(".landing-grey-area").animate({height: 'show'}, 1000);
  $(".landing-content-container").delay(1000).animate({opacity: "1"}, 1500);

  $(".parallax").ripples({
    resolution: 300,
    perturbance: .05,
  });

    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
    //   On Curriculum Section
        if (scroll > $(window).innerHeight() * 2 && scroll < $(window).innerHeight() * 4){
          $("#navbar").css({"background":"rgba(0, 0, 0, 0.6)", "transition":"0.3s ease-in-out"});
          $('.navbar-ul').css({"color":"white","padding":"2em","transition":"0.3s ease-in-out"});
          $('.navbar-li').css({"color":"white","padding-right":"5em","transition":"0.3s ease-in-out"});
          $('.navbar-li').hover(function(){
            $(this).css({"color":"#6443FA", "transition":"0.3s ease-in", "font-weight":"800"});
          }, function(){
            $(this).css({"color":"white", "transition":"0.3s ease-in"});
          });
        }
        // First on About section and second on Portfolio Section
        else if((scroll >= $(window).innerHeight() * 1 && scroll < $(window).innerHeight() * 2)|| (scroll >= $(window).innerHeight() * 4 && scroll < $(window).innerHeight() * 8)){
            $("#navbar").css({"background":"rgba(255, 255, 255, 0.6)","transition":"0.3s ease-in-out","box-shadow":"0 2px 2px -2px rgba(0,0,0,.2)"}); 
            $('.navbar-ul').css({"color":"#6F6F6F","padding":"2em","transition":"0.3s ease-in-out"});
            $('.navbar-li').css({"color":"#6F6F6F","padding-right":"5em","transition":"0.3s ease-in-out"});
            $('.navbar-li').hover(function(){
                $(this).css({"color":"#6443FA", "transition":"0.3s ease-in", "font-weight":"800"});
              }, function(){
                $(this).css({"color":"#6F6F6F", "transition":"0.3s ease-in"});
              });
        }
        else{
            $("#navbar").css({"background":"transparent","transition":"0.3s ease-in-out", "box-shadow":"none"});   
            $('.navbar-ul').css({"color":"#6F6F6F","padding":"4em","transition":"0.3s ease-in-out"});
            $('.navbar-li').css({"color":"#6F6F6F","padding-right":"5em","transition":"0.3s ease-in-out"});
            $('.navbar-li').hover(function(){
                $(this).css({"color":"#6443FA", "transition":"0.3s ease-in", "font-weight":"800"});
              }, function(){
                $(this).css({"color":"#6F6F6F", "transition":"0.3s ease-in"});
              });
        }
    })
  })
