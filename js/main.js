$(document).ready(function () {
    $(".button-send").click(function () { 
        $("form").submit();  
    });
        $("form").submit(function (e) { 
            e.preventDefault();
            let email = $("#email").val();
            let texterea = $("#textarea").val();
            let colError = "#e4380f";
            let colTrue = "#39d614";
            if (email.length< 1) {
                $(".email").css({"border-color": colError});
            } 
            else {
                let regEx = /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/i;
                let validEmail = regEx.test(email);
                if (validEmail) {
                    $(".email").css({"border-color": colTrue});
                }
                else {
                    $('.email').css({"border-color": colError});
                }
            }
            if (texterea.length> 1) {
                $(".coment-email").css({"border-color": colTrue});
                var th = $(this);
                    $.ajax({
                        type: "POST",
                        url: "mail.php", //Change
                        data: th.serialize()
                    }).done(function() {
                        alert("Thank you!");
                        setTimeout(function() {
                            // Done Functions
                            th.trigger("reset");
                        }, 1000);
                    });
                    return false;
            } else {
                $(".coment-email").css({"border-color": colError});
            }
        }); 

   
});
    
AOS.init();



let intr768 = setInterval(function() {
  let widthSreen = $('html, body').outerWidth() < 769;
  let renderCont = '<ul class="nav-icons menu"><li><a href="https://vk.com/id496594396"><i class="fa  fa-vk" aria-hidden="true"></i></a></li> <li><a href="mailto:yuriy.melnichuk.1998@gmail.com"><i class="fa  fa-google-plus-official" aria-hidden="true"></i></a></li> <li><a href="https://www.instagram.com/yura_melnichuk_"><i class="fa  fa-instagram" aria-hidden="true"></i></a></li> <li><a href="https://github.com/Arakyl1"><i class="fa  fa-github" aria-hidden="true"></i></a></li></ul>';
  let renderContTwo = '<li class="renderContact"><a href="#" class="only dark contact closse-memu">contact</a></li><li class="close-button render nav"><div></div><div></div></li>';
  if (widthSreen == true) {
    if (!$('.nav-icons').hasClass('menu')) {
      //render navigation icons and mobale buttom
      $('ul.nav_link.only').after(renderCont); 
      $('.nav_link.only li.ren').after(renderContTwo);
      $('li.dark-button.dark').remove();
    } else{
      //close buttom mobale 
      $(".close-button.nav").click(function () {
        $(".button-menu, .container.nav,.header_title, .header-span, .heder-button").removeClass("active");
      });
      //bottum contact
      $(".nav_link li a.only.contact").click(function () {
        $(".container.nav").removeClass("active");
        $('.header_title, .header-span, .heder-button, .button-menu').addClass('active');
        $(".me-list-cont .me-list-left, .me-list-cont .me-list-rignt").addClass("contactMobale");
        $('.about-me-list').css({'z-index':"6"});
      });
      // buttom mobale about
      $('a.only.about-me').click(function (e) { 
        e.preventDefault();
        $(".container.nav").removeClass("active");
        $( ".header_title, .header-span, .heder-button, .me-list-left, .me-list-rignt, .button-menu" ).addClass("active");
      });
    }
  } else {
    //remove navigations icons and mobale buttom
    $('.nav-icons.menu, .renderContact, .dark-button.render, .close-button.render').remove();
    if (!$(".nav_link li").hasClass('dark-button')) {
      $('li.ren').after('<li class="dark-button dark"><i class="fa fa-adjust dark" aria-hidden="true"></i></li>');
    }
    
  }
}, 1000);



  
  //nav mobale menu button
  $(".body-menu").click(function () {
    if ($(".me-list-left").hasClass("active") || $('.me-list-left').hasClass("contactMobale")) {
      $(".about-me-list .me-list-cont .me-list-left, .me-list-cont .me-list-rignt").removeClass("active");
      $(".about-me-list .me-list-cont .me-list-left, .me-list-cont .me-list-rignt").removeClass('contactMobale');
      $(".button-menu, .container.nav").addClass("active");
    } else {
      $(".button-menu, .container.nav").addClass("active");
    }
  });
  
  //mobale close icon mobale contact
  $("#form .close-button, .closse-memu").click(function () {
    $(".header_title, .header-span, .heder-button, .navigation, .button-menu, .container.nav, .dark-button, .me-list-cont .me-list-left, .nav_rignt, .me-list-cont .me-list-rignt").removeClass("active");
    $(".me-list-cont .me-list-left, .me-list-cont .me-list-rignt").removeClass("contactMobale");
    $('.about-me-list').css({'z-index':"1"});
    
  });
  
  // buttom about-me
  $(".about-header, .heder-button").click(function () {
    console.log(1);
    $( ".header_title, .header-span, .heder-button, .me-list-left, .me-list-rignt, .button-menu, .nav_rignt, .navigation" ).addClass("active");
    $('.about-me-list').css({'z-index':"6"});
  });

