var pagenumberone = $("#number-one"),
    pagenumbertwo = $("#number-two"),
    pagenumberthree = $("#number-three"),
    pagenumberfour = $("#number-four"),
    pagenumberfive = $("#number-five"),
    pagenumbersix = $("#number-six"),
    slidecontentone = $("#content-one"),
    contenttwo = $("#content-two"),
    contentthree = $("#content-three"),
    contentfour = $("#content-four"),
    contentfive = $("#content-five"),
    contentfivefull = $("#content-five-full"),
    contentsix = $("#content-six"),
    satelitebox = $(".satellite-box"),
    tvoff = $(".tvoff"),
    tvon = $(".tvon"),
    tvscreen = $(".screen"),
    tvscreenarrow = $(".tvscreenarrow"),
    tvscreenline = $(".tvscreenline"),
    tvscreenpin = $(".tvscreenpin"),
    tvscreenscan = $(".tvscreenscan"),
    remote1 = $(".remote"),
    arrow1 = $(".arrow1"),
    arrow2 = $(".arrow2"),
    iconsanim = $(".icons.anim"),
    iconsnoanime = $(".icons.noanim"),

    slide1nav = $(".slide1nav"),
    slide2nav = $(".slide2nav"),
    slide3nav = $(".slide3nav"),
    slide4nav = $(".slide4nav"),
    slide5nav = $(".slide5nav"),
    slide6nav = $(".slide6nav")

    tl = new TimelineMax({repeat:-1});

