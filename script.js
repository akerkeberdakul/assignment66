$(document).ready(function () {
  console.log("jQuery is ready!");

  $("h2").css("text-decoration", "underline");
  $("#title").css("font-size", "40px");
  $(".intro").css("font-style", "italic");

  $("#change-headline").click(function () {
    $(".headline").text("Akerke – Student & Web Developer");
    $(".intro").html("I <b>love</b> learning new things!");
  });

  $("#dark-btn").click(function () {
    $("body").css({ background: "#2b2f1c", color: "#F4F3F1" });
    $("section").css("background", "#434d20");
  });
  $("#light-btn").click(function () {
    $("body").css({ background: "#F4F3F1", color: "#434d20" });
    $("section").css("background", "#F1CFE1");
  });

  $("#hide-btn").click(function () { $("#status, #facts").hide(); });
  $("#show-btn").click(function () { $("#status, #facts").show(); });
  $("#toggle-btn").click(function () { $("#status, #facts").toggle(); });

  $("#fadein-btn").click(function () { $(".photo").fadeIn(); });
  $("#fadeout-btn").click(function () { $(".photo").fadeOut(); });
  $("#fadetoggle-btn").click(function () { $(".photo").fadeToggle(); });

  $(".panel-title").click(function () {
    $(this).next(".panel").slideToggle();
  });
  $("#slideup-btn").click(function () { $(".panel").slideUp(); });
  $("#slidedown-btn").click(function () { $(".panel").slideDown(); });

  function getSkill() {
    const skill = $("#skill-input").val().trim();
    if (skill === "") {
      $("#skill-msg").text("Please enter a skill!");
      return "";
    }
    $("#skill-msg").text("");
    $("#skill-input").val("");
    return skill;
  }

  $("#add-skill").click(function () {
    const skill = getSkill();
    if (skill !== "") $("#skill-list").append("<li>" + skill + "</li>");
  });
  $("#prepend-skill").click(function () {
    const skill = getSkill();
    if (skill !== "") $("#skill-list").prepend("<li>" + skill + "</li>");
  });
  $("#remove-skill").click(function () {
    $("#skill-list li:last").remove();
  });

  $("#change-link").click(function () {
    $("#social-link").attr("href", "https://www.linkedin.com/in/%D0%B0%D2%9B%D0%B5%D1%80%D0%BA%D0%B5-%D0%B1%D0%B5%D1%80%D0%B4%D0%B0%D2%9B%D2%B1%D0%BB-b215b8401/").text("My LinkedIn");
  });

  $("#name-input").on("input", function () { $("#name-out").text($(this).val()); });
  $("#email-input").on("input", function () { $("#email-out").text($(this).val()); });

  let barsOpen = false;
  $("#animate-btn").click(function () {
    $(".bar").each(function () {
      const level = $(this).data("level");
      $(this).animate({ width: barsOpen ? "0%" : level + "%" }, 1000);
    });
    barsOpen = !barsOpen;
  });
});