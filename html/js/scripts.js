var artworks={genericAnimations:function(e){$("svg.gsap-enabled",e).each(function(){var e=$(this);if(e.data("timeline"))return void e.data("timeline").play();e.data("originalHTML",$("<div></div>").append(e.clone()).html());var a=$("animate",e),t=new TimelineMax({repeat:-1});a.each(function(e){var a,n=$(this).parent(),i=this,o={ease:Linear.easeNone},l={ease:Linear.easeNone};o[i.getAttribute("attributeName")]=parseInt(i.getAttribute("from"),10),l[i.getAttribute("attributeName")]=parseInt(i.getAttribute("to"),10),a=TweenMax.fromTo(n,parseFloat(i.getAttribute("dur"),0),o,l).repeat(-1),t.add(a,0),$(this).remove()}),e.data("timeline",t)})}};window.runAnimations=function(e){for(key in artworks)artworks[key](e)},$(function(){function e(e){if(e){e-=1;var a=$($(".fullpage-section")[e]);window.env.mobile||window.env.ieMode||$(".animate-me",a).removeClass("animate-in").addClass("animate-out"),o(a)}}function a(e){var a=e;"number"==typeof a&&(e-=1,a=$($(".fullpage-section")[e])),a.data("logo")?$("#nav-logo").css({opacity:1,visibility:"visible"}):$("#nav-logo").css({opacity:0,visibility:"hidden"}),a.find(".fp-scrollable").length&&a.find(".fp-tableCell").addClass("scrollable"),a.data("inverted")?$(".button, .global-nav, #fp-nav").addClass("inverted"):$(".inverted").removeClass("inverted"),$(".nav-home").hide();var t=$(".fp-scrollable",a).data("iscrollInstance");t&&t.scrollTo(0,0),l(a),window.env.mobile||window.env.ieMode||$(".animate-me",a).removeClass("animate-out").addClass("animate-in")}function t(e,a){var t=new Date,n=t.getTime()-m.getTime();return Math.abs(e-a)<=1&&n<c+d||(m=t,!1)}function n(e){var a="down"===e,t=0===v,n=v===f-1;return!(g||p!==u||n&&a||t&&!a)&&(a?$.fn.fullpage.moveSlideRight():$.fn.fullpage.moveSlideLeft(),!0)}function i(){function e(e){e.closest(".lazy-loaders").length?e.remove():(e.off("load.lazypreload error.lazypreload"),window.env.ieMode||e.css("height",e.height()+"px"),e.closest(".fullpage-section.active").length||e.attr("src",""))}var a=$('<div class="lazy-loaders"></div>').appendTo("body").css({"max-height":"1px",overflow:"visible"});$("*[lazy-src]").each(function(){var t,n=$(this),i=n.attr("lazy-src");t=n.is("img")?n:$("<img />").appendTo(a),t.attr("src",i).on("load.lazypreload",function(){e(t)}).on("error.lazypreload",function(){e(t)})})}function o(e){e.find("*:not(img)[lazy-src]").css("background-image","none"),e.find("img[lazy-src]").each(function(){var e=$(this);e.attr("src","")}),$("svg",e).each(function(){var e=$(this);if(e.data("timeline"))return void e.data("timeline").pause();var a="svg-"+Math.round(1e5*Math.random()),t=$('<div class="svg-holder"></div>').attr("id",a).css({height:e.height()+"px",display:"block",width:"100%"});h[a]=e.data("originalHTML")||$("<div></div>").append(e.clone()).html(),e.replaceWith(t)})}function l(e){e.find("*[lazy-src]").each(function(){var e=$(this),a=e.attr("lazy-src");e.is("img")?e.attr("src",a):e.is("object")?e.attr("data",a):e.css("background-image","url("+a+")")}),$(".svg-holder",e).each(function(){var e=$(this),a=e.attr("id");e.replaceWith($(h[a])),delete h[a]}),window.runAnimations(e)}var s,r,c=1e3,d=450,u=$(".fullpage-section.how-it-works").index()+1,f=$(".slide").length,v=0,p=0,m=new Date,g=!1,h={};o($("#fullpage")),i(),a(1),r=$(".fullpage-section").map(function(){return $(this).data("title")}).get(),window.env.mobile||window.env.ieMode?$(".animate-me").addClass("animate-in"):$(".animate-me").removeClass("animate-in").addClass("animate-out"),$("#fullpage").fullpage({sectionSelector:".fullpage-section",slideSelector:".slide",navigation:!0,navigationPosition:"right",navigationTooltips:r,showActiveTooltip:!0,scrollOverflow:!0,scrollOverflowOptions:{scrollbars:!1},scrollingSpeed:c,loopHorizontal:!1,normalScrollElements:".normal-scroll",touchSensitivity:15,afterLoad:function(a,t){e(p),p=t},afterSlideLoad:function(e,a,t,n){v=n},onLeave:function(e,i,o){return!t(e,i,o)&&(!n(o)&&(a(i),void s.removeClass("active-"+e).addClass("active-"+i)))},onSlideLeave:function(e,a,t,n,i){$(".fullpage-section.how-it-works").removeClass("slide-"+t).addClass("slide-"+i)},afterRender:function(){s=$("#fp-nav"),s.on("mousedown touchdown",function(){g=!0}).on("mouseup touchup",function(){setTimeout(function(){g=!1},100)}),s.append('<span class="shuttle"></span><span class="shuttle"></span>');var e=$('<span href="/#make-contact" class="contact-link">CONTACT</span>').on("click",function(){$.fn.fullpage.moveTo("make-contact")}).appendTo(s);s.find("li:last-child").on("mouseenter",function(){e.css("opacity","0")}).on("mouseleave",function(){e.css("opacity","")}),s.find(".fp-tooltip").each(function(){var e=$(this);e.html($('<span class="fp-tooltip-text"></span>').text(e.text()))}),s.find(".fp-tooltip").append('<span class="ie-click-target"></span>'),$("#fullpage").addClass("animate-in")}}),window.fullpage=$.fn.fullpage,window.env.mobile&&$(".section-connect .connect-module").on("click",function(){$(this).toggleClass("active").siblings().removeClass("active")})});
//# sourceMappingURL=maps/scripts.js.map
