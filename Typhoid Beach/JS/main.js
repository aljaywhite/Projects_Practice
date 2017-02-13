// audioPlayer();
// function audioPlayer() {
//   var currentSong = 0;
//   $("#audioControlsEp")[0].src = $("#playlistEp li a")[0];
//   $("#playlistEp li a").click(function(e){
//     e.preventDefault();
//     $("#audioControlsEp")[0].src = this;
//     $("#audioControlsEp")[0].play();
//     $("#playlistEp li").removeClass("current-song");
//     currentSong = $(this).parent().index();
//     $(this).parent().addClass("current-song");
//   });
//
//   $("#audioControlsEp")[0].addEventListener("ended", function(){
//     currentSong++;
//     if(currentSong == $("#playlistEp li a").length)
//     currentSong = 0;
//     $("#playlistEp li").removeClass("current-song");
//     $("#playlistEp li:eq("+currentSong+")").addClass("current-song");
//     $("#audioControlsEp")[0].src = $("#playlistEp li a")[currentSong].href;
//     $("#audioControlsEp")[0].toggle("play");
//   });
// }

$('.play').click(function(){
    var $this = $(this);
    var id = $this.attr('id').replace(/btn/, '');
    $this.toggleClass('active');
    if($this.hasClass('active')){
        $this.html('<li id="btn1" class="play"><i class="fa fa-stop" aria-hidden="true"></i></li>');
        $('audio[id^="song"]')[id-1].play();
    } else {
        $this.html('<li id="btn1" class="play"><i class="fa fa-play" aria-hidden="true"></i></li>');
        $('audio[id^="song"]')[id-1].pause();
    }
});