tl.set(slidecontentone,  {autoAlpha:1})
  .from(iconsanim, 0.7, {opacity: 0, top: 0, left: 0, scale: (1), autoAlpha:1} , "-=1.5")
  .from([tvon, arrow2], 0, {opacity: 0, top:-900, autoAlpha:1})
  .to([slide1nav, slide2nav, slide3nav, slide4nav, slide5nav, slide6nav], 0, {top: -300, opcaity: 0, autoAlpha:1},  "-=1.5")
  .from([tvon, pagenumbertwo, pagenumberthree, pagenumberthree, pagenumberfour, pagenumberfive, pagenumbersix, contenttwo, contentthree, contentfour, contentfive, contentfivefull, contentsix, arrow2], 0, {bottom:-100, opcaity: 0, autoAlpha:1},  "-=1.5")
  .to([pagenumbertwo, pagenumberthree, pagenumberthree, pagenumberfour, pagenumberfive, pagenumbersix, contenttwo, contentthree, contentfour, contentfive,  contentfivefull,  contentsix, arrow2], 0, {bottom:-100, opcaity: 0, autoAlpha:1},  "-=1.5")
  .to([tvon, arrow2], 0, {opacity: 0, bottom: -200, autoAlpha:1})
  .to(iconsanim, 0, {opacity: 1, autoAlpha:1})
  .from(tvoff, 1.2, {left:-400, autoAlpha:0})
  .from(slidecontentone, 1.2, {bottom:-100, autoAlpha:0})
  .to(slide1nav, 0, { top: 0, autoAlpha:0})
  .to(slide1nav, 0.6, { opacity: 1, autoAlpha:1})
  .from(pagenumberone, 1, {bottom:-100, autoAlpha:0}, "-=1.5")
  .from(satelitebox, 0.8, {scale:.5, autoAlpha:0}, "-=1.5")
  .from(remote1, 7.2, {top:400, opacity: 0, autoAlpha:1, left: 790, rotation:"90deg", ease:Elastic.easeInOut}, "-=5.75")
  .from(arrow1, 1.4, {lef:0, autoAlpha:0}, "-=0.75")
  .to(remote1, 1.2, {rotation:"0deg"})
  .to([pagenumberone, slidecontentone] , 1.4, {bottom:-100, autoAlpha:1}, "+=1.5")

  .to(slide1nav, 0, { top: -300, opacity: 0, autoAlpha:0})
  .to(slide2nav, 0, { top: 0, opacity: 0.3, autoAlpha:1}, "-=0.2")
  .to(slide2nav, 0, { top: 0, opacity: 1, autoAlpha:1}, "-=0.2")

  .to(pagenumbertwo, 1, {bottom: 5, autoAlpha:1}, "-=1.2")
  .to(contenttwo, 1.2, {bottom: -3, autoAlpha:1}, "-=1")
  .to(arrow1, 0.5, {opacity:0}, "-=1.5")
  .to(arrow1, 0, {opacity:0, top: 400})
  .to(arrow2, 0, {opacity:0, top: 150, autoAlpha:1}, "-=1.25")
  .to(arrow2, 0.5, {opacity:1, top: 150, autoAlpha:1})
  .to([arrow2], 0.6, {bottom:-400,  opacity: 0, autoAlpha:0, delay: 3})
  .to(arrow2, 0, {top: 700, opacity: 0, autoAlpha:0})
  .to([pagenumbertwo, contenttwo], 1.2, {bottom:-100, opacity: 0, autoAlpha:0, delay: 1})

  .to(slide2nav, 0, { top: -300, opacity: 0, autoAlpha:0}, "-=0.2")
  .to(slide3nav, 0, { top: 0, opacity: 1, autoAlpha:1}, "-=0.2")

 .to(tvoff, 4.5, {left:80, autoAlpha:1,  ease:Quint.easeInOut}, "-=2.25")
  .to(satelitebox, 3.5, { rotation: "70deg", left:400, top: 480, autoAlpha:1, ease:Quint.easeInOut}, "-=4")
  .to(pagenumberthree, 1, {bottom: 5, autoAlpha:1}, "-=1")
  .to(contentthree, 1.5, {bottom: 8, autoAlpha:1,}, "-=1.2")
  .to(tvscreen, 1.5, {opacity: 0}, "-=6")
  // .to(pagenumberthree, 1.2, {bottom: -100, opacity: 0, autoAlpha:0, delay: 4})

  .to(slide3nav, 0, { top: -300, opacity: 0, autoAlpha:0, delay: 3}, "-=0.2")
  .to(slide4nav, 0, { top: 0, opacity: 1, autoAlpha:1}, "-=0.2")

  .to(tvon, 0, {left:80, autoAlpha:1,}, "-=3.5")
  .to(tvon, 0.7, { opacity: 1, autoAlpha:1,})
  .to(tvoff, 0.5, {opacity: 0, autoAlpha:1}, "-=3")
  .to(tvoff, 0, {opacity: 0, left: 700, autoAlpha:1})
  .to(tvscreen, 0.8, {opacity: 1, delay: 1}, "-=2")
  // .to(pagenumberfour, 1, {bottom: 5, autoAlpha:1,}, "-=0.9")
  .to(contentthree, 0.4, {opacity: 0, autoAlpha:0, delay: 2} )
  .to(contentthree, 0, {bottom: -100, opacity: 0, autoAlpha:0})
  .to(contentfour, 0, {bottom: 7,  opacity: 0, autoAlpha:1,}, "-=1.9")
  .to(contentfour, 0.4, {bottom: 7, opacity: 1,  autoAlpha:1},  "+=0.2")


  .to(tvscreenarrow, 1.8, {top: 110, delay: 3}, "-=2")
  .to(tvscreenarrow, 0.1, {top: 110, left: 14, delay: 0.2})

  .to(remote1, 0.6, {rotation:"-15deg",}, "-=2.55")
  .to(remote1, 0.4, {rotation:"0deg"}, "-=2.1")

  .to(tvscreen, 1.2, {left: -340, delay: 1.3})

  .to(tvscreenline, 0.2, {width: 174, delay: 2.3})

  .to(tvscreen, 1.2, {left: -680, delay: 0.4})
  .to([pagenumberthree, contentfour], 1.2, {bottom: -100, opacity: 0, autoAlpha:1}, "-=1")

  .to(slide4nav, 0, { top: -300, opacity: 0, autoAlpha:0}, "-=0.2")
  .to(slide5nav, 0, { top: 0, opacity: 1, autoAlpha:1}, "-=0.2")

  .to(remote1, 0.4, {rotation:"-15deg"}, "-=2.75")
  .to(remote1, 0.2, {rotation:"0deg"}, "-=2.1")

  .to(pagenumberfour, 1, {bottom: 5, autoAlpha:1}, "-=1")
  .to(contentfive, 1.5, {bottom: 8, autoAlpha:1}, "-=1.2")

  .to(tvscreenpin, 0, {width: 35, delay: 3.8} , "+=0.6")
   .to(tvscreenpin, 0, {width: 70, delay: 0.2})
   .to(tvscreenpin, 0, {width: 100, delay: 0.2})
   .to(tvscreenpin, 0, {width: 140, delay: 0.2})

   .to(contentfive, 0.4, {opacity: 0,  bottom: 8, autoAlpha:0, delay: 4} )
   .to(contentfive, 0, {bottom: -100, opacity: 0, autoAlpha:0})

   .to(contentfivefull, 0, {bottom: 2, opacity: 0, autoAlpha:1, })
    .to(contentfivefull, 0.8, {bottom: 2, opacity: 1, autoAlpha:1,  })

   .to(remote1, 0.6, {rotation:"-15deg"}, "-=6.1")
   .to(remote1, 0.4, {rotation:"0deg"}, "-=4.7")

  .to(tvscreen, 1.2, {left: -1020, delay: 3})
  .to([pagenumberfour, contentfivefull], 1.2, {bottom: -100, opacity: 0, autoAlpha:1, } , "-=2")

  .to(tvscreenscan, 0, { opacity: 0, scale: (0.2),}, "-=2.9")
  .to(tvscreenscan, 1, { opacity: 1, scale: (1),})

  .to(slide5nav, 0.4, { opacity: 0, autoAlpha:0}, "-=2.2")
  .to(slide5nav, 0, { top: -300, opacity: 0, autoAlpha:0}, "-=1.7")
  .to(slide6nav, 0, { top: 0, opacity: 1, autoAlpha:1}, "-=2.2")

  .to(pagenumberfive, 1, {bottom: 5, autoAlpha:1}, "-=2")
  .to(contentsix, 1.5, {bottom: 6, autoAlpha:1}, "-=2.2")

  .to(tvscreen, 1.2, {left: -1350, delay: 4.5})
  .to(pagenumberthree, 0, {bottom:-100, autoAlpha:0})
  .to(tvon, 3.8, {left:200, autoAlpha:1, ease:Elastic.easeInOut}, "-=3.4")
  .to(remote1, 2.5, { opacity: 0, top: 550}, "-=3")
  .to(tvscreen, 0.5, { opacity: 0, delay: 3})
  .to(iconsanim, 2, { opacity: 0}, "-=4.6")
  .to(slide6nav, 0.4, { top: 0, opacity: 0, autoAlpha:1}, "-=4.6")
  .to(slide6nav, 0, { top: -300, opacity: 0, autoAlpha:0})
  .to(iconsnoanime, 0, { opacity: 0, scale: (0.4), left: -200, top: -400}, "-=6.9")
  .to(iconsnoanime, 0.2, { opacity: 1, scale: (1), top: 0}, "-=4.3")
  .to(iconsnoanime, 1.2, { opacity: 0, scale: (0.1), top: 0, left: -70, delay:5}, "-=1.3")
  .to([pagenumberfive, contentsix], 1.2, {bottom: -100, opacity: 0, autoAlpha:1}, "-=1.4")
  .to(tvon, 3.6, {top:350, opacity:0.5,  autoAlpha:1, ease:Elastic.easeInOut}, "-=1.5")
  .to(iconsanim, 0, {opacity: 0, top: 0, left: 0, scale: (1), autoAlpha:1},  "-=1")


