$("figure").hide();
$(".text-sample").hide();
$(".projectCard").hide();

showAbout();
proyects();


function showAbout(){
$("button").click(function(){
if (this.textContent === "ABOUT"){
 $(".wel").hide();
 $(".text-sample").slideDown("slow");
 $("figure").delay(1000).slideDown("slow");
 this.textContent = "HOME";
} else {
 $("figure").slideUp(200);
 $(".text-sample").slideUp(2000);
 this.textContent = "ABOUT";
 $(".wel").delay(2000).fadeIn(4000);
  }
  });
}
function proyects(){
$("figure").click(function(){
	$(".text-sample").slideUp();
	$(".head").animate({
		'height': '450px'
		}, 1000);
  $(".projectCard").slideDown("slow");
	});
$("button").click(function(){
  $(".projectCard").slideUp();
	$(".head").animate({
		'height':'100px'
	}, 1000);
	});
}



<script>
// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {

    <script>
// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
</script>