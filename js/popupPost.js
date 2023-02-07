$(document).ready(function () {
  $("form").submit(function (evt) {
    evt.preventDefault();

    $.ajax({
      type: "POST",
      data: new FormData(this),
      url: $(this).attr("action"),
      contentType: false,
      processData: false,
      success: function () {
        alert("result");
      },
    });
  });
});
