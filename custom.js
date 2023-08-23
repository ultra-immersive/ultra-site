/* init pmg_header */
jQuery( document ).ready(function($) {
    function sticky(){

        let body = document.getElementById("body");
        let scroll = body.scrollTop;

        if (scroll >= 50){
            body.classList.add("sticky");
        }
        else{
            body.classList.remove("sticky");
        }

    }
// let body_g = document.getElementById("body");
// body_g.addEventListener("scroll", event => {
//     sticky();
// });
// sticky();


//
// let burger = document.getElementById("burger");
// burger.addEventListener("click", e => {
//     if (body_g.classList.contains('popup-menu-open')) {
//         body_g.classList.remove("popup-menu-open");
//     }
//     else{
//         body_g.classList.add("popup-menu-open");
//     }
// });
//
//
// let close_popup = document.getElementById("close-popup-menu");
// let loader = document.getElementById("loader");
// close_popup.addEventListener("click", e => {
//     body_g.classList.remove("popup-menu-open");
// });
// loader.addEventListener("click", e => {
//     body_g.classList.remove("popup-menu-open");
// });


    if (window.performance && window.performance.navigation.type == window.performance.navigation.TYPE_BACK_FORWARD) {
        location.reload();
    }

});;/* end pmg_header */























/* init pmg_animazione */
jQuery( document ).ready(function($) {
//
// $("a:not(.mailto):not(.info-mail)").on("click", function (event) {
//      event.preventDefault();
//      var that = this;
//      TweenMax.to($( ".animatein" ), .8, {
//        ease: Cubic.easeOut,
//        opacity: 1,
//        onInit: function() {
//           // code runs ONCE at 0 seconds
//           $( ".animatein" ).css({opacity:0, display:"block"});
//        },
//        onComplete: () => {
//           // document.body.scrollTo ? document.body.scrollTo(0, window.scroll.y) : document.body.scrollTop = window.scroll.y;
//          //	that.scrool();
//          window.location.href = $(that).attr("href");
//        }
//      })
//
// });
//
//
// (function ($) {
//     function _createTemp(element) {
//         return element.clone().css({ position: "absolute" });
//     }
//     function _splitHtmlWords(contents) {
//         var words = [];
//         var splitContent;
//         for (var c = 0; c < contents.length; c++) {
//             if (contents[c].nodeName === "BR") {
//                 words.push("<br>");
//                 continue;
//             }
//             if (contents[c].nodeType === 3) {
//                 splitContent = _splitWords(contents[c].textContent || contents[c].toString());
//             } else {
//                 var tag = $(contents[c]).clone();
//                 splitContent = _splitHtmlWords(tag.contents());
//                 for (var t = 0; t < splitContent.length; t++) {
//                     tag.empty();
//                     splitContent[t] = tag.html(splitContent[t]).wrap("<p></p>").parent().html();
//                 }
//             }
//             for (var w = 0; w < splitContent.length; w++) {
//                 if (splitContent[w] === "") {
//                     continue;
//                 }
//                 words.push(splitContent[w]);
//             }
//         }
//         return words;
//     }
//     function _splitWords(text) {
//         return text.split(/\s+/);
//     }
//     function _markupContent(tag, html) {
//         tag = "<div>" + tag;
//         return $(tag).find('*:not(:has("*"))').html(html).parentsUntil().slice(-1).html();
//     }
//     $.fn.splitLines = function (options) {
//         var settings = { width: "auto", tag: "<div>", wrap: "", keepHtml: !0 };
//         if (options) {
//             $.extend(settings, options);
//         }
//         var newHtml = _createTemp(this);
//         var contents = this.contents();
//         var text = this.text();
//         this.append(newHtml);
//         newHtml.text("42");
//         var maxHeight = newHtml.height() + 2;
//         newHtml.empty();
//         var tempLine = _createTemp(newHtml);
//         var width = settings.width;
//         if (settings.width === "auto") {
//             width = this[0].offsetWidth;
//         }
//         tempLine.width(width);
//         this.append(tempLine);
//         var words = settings.keepHtml ? _splitHtmlWords(contents) : _splitWords(text);
//         var prev;
//         for (var w = 0; w < words.length; w++) {
//             var html = tempLine.html();
//             tempLine.html(html + words[w] + " ");
//             if (tempLine.html() === prev) {
//                 prev = "";
//                 newHtml.append(_markupContent(settings.tag, tempLine.html()));
//                 tempLine.html("");
//                 continue;
//             }
//             if (tempLine.height() > maxHeight) {
//                 prev = tempLine.html();
//                 tempLine.html(html);
//                 newHtml.append(_markupContent(settings.tag, tempLine.html()));
//                 tempLine.html("");
//                 w--;
//             }
//         }
//         newHtml.append(_markupContent(settings.tag, tempLine.html()));
//         this.html(newHtml.html());
//     };
// })(jQuery);
//
//
//
// function startAni(sel){
//     $(sel).splitLines({
//         tag: '<div><span data-aos="slide-up" class="split-text text">',
//         keepHtml: true
//     });
//
//     $.each($('.split-text'), function (i, item){
//         var words = $(item).text().split(" ");
//         $(item).empty();
//         $.each(words, function (i, v) {
//             if (v !== '') {
//                 $(item).append($("<span>").text(v));
//                 $(item).find("span").addClass("word");
//             }
//
//         });
//     })
//
//     const letter = new Letterize({
//         targets: ".word",
//         className: "letter"
//     });
//     const letterInner = new Letterize({
//         targets: ".letter",
//         className: "letter-inner"
//     });
//
//     setTimeout(function(){
//         $(".split-text.aos-init").addClass("animate")
//         $(sel).addClass("show")
//         startAnimazione();
//
//         // alert($('.split-text.aos-init').hasClass('aos-animate'))
//         // if ($('.split-text.aos-init').hasClass('aos-animate')){
//         //     $(".split-text.aos-init").addClass("animate")
//         //     $(sel).addClass("show")
//         // }
//     }, 500)
// }
//
//
// if($('h1').length){
// 	startAni($('h1'))
//     AOS.init({
//         duration: 800
//     });
// }
//
//
//
//
//
//
//
// let l1 = null;
// let l2 = null;
// let tl = null;
//
// creaLinee();
//
// function creaLinee(){
//     l1 = new SplitText($('.sottotitolo-g, .testo-g'), { type: "lines", linesClass: "lineChild" });
// }
// function startAnimazione(){
//     //jQuery('.parent').removeClass('d-none');
//     $('.sottotitolo-g, .testo-g').addClass('show');
//     $('.s-foun').addClass('show');
//
//     setTimeout(function(){
//         $('.link-g').addClass('show');
//     }, 1000);
//
//
//     tl = new TimelineMax({repeat:0, repeatDelay:0.5, yoyo:true});
//     tl.staggerFromTo(".lineChild", 0.75, {
//         y:50,
//         opacity:0
//     },
//     {
//         y:0,
//         opacity:1
//     },
//     0.10);
// }
//
// window.addEventListener('resize', function (){
//
//
//     //jQuery('.parent').addClass('d-none');
// 	if(l1 !== null){
//     	l1.revert()
//       	creaLinee()
//     }
//   	if(tl !== null){
//     	 tl.kill()
//     }
//
//
//
//     setTimeout(function (){
//         //startAnimazione();
//     }, 100)
// });
//
// //
// //
// // if($('.in_home').length){
// // 	setTimeout(function(){
// //     	$('.buttonnext_box .buttonnext').addClass('show');
// //     }, 1000)
// // }

});;/* end pmg_animazione */
