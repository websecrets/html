$(function () {
  const _window = $(window);
  $(document).on("scroll", function () {
    if (_window.scrollTop() > 300) {
      $(".scroll-top-wrapper").addClass("show");
    } else {
      $(".scroll-top-wrapper").removeClass("show");
    }
  });

  $(".scroll-top-wrapper").on("click", function () {
    var o = typeof o != "undefined" ? o : 0;
    var p = $("body"),
      r = p.offset(),
      q = r.top;
    $("html, body").animate(
      {
        scrollTop: q,
      },
      500,
      "linear"
    );
  });
});

function test() {
  alert("test");
}

test();
