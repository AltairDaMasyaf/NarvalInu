const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

$(document).ready(function () {
  var scroll_start = 0;
  var startchange = $("#hero");
  var offset = startchange.offset();
  if (startchange.length) {
    $(document).scroll(function () {
      scroll_start = $(this).scrollTop();
      if (scroll_start > offset.top && $(window).width() <= 768) {
        $(".nav").css("border-bottom", "2px solid #ff48fa");
        $(".nav").css("backdrop-filter", "blur(5px)");
      } else {
        $(".nav").css("border", "none");
        $(".nav").css("backdrop-filter", "blur(0px)");
      }
    });
  }
  $(".nav__toggler").click(function () {
    $(".nav").toggleClass("nav-clicked");
  });
  $(".close").click(function () {
    $("#preloader").css("display", "none");
  });
});

$(document).ready(function () {
  $(".next").on("click", function () {
    var currentImg = $(".active");
    var nextImg = currentImg.next();

    if (nextImg.length) {
      currentImg.removeClass("active").css("z-index", -10);
      nextImg.addClass("active").css("z-index", 10);
    }
  });

  $(".prev").on("click", function () {
    var currentImg = $(".active");
    var prevImg = currentImg.prev();

    if (prevImg.length) {
      currentImg.removeClass("active").css("z-index", -10);
      prevImg.addClass("active").css("z-index", 10);
    }
  });
});
