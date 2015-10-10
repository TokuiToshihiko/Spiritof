var build_width_media_query = function(min, max){
  var media = "(min-width: " + min + "px)";
  if(max !== null) media += " and (max-width: " + max + "px)";
  return media;
};

var match_width_media_query = function(min, max){
  return window.matchMedia(build_width_media_query(min, max)).matches;
};

var responsive = (function(){
  var sets = [];

  $(window).on("resize.responsive", function(){
    $.each(sets, function(i, set){
      var widthQuery = window.matchMedia(set.media);

      if(widthQuery.matches){
        set.fn(!set.prevMatch);
      }
      set.prevMatch = widthQuery.matches;
    });
  });

  return function(min, max, fn){
    sets.push({
      media: build_width_media_query(min, max),
      fn: fn,
      prevMatch: false
    });
  };
})();

jQuery(function($){
  var $w = $(window);
  var $h = $("html");
  var $b = $("body");

  var touch_event = ('ontouchstart' in window) ? "touchstart" : "click";

  /* --------------------------------------------------
   * common responsive script
   */
  (function(){
    var responsive_images = $("[data-sp-replace]");

    responsive(0, 640, function(changed){
      $h.css("font-size", rem(1));
      if(!changed) return;
      responsive_images.each(function(){$(this).attr("src", $(this).data("src-sp"));});
    });

    responsive(641, null, function(changed){
      if(!changed) return;
      $h.attr("style", "");
      responsive_images.each(function(){$(this).attr("src", $(this).data("src"));});
    });

  })();

  var rem = function(n){
    return n * $w.width() / 6.4;
  };

  $w.resize();
  $w.resize();
});