$("#seek-screen").click(function() {
    tl.seek(26.5);
});



$("#seek-slide1").click(function() {
    tl.seek(4);
});
$("#seek-slide2").click(function() {
		tl.seek(10.5);
});
$("#seek-slide3").click(function() {
    tl.seek(19.5);
});
$("#seek-slide4").click(function() {
    tl.seek(25.5);
});
$("#seek-slide5").click(function() {
    tl.seek(36.2);
});
$("#seek-slide6").click(function() {
    tl.seek(42);
});
$("#seek-slide7").click(function() {
    tl.seek(55);
});


$("#seek-slide1-next").click(function() {
    tl.seek(4);
});
$("#seek-slide2-next").click(function() {
    tl.seek(10.5);
});
$("#seek-slide3-next").click(function() {
    tl.seek(17.2);
});
$("#seek-slide4-next").click(function() {
    tl.seek(36.2);
});
$("#seek-slide5-next").click(function() {
    tl.seek(50.8);
});
$("#seek-slide6-next").click(function() {
    tl.seek(50.2);
});
$("#seek-slide7-next").click(function() {
    tl.seek(55);
});



$("#seek-slide1-back").click(function() {
    tl.seek(4.25);
});
$("#seek-slide2-back").click(function() {
    tl.seek(10.95);
});
$("#seek-slide3-back").click(function() {
    tl.seek(17.45);
});
$("#seek-slide4-back").click(function() {
    tl.seek(19.9);
});
$("#seek-slide5-back").click(function() {
    tl.seek(36.5);
});
$("#seek-slide6-back").click(function() {
    tl.seek(41.25);
});
$("#seek-slide7-back").click(function() {
    tl.seek(55.25);
});




