


var aboutCount = 0;
function revealAbout () {
  aboutCount = aboutCount + 1;
  if(aboutCount == 1) {
    $(".aboutblob").removeClass("hidden");
  }
  if(aboutCount == 2) {
    $(".aboutblob").addClass("hidden");
  aboutCount = 0;
  }
}
$(".button").click(revealAbout);

// var popCount = 0;
// function revealPop () {
//   popCount = popCount + 1;
//   if(popCount == 1) {
//     $("#henrypop").removeClass("hidden");
//   }
//   if(popCount == 2) {
//     $("#henrypop").addClass("hidden");
//   popCount = 0;
//   }
// }
// $("#pigeon1").click(revealPop);
//
// var popCount = 0;
// function revealPop2 () {
//   popCount = popCount + 1;
//   if(popCount == 1) {
//     $("#babkapop").removeClass("hidden");
//   }
//   if(popCount == 2) {
//     $("#babkapop").addClass("hidden");
//   popCount = 0;
//   }
// }
// $("#pigeon2").click(revealPop2);
//
// var popCount = 0;
// function revealPop3 () {
//   popCount = popCount + 1;
//   if(popCount == 1) {
//     $("#joannapop").removeClass("hidden");
//   }
//   if(popCount == 2) {
//     $("#joannapop").addClass("hidden");
//   popCount = 0;
//   }
// }
// $("#pigeon3").click(revealPop3);
//
// var popCount = 0;
// function revealPop4 () {
//   popCount = popCount + 1;
//   if(popCount == 1) {
//     $("#jeremypop").removeClass("hidden");
//   }
//   if(popCount == 2) {
//     $("#jeremypop").addClass("hidden");
//   popCount = 0;
//   }
// }
// $("#pigeon4").click(revealPop4);

function hideAll() {
  $(".pop").addClass("hidden");
}
$("#map").click(hideAll);

function revealPigeon() {
  hideAll();
  var id = $(this).attr("id");
  console.log(id)
  $("."+id).removeClass("hidden");
}
$(".clickable").click(revealPigeon);