//close icon about me
  $(".close-button-about").click(function () {
    $(".header_title, .header-span, .nav_rignt, .heder-button, .me-list-cont .me-list-left, .me-list-cont .me-list-rignt, .nav_rignt, .navigation, .button-menu").removeClass("active");
    $('.about-me-list').css({'z-index':"1"});
  });

   //dark theme
   $(".fa-adjust").click(function () { 
    $('.fa-adjust, .header_title, .header-span, .button-menu .button-menu-line, .nav_link a.only, .navigation_icons a i, .header-image, .me-list-left, .me-list-rignt ').toggleClass("dark");
    
  });

  //image header transform
  let windowWindth = $(window).width();
    $("header").mousemove(function (event) { 
        let moveX = (($(window).width() / 2) - event.pageX) * 0.1 ;
        let moveY= (($(window).height() / 2) - event.pageY) * 0.1 ;
        $(".header-image").css("margin-left", moveX + "px"); 
        $(".header-image").css("margin-top", moveY + "px");               
   });
  
  //lihe scale on scrol
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 10) $(".my-works-line").addClass("active");
  });
  
  //post-shadow
  $(".my-works-post").hover(function () {
    $(".my-works-post").toggleClass("active");
  });
  
 //unput focus amd blur
  $(".name-input input,.email-input input,.coments-textare textarea").focus(
    function () {
      $(this).next("span").addClass("active");
    }
  );
  $(".name-input input,.email-input input,.coments-textare textarea").blur(
    function () {
      if ($(this).val() === "") {
        $(this).next("span").removeClass("active");
      }
    }
  );
  //scroll link works
  $(function () {
    $(".works").on("click", function (e) {
      $("html,body").stop().animate({ scrollTop: $("#works").offset().top }, 1200);
      e.preventDefault();
    });
  });
  $(function () {
    $(".experiments").on("click", function (e) {
      $("html,body").stop().animate({ scrollTop: $("#experiments").offset().top }, 1200);
      e.preventDefault();
    });
  });
  //experiments carts
  //one carts
  $(".carts.one ").click(function () {
    if ($(".carts.two").hasClass("active")) {
      $(".carts.two, .carts.three").removeClass("active");
      $(".carts.one ").addClass("active");
    } else {
      $(".carts.one ").toggleClass("active");
    }
  });
  //two carts
  $(".carts.two ").click(function () {
    if ($(".carts.one").hasClass("active")) {
      if ($(".carts.two").hasClass("active")) {
        if ($(".carts.three").hasClass("active")) {
          $(".carts.three").removeClass("active");
        } else {
          $(".carts.two, .carts.one").removeClass("active");
        }
      } else {
        $(".carts.two").addClass("active");
      }
    } else {
      $(".carts.one, .carts.two").toggleClass("active");
    }
  });
  //three carts
  $(".carts.three ").click(function () {
    if ($(".carts.one, .carts.two").hasClass("active")) {
      if ($(".carts.three").hasClass("active")) {
        $(".carts.two, .carts.one, .carts.three").removeClass("active");
      } else {
        $(".carts.two, .carts.one, .carts.three").addClass("active");
      }
    } else {
      $(".carts.one, .carts.two, .carts.three").toggleClass("active");
    }
  });
  
  //experiments teo transform
  const heiht = $(".experiments-two");
  let setInter = setInterval(function() {
    let scrols = $(heiht).scrollTop();
    let heigntTransOne = scrols / 2.3;
    $(".main-content").css({ "margin-top": scrols + "px" });
    //start trancform cub
    if (heigntTransOne <= 90) {
      $(".rigt-cub").css({ opacity: "1" });
      $(".transform-cub.one").css({ transform: "rotate( " + scrols / 2.3 + "deg)",});
      $(".transform-cub.two").css({ transform: "rotate( " + scrols / 3 + "deg)",});
      $(".transform-cub.three").css({transform: "rotate( " + scrols / 4 + "deg)",});
      $(".transform-cub.four").css({transform: "rotate( " + scrols / 5.8 + "deg)",});
    } else {
      $(".rigt-cub").css({ opacity: "0" });
    }
    //end transcform cub
    //start paralelipiped
    if (scrols >= 215 && scrols <= 425) {
      let transformParal = scrols - 215;
      $(".papalelipiped ").css({ opacity: "1" });
      $(".transform-paralel.one").css({transform:"skewY(-20deg) rotateY(50deg) translate3d(" + transformParal + "px," + transformParal + "px," + transformParal + "px) scale(" + (1 + transformParal / 200) + "," + (1 + transformParal / 200) + ")", opacity: -0.05 + transformParal / 200,});
      $(".transform-paralel.two").css({transform:"skewY(-20deg) rotateY(50deg) translate3d(" + transformParal / 2 + "px," + transformParal / 2 + "px," + transformParal / 2 + "px) scale(" + (1 + transformParal / 400) + "," + (1 + transformParal / 400) + ")", opacity: -0.03 + transformParal / 400, });
      $(".transform-paralel.three").css({ transform: "skewY(-20deg) rotateY(50deg) translate3d(" + transformParal / 4 + "px," + transformParal / 4 + "px," + transformParal / 4 + "px) scale(" + (1 + transformParal / 900) + "," + (1 + transformParal / 900) + ")", opacity: -0.02 + transformParal / 900, });
      $(".transform-paralel.four").css({ transform:"skewY(-20deg) rotateY(50deg) translate3d(" + transformParal / 8 + "px," + transformParal / 8 + "px," + transformParal / 8 + "px)", opacity: -0.01 + transformParal / 900 });
    } else {
      $(".papalelipiped ").css({ opacity: "0" });
    }
    //end paralelipiped
    //start oval
    if (scrols >= 435 && scrols <= 750) {
      $(".oval").css({ opacity: "1" });
      let transformOvalTop = scrols - 435;
      $(".trancform-oval.one").css({ transform: "rotateX(80deg) translateX(-50%)", opacity: -0.02 + transformOvalTop / 200, top: 170 - transformOvalTop / 1.1 + "px" });
      $(".trancform-oval.two").css({ transform: "rotateX(80deg) translateX(-50%)", opacity: -0.02 + transformOvalTop / 200, top: 150 - transformOvalTop / 1.6 + "px" });
      $(".trancform-oval.three").css({ transform: "rotateX(80deg) translateX(-50%)", opacity: -0.02 + transformOvalTop / 200, top: 130 - transformOvalTop / 2.7 + "px", });
      $(".trancform-oval.four").css({ transform: "rotateX(80deg) translateX(-50%)", opacity: -0.02 + transformOvalTop / 200, top: 100 - transformOvalTop / 8 + "px",});
      if (scrols >= 655 && scrols <= 750) {
        let transfeomOvalRotate = scrols - 655;
        $(".trancform-oval.one").css({ transform: "rotateX(" + (80 - transfeomOvalRotate / 3.8) + "deg) translateX(-50%)",});
        $(".trancform-oval.two").css({ transform: "rotateX(" + (80 - transfeomOvalRotate / 3.8) +"deg) translateX(-50%)",});
        $(".trancform-oval.three").css({transform: "rotateX(" + (80 - transfeomOvalRotate / 3.8) + "deg) translateX(-50%)",});
        $(".trancform-oval.four").css({transform:"rotateX(" + (80 - transfeomOvalRotate / 3.8) + "deg) translateX(-50%)",});
      }
    } else {
      $(".oval").css({ opacity: "0" });
    }
    if (scrols >= 770 && scrols <= 1200) {
      $(".cub-two").css({ opacity: "1" });
      let scrollCubTwo = scrols - 770;
      $(".transform-cub-two.one").css({ right: 10 + scrollCubTwo / 8 + "%", opacity: -0.17 + scrollCubTwo / 300 });
      $(".transform-cub-two.two").css({ right: 24 + scrollCubTwo / 23 + "%", opacity: -0.12 + scrollCubTwo / 250,});
      $(".transform-cub-two.three").css({ left: 22 + scrollCubTwo / 23 + "%", opacity: -0.07 + scrollCubTwo / 200,});
      $(".transform-cub-two.four").css({left: 10 + scrollCubTwo / 8 + "%", opacity: -0.01 + scrollCubTwo / 150,});
    } else {
      $(".cub-two").css({ opacity: "0" });
    }
  }, 1);
  //end oval
  