$("#seek-slide-restart").click(function() {
    tl.seek(3);
});


$("#pause").click(function() {
		tl.pause();
});
$("#reverse").click(function() {
		tl.reverse();
});
$("#resume").click(function() {
		tl.resume();
});
$("#restart").click(function() {
		tl.restart();
});

function infinite(){
    $('.icons.noanim').css({backgroundPosition:'0px 0px'}).animate({backgroundPosition:"-3000px 0px"},60000, infinite);
    // $('ul.icons.anim li.icon1').css({opacity: 0.5, marginTop:'-60px'}).animate({marginTop:"500px"},7500, infinite);
    // $('ul.icons.anim li.icon2').css({opacity: 0.5, marginTop:'-60px'}).animate({marginTop:"500px"},6500, infinite);
    // $('ul.icons.anim li.icon3').css({opacity: 0.5, marginTop:'-60px'}).animate({marginTop:"500px"},8500, infinite);
    // $('ul.icons.anim li.icon4').css({opacity: 0.5, marginTop:'-60px'}).animate({marginTop:"500px"},5500, infinite);
    // $('ul.icons.anim li.icon5').css({opacity: 0.5, marginTop:'-60px'}).animate({marginTop:"500px"},7000, infinite);
    // $('ul.icons.anim li.icon6').css({opacity: 0.5, marginTop:'-60px'}).animate({marginTop:"500px"},5600, infinite);
    // $('ul.icons.anim li.icon7').css({opacity: 0.5, marginTop:'-60px'}).animate({marginTop:"500px"},7200, infinite);
    // $('ul.icons.anim li.icon8').css({opacity: 0.5, marginTop:'-60px'}).animate({marginTop:"500px"},6700, infinite);
    // $('ul.icons.anim li.icon9').css({opacity: 0.5, marginTop:'-60px'}).animate({marginTop:"500px"},6100, infinite);
    // $('ul.icons.anim li.icon10').css({opacity: 0.5, marginTop:'-60px'}).animate({marginTop:"500px"},5800, infinite);
    // $('ul.icons.anim li.icon11').css({opacity: 0.5, marginTop:'-60px'}).animate({marginTop:"500px"},5900, infinite);
    // $('ul.icons.anim li.icon12').css({opacity: 0.5, marginTop:'-60px'}).animate({marginTop:"500px"},6400, infinite);
}
infinite();